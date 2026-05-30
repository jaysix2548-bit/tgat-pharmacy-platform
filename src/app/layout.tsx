import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: 'TGAT Pharmacy TCAS 2570 Simulator',
  description: 'Premium Pharmacy Admission EdTech Simulator Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className="bg-[#050b14] text-slate-100 min-h-screen selection:bg-neon-blue/30 selection:text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
