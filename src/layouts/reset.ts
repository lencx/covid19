/**
 * @author: lencx
 * @create_at: Mar 16, 2020
 */

import { css, createGlobalStyle } from 'styled-components';

// prettier-ignore
export const reset = css`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  /* font: inherit; */
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

:root {
  --layout-gutter: 0.5rem;
  --layout-side-pad: 1rem;

  --theme-primary: rgb(13, 56, 108);
  --red: rgb(168, 44, 44);
  --purple: #6f42c1;
  --pink: #e83e8c;
  --orange: rgb(196, 77, 37);
  --yellow: rgb(211, 193, 80);
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --gray: #6c757d;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;

  --shadow-raised:
    0 1px 2px rgba(46, 41, 51, 0.08),
    0 2px 4px rgba(71, 63, 79, 0.08);
  --shadow-floating:
    0 2px 4px rgba(46, 41, 51, 0.08),
    0 4px 8px rgba(71, 63, 79, 0.16);
  --shadow-overlay:
    0 4px 8px rgba(46, 41, 51, 0.08),
    0 8px 16px rgba(71, 63, 79, 0.16);
  --shadow-dialog:
    0 4px 16px rgba(46, 41, 51, 0.08),
    0 8px 24px rgba(71, 63, 79, 0.16);
}
`

export const Reset = createGlobalStyle`${reset}`;

export default reset;
