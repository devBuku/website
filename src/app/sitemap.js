export default function sitemap() {
  const baseUrl = 'https://shubhayanbagchi.vercel.app';
  return ['', '/work', '/blog'].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
