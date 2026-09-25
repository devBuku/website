import '../index.css';
import { Analytics } from '@vercel/analytics/react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollProgressBar from '../components/ScrollProgressBar';

export const metadata = {
  metadataBase: new URL('https://shubhayanbagchi.vercel.app'),
  title: {
    default: 'Shubhayan Bagchi — Software Engineer',
    template: '%s — Shubhayan Bagchi',
  },
  description: 'Portfolio of Shubhayan Bagchi, a software engineer building thoughtful backend systems and full-stack products.',
  authors: [{ name: 'Shubhayan Bagchi' }],
  openGraph: {
    title: 'Shubhayan Bagchi — Software Engineer',
    description: 'Software engineering portfolio, projects, experience, and writing.',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: 'rgb(var(--color-bg))' }}>
      <Navbar />
      <ScrollProgressBar />
      <main className="flex-1">{children}</main>
      <Footer />
      <Analytics />
    </div>
  );
}
