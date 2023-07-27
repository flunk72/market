import { createGlobalStyle } from 'styled-components';

export const Styles = createGlobalStyle`
:root {
  --black: #3B434E;
  --white: white;
  --main: #160b42;
  --primary: #ffbf03;
  --primary-hover: #f59b00;
  --yellow-dark: #3c2d20;
  --red: #fb5501;
  --blue: #255ab4;
  --purple: #102155;
  --font-family: 'Noto Sans', sans-serif;

}

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html,
body {
	overflow-x: hidden;
	max-width: 100vw;
	color: var(--black);
	background: #F5F6F8;
	font-family: 'Noto Sans', sans-serif;
  
}

a {
	text-decoration: none;
	color: inherit;
}
`;
