import localFont from '@next/font/local';
import { Sidebar } from './Sidebar';

import '../styles/globals.css';
import '../styles/components.css';
import styles from './layout.module.css';

interface Props {
  children: React.ReactNode;
}

const workSans = localFont({
  src: '../assets/Work_Sans/WorkSans-VariableFont_wght.ttf',
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={workSans.className}>
      <head>
        <title>Components</title>
      </head>
      <body>
        <div id="root" className={styles.root}>
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
