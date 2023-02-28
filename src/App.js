import { Redirect, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Footer } from './common/Footer';
import { Header } from './common/Header';
import { Navigation } from './common/Navigation';
import { MobileNavigation } from './common/Navigation/MobileNavigation';
import { Cats } from './features/Cats';
import { Dogs } from './features/Dogs';
import { News } from './features/News';
import { ArticlePage } from './features/News/ArticlePage';
import { Weather } from './features/Weather';
import { GlobalStyle } from './GlobalStyle';
import { toArticle, toCats, toDogs, toNews, toPets, toWeather } from './routes';
import { StyledApp, StickyContainer } from './StyledApp';
import { theme } from './theme';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledApp>
          <StickyContainer>
            <Header />
            <Navigation />
            <MobileNavigation />
          </StickyContainer>
          <Switch>
            <Route path={toArticle()} >
              <ArticlePage />
            </Route>
            <Route path={toNews()} >
              <News />
            </Route>
            <Route path={toWeather()}>
              <Weather />
            </Route>
            <Route path={toDogs()}>
              <Dogs />
            </Route>
            <Route path={toCats()}>
              <Cats />
            </Route>
            <Route path={toPets()}>
              <Redirect to={toDogs()} />
            </Route>
            <Route path="/">
              <Redirect to={toNews()} />
            </Route>
          </Switch>
          <Footer />
        </StyledApp>
      </ThemeProvider>
    </>
  )
};

export default App;
