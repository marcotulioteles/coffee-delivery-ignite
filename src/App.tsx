import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
