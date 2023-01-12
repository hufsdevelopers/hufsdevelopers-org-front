import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';

import customTheme from '@/config/theme';
import 'pretendard/dist/web/static/pretendard.css';
import '@fontsource/jetbrains-mono/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress height={2} color="RGBA(0, 0, 0, 0.64)" options={{ showSpinner: false }} />
      <ChakraProvider resetCSS={true} theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
