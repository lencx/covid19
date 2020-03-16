import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

import Header from './header';
import Footer from './footer';
import { Reset } from './reset';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Head>
        <link rel="icon" type="image/png" sizes="64x64" href="/covid19.png" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />
        <title>COVID-19</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body,
  #__next {
    height: 100vh;
    margin: 0;
    font-family: -apple-system, "Open Sans", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  #__next > main {
    height: calc(100vh - 130px);
    padding: 20px var(--layout-side-pad);
  }

  #__next > footer {
    text-align: center;
    padding: 0 var(--layout-side-pad);
  }
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 10px;
  }
`;
