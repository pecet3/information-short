import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route path="/news/:id" >
              <ArticlePage />
            </Route>
            <Route path="/news" >
              <News />
            </Route>
            <Route path="/pogoda">
              <Weather />
            </Route>
            <Route path="/">
              <Redirect to="/news" />
            </Route>
          </Switch>
        </StyledApp>
      </ThemeProvider>
    </>
  )
};

export default App;
