import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TGAT Premium EdTech Platform',
  description: 'Pharmacy TCAS Simulator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
