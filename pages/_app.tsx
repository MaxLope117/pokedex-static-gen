// Next.
import type { AppProps } from 'next/app'
// Terceros.
import { NextUIProvider } from '@nextui-org/react';
// Propio.
import { darkTheme } from '../themes';

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <NextUIProvider theme={ darkTheme }>
      <Component {...pageProps} />
    </NextUIProvider>
  );

};
