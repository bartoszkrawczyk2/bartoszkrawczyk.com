import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import classNames from 'classnames';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={classNames(inter.variable, 'font-sans')}>
        <Component {...pageProps} />
        <Analytics />
      </div>
    </>
  );
}
