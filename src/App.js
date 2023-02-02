import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from './common/Header';
import { Navigation } from './common/Navigation';
import { News } from './features/News';
import { ArticlePage } from './features/News/ArticlePage';
import { fetchNews } from './features/News/newsSlice';
import { Weather } from './features/Weather';
import { GlobalStyle } from './GlobalStyle';
import { StyledApp } from './StyledApp';
import { theme } from './theme';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledApp>
          <Header />
          <Navigation />
          <Routes>
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/pogoda" element={<Weather />} />
            <Route index element={<News />} />
          </Routes>
        </StyledApp>
      </ThemeProvider>

    </>
  )
};

export default App;
