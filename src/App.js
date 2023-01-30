import { ThemeProvider } from 'styled-components';
import { Main } from './features/main';
import { GlobalStyle } from './GlobalStyle';
import { StyledApp } from './StyledApp';
import { theme } from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledApp>
          <Main />
        </StyledApp>
      </ThemeProvider>

    </>
  )
};

export default App;
