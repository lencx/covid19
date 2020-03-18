/**
 * @author: lencx
 * @create_at: Mar 16, 2020
 */

import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderContiner>
      <img src="/icon/covid19.png" />
      <span>COVID-19</span>
    </HeaderContiner>
  );
}

const HeaderContiner = styled.header`
  display: flex;
  height: 60px;
  align-items: center;
  padding: 0 var(--layout-side-pad);
  border-bottom: solid 1px var(--light);
  img {
    width: 48px;
    height: 48px;
    margin-right: 10px;
  }
  span {
    font-weight: bold;
    color: #fff;
  }
`;
