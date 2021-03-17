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
    font-family: sofiaproregular, sans-serif;
    --color-text-dark: #4E545F;;
    --color-text-medium: #5D6470;
    --color-text-light: #CBCDD1;
    --color-background: #EAEAEE;
    --color-button: #434654;
    --color-button-hover: #000;

    /* breakpoints */
    --small-screen: 400px;
    --medium-screen: 768px;
    --large-screen: 1024px;
    --very-large-screen: 1600px;


    /* typography variables */
    --text-one: 12px; 
    --text-two: 11px; 
    --text-three: 10px;
    --text-four: 12px; 
    --text-five: 16px; 
    --text-six: 14px;
    --text-seven: 15px;
    --text-eight: 13px;
    --text-nine: 12px;
    --text-ten: 16px;
    --text-eleven: 15px;
    --text-twelve: 16px;
    --title-one: 16px;
    --title-two: 11px;
    --title-three: 15px;
    --title-four: 24px;
    --title-five: 16px;
    --title-six: 16px;
    --title-seven: 25px;

@media (min-width: 768px) {
  --text-one: 15px;
  --text-two: 12px;
  --text-four: 14px;
  --text-five: 20px;
  --text-six: 18px;
  --text-seven: 17px;
  --text-eight: 18px;
  --text-nine: 15px;
  --text-ten: 20px;
  --text-eleven: 20px;
  --text-twelve: 22px;
  --title-one: 24px;
  --title-two: 12px;
  --title-six: 20px;
}
@media (min-width: 1024px) {
  --text-one:12px;
  --text-two: 11px;
  --text-four: 12px;
  --text-five: 16px;
  --text-six: 14px;
  --text-seven: 15px;
  --text-eight: 16px;
  --text-nine: 13px;
  --text-ten: 18px;
  --text-eleven: 18px;
  --text-twelve: 20px;
  --title-one: 16px;
  --title-two: 11px;
  --title-six: 18px;
  
}
@media (min-width: 1600px) {
  --text-one: 14px;
  --text-two: 12px;
  --text-four: 14px;
  --text-five: 24px;
  --text-six: 20px;
  --text-seven: 19px;
  --text-eight: 18px;
  --text-nine: 16px;
  --text-ten: 22px;
  --text-eleven: 20px;
  --text-twelve: 22px;
  --title-one: 24px;
  --title-two: 12px;
  --title-six: 24px;
}

@media (min-width: 1400px) {
  --title-one: 18px;
}

@media (min-width: 320px) {
  --title-three: 24px;
}
@media (min-width: 320px) and (max-width: 1600px) {
  --title-three: calc(15px + 9 * ((100vw - 320px) / 1280))
}

@media (min-width: 480px) {
  --title-four: 50px
}
@media (min-width: 480px) and (max-width: 1600px) {
  --title-four: calc(24px + 26 * ((100vw - 480px) / 1120))
}

@media (min-width: 320px) {
  --title-five: 34px
}
@media (min-width: 320px) and (max-width: 1600px) {
  --title-five: calc(16px + 18 * ((100vw - 320px) / 1280))
}

@media (min-width: 320px) {
  --title-seven: 55px
}
@media (min-width: 320px) and (max-width: 1600px) {
  --title-seven: calc(25px + 30 * ((100vw - 320px) / 1280))
}

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
  margin: 0;
  font-family: "Sofia Pro", 'Nunito Sans', sans-serif;
  font-weight: 400;
  line-height: 1.15;
}

h1 {
  font-size: 12px; 
  letter-spacing: 2.9px; 

  @media (min-width: 768px) {
  font-size: 15px
}

@media (min-width: 1024px) {
  font-size: 12px
}
@media (min-width: 1600px) {
  font-size: 14px
}
}

h2 {
font-size: 11px; 
font-weight: 300;

@media (min-width: 768px) {
font-size: 12px;
}
@media (min-width: 1024px) {
  font-size: 11px;
}
@media (min-width: 1600px) {
font-size: 12px;
}
  }

h3 {
  font-size: 10px; 
  font-weight: 300
  }

h4 {font-size: 12px; 
line-height: 2;
@media (min-width: 768px) {
font-size: 14px
 }
@media (min-width: 1024px) {
font-size: 12px
 }
 @media (min-width: 1600px) {
font-size: 14px; 
 }
}

h5 {
font-size: 16px; 
letter-spacing: 1.2px;

@media (min-width: 768px) {
font-size: 20px
}
@media (min-width: 1024px) {
font-size: 16px; 
}
@media (min-width: 1600px) {
font-size: 24px; 
}
 }

small, .text_small {font-size: 0.833em;}
`;
