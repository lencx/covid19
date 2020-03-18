import React from 'react';
import 'bulma/css/bulma.min.css';

interface AppProps {
  Component: React.FC;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
