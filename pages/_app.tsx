import type { AppProps } from 'next/app';

import { GlobalProvider } from '../src/utils/hooks';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
