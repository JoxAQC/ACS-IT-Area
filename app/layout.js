import { Inter } from 'next/font/google';
import './assets/styles/globals.css';
import './assets/styles/globals.css';
import './assets/styles/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;


const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* BOOTSTRAP CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          /*integrity="sha384-..."*/
          crossOrigin="anonymous"
        />
        {/* FONT AWESOME */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>
        {children} {/* Sin Providers */}
      </body>
    </html>
  );
}