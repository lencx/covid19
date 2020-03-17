/**
 * @author: lencx
 * @create_at: Mar 16, 2020
 */

import React from 'react';

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a
        href="https://github.com/lencx/covid19"
        target="_blank"
        rel="noopener noreferrer"
      >
        covid19
      </a>
      {' · '}
      <span>lencx</span>
    </footer>
  );
}
