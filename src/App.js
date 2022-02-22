import Calculator from "./main/Calculator";

// styles
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";

function App() {
  const variants = {
    button: {
      bgButton: "#f0f0f0",
      borderButton: "solid 1px #888",
    },
  };
  return (
    <ThemeProvider theme={variants}>
      <GlobalStyle />

      <Calculator />
    </ThemeProvider>
  );
}

export default App;
