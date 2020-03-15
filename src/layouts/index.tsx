import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Footer from './footer';
import { Reset } from './reset';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <Reset />
      <GlobalStyle />
      <main>{children}</main>
      <Footer />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div``;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    Fira Sans,
    Droid Sans,
    Helvetica Neue,
    sans-serif;
  }

  body,
  #__next,
  #__next > div {
    height: 100vh;
    margin: 0;
  }

  #__next > div > main {
    height: calc(100vh - 60px);
  }

  #__next > div > footer {
    text-align: center;
  }
`;
