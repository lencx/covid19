import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderContiner>
      <img src="/covid19.png" />
      <span>COVID-19</span>
    </HeaderContiner>
  );
}

const HeaderContiner = styled.header`
  display: flex;
  height: 60px;
  align-items: center;
  padding: 0 var(--layout-side-pad);
  box-shadow: var(--shadow-floating);
  img {
    width: 48px;
    height: 48px;
    margin-right: 10px;
  }
  span {
    font-weight: bold;
    color: var(--dark);
  }
`;
