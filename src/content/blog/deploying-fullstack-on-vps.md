---
title: "Deploying a Full-Stack App on a VPS — What I Learned the Hard Way"
date: "2025-05-20"
readTime: "7 min read"
tags: ["DevOps", "Deployment", "Linux", "Nginx", "VPS"]
excerpt: "A practical guide to deploying MERN applications on a Linux VPS with Nginx, PM2, SSL, and all the mistakes I made along the way."
---

## Why a VPS?

When I deployed my first few projects, I used platforms like Vercel and Render — zero config, zero headache. But for the College ERP project, we needed:

- Server-side file storage for uploads
- A custom domain with SSL
- Background processes (cron jobs for attendance reports)
- Database hosting alongside the application

A VPS gave us full control. Here's everything I learned from the deployment process — including the mistakes that cost me sleep.

## Initial Setup

### Choosing the Server

We went with **AWS EC2 t2.micro** (free tier) running Ubuntu 22.04. For a production app serving a college of ~1000 users, this was sufficient — though we quickly learned its 1GB RAM limit meant no MongoDB on the same instance.

### First Steps

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install Nginx
sudo apt install -y nginx

# Install PM2 globally
sudo npm install -g pm2

# Clone and setup the project
git clone https://github.com/devBuku/college-erp.git /var/www/erp
cd /var/www/erp
npm install
```

## Nginx Reverse Proxy

This was the first concept I had to wrap my head around. Nginx sits in front of your Node.js server and forwards requests to it. Here's the configuration that worked:

```nginx
server {
    listen 80;
    server_name erp.devbuku.me;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    # API requests — forward to Node.js
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Static files
    location / {
        root /var/www/erp/client/build;
        try_files $uri $uri/ /index.html;
    }
}
```

**Mistake #1**: I forgot `proxy_set_header Host $host`. The API was working locally but returning 400 errors after deployment because Express couldn't determine the correct hostname.

## Environment Variables

Managing environment variables on a server is different from local development:

```bash
# Create .env in project root
sudo nano /var/www/erp/.env

# Contents:
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/erp
JWT_SECRET=<strong-random-string>
CLIENT_URL=https://erp.devbuku.me
```

**Mistake #2**: I hardcoded `MONGODB_URI` in the source code during development. When deploying, it took me an hour to find and replace all occurrences. Use `.env` from day one.

## Process Management with PM2

PM2 keeps your Node.js application running forever:

```bash
# Start the app
pm2 start server.js --name erp-api

# Save process list
pm2 save

# Enable PM2 on system boot
pm2 startup systemd
```

Key PM2 commands I used constantly:

```bash
pm2 logs erp-api      # View logs
pm2 monit            # Monitor CPU/memory
pm2 restart erp-api  # Restart after updates
pm2 status           # Check all processes
```

## SSL with Let's Encrypt

Running on HTTP in 2024 is unacceptable. Let's Encrypt provides free SSL certificates:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d erp.devbuku.me
```

This automatically modified the Nginx configuration to serve HTTPS. The certificates expire after 90 days, so:

```bash
# Test auto-renewal
sudo certbot renew --dry-run
```

**Mistake #3**: I didn't test the renewal. At 2 AM on a Sunday, my certificate expired, and the entire site went down with a security warning. Set up email notifications for expiry, or use a cron job:

```bash
0 3 * * * /usr/bin/certbot renew --quiet
```

## CI/CD with GitHub Actions

Manual deployments are error-prone. We set up automated deployments:

```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to VPS
        uses: appleboy/ssh-action@v0.1.5
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /var/www/erp
            git pull origin main
            npm install
            npm run build
            pm2 restart erp-api
```

## Database Considerations

We used **MongoDB Atlas** (free tier) instead of hosting MongoDB on the EC2 instance. Reasons:

- 512MB storage was sufficient for our pilot
- Automated backups
- No maintenance overhead
- Easy scaling

## Monitoring

After the SSL disaster, I set up basic monitoring:

```bash
# Uptime monitoring with cron
*/5 * * * * curl -sSf https://erp.devbuku.me/api/health > /dev/null || echo "Server down!" | mail -s "Alert" admin@devbuku.me

# Resource monitoring
pm2 monit  # Real-time CPU/memory
```

## Mistakes I Made (So You Don't Have To)

1. **Skipped security group configuration** — AWS security groups block ports by default. I spent 30 minutes wondering why Nginx wasn't responding. Check: `sudo ufw status`.

2. **No swap file** — The t2.micro has 1GB RAM. MongoDB + Node.js + Nginx = memory exhaustion. Solution: `sudo fallocate -l 2G /swapfile`.

3. **Ignored log rotation** — Application logs grew to 5GB before I noticed. PM2's built-in log rotation: `pm2 install pm2-logrotate`.

4. **Deployed on Friday evening** — Never deploy before the weekend. Something will break, and you'll be debugging at midnight.

## Final Architecture

```
User ──HTTPS──▶ Nginx (443)
                 │
                 ├── /api ──▶ Node.js (PM2) ──▶ MongoDB Atlas
                 │
                 └── / ──▶ React Static Files
```

## Key Takeaways

1. **Deployment is a skill** — It's not just `git push` and pray. Understanding Nginx, SSL, process management, and server security separates hobby projects from production systems.

2. **Automate everything** — Manual deployments introduce errors. CI/CD, auto-renewing SSL, and log rotation should be set up from day one.

3. **Monitor proactively** — Before SSL expiry brought down our site, I thought monitoring was optional. Set up alerts before you need them.

4. **Document your setup** — Six months later, when you need to migrate servers, you'll thank yourself for writing down the infrastructure details.

---

*This is part of my series on building and deploying real projects. If you're new to VPS deployment, I highly recommend setting up a $5 DigitalOcean droplet and deploying a simple Node.js app before tackling production workloads.*
