import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from './common/Header';
import { Navigation } from './common/Navigation';
import { News } from './features/News';
import { Weather } from './features/Weather';
import { GlobalStyle } from './GlobalStyle';
import { StyledApp } from './StyledApp';
import { theme } from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledApp>
          <Header />
          <Navigation />
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/pogoda" element={<Weather />} />
          </Routes>
        </StyledApp>
      </ThemeProvider>

    </>
  )
};

export default App;
