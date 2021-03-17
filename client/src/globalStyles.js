import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* css reset */
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
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
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
*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-family: 'Nunito Sans', sans-serif;
}

html {
    font-size: 100%;
    --color-text-dark: #5D6470;
    --color-text-medium: #5D6470;
    --color-text-light: #CBCDD1;
    --color-background: #EAEAEE;
    --color-button: #434654;
    --color-button-hover: #000;
} 

body {
  background-color: white;
  font-family: "Sofia Pro", 'Nunito Sans', sans-serif;
  font-weight: 400;
  line-height: 1.65;
  color: #5D6470;
}

p {margin-bottom: 1.15rem;}

h1, h2, h3, h4, h5 {
  margin: 2.75rem 0 1.05rem;
  font-family: "Sofia Pro", 'Nunito Sans', sans-serif;
  font-weight: 400;
  line-height: 1.15;
}

h1 {
  margin-top: 0;
  font-size: 2.488em;
}

h2 {font-size: 1em;}

h3 {font-size: 1.728em;}

h4 {font-size: 0.75em;}

h5 {font-size: 0.6em;}

small, .text_small {font-size: 0.833em;}
`;
