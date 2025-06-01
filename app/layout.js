import { Inter } from 'next/font/google';
import './assets/styles/globals.css';
import './assets/styles/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children} {/* Sin Providers */}
      </body>
    </html>
  );
}