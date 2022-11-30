import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    body {
      background: ${(props) => props.theme.colors.bg.primary};
      color: ${(props) => props.theme.colors.text.primary};
      font-family: ${(props) => props.theme.fonts.main};
      margin: 0 auto;
      /* font-size: 1.6rem; */
     
    }
    h1,h2,h3,h4,h5,h6,p,button,a {
      color: ${(props) => props.theme.colors.text.primary};
      font-family: ${(props) => props.theme.fonts.main}; 
    }
`;

export default GlobalStyles;

// html,
// body {
//   padding: 0;
//   margin: 0;
//   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
//     Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
// }

// a {
//   color: inherit;
//   text-decoration: none;
// }

// * {
//   box-sizing: border-box;
// }

// @media (prefers-color-scheme: dark) {
//   html {
//     color-scheme: dark;
//   }
//   body {
//     color: white;
//     background: black;
//   }
// }
