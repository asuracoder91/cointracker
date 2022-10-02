import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Router from "./Router";
import { HelmetProvider } from "react-helmet-async";
//import { ReactQueryDevtools } from "react-query/devtools";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Antonio&family=Fjalla+One&family=Source+Sans+Pro:wght@300;400&display=swap');

  *{
    box-sizing: border-box;
  }
  body{
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    </>
  );
}

export default App;
