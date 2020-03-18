/**
 * @author: lencx
 * @create_at: Mar 16, 2020
 */

import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from './header';
import Footer from './footer';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <GlobalStyle />
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
    background: var(--dark);
    color: var(--silver);
    font-family: BlinkMacSystemFont, -apple-system, "Open Sans", "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  a {
    color: var(--pink);
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
