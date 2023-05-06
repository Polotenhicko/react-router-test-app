import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { TopicsRouter } from './TopicsRouter';
import { Home } from './Home';
import { About } from './About';
import { Navigation } from './NavbarNavigation';

export function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/topics">
          <TopicsRouter />
        </Route>
      </Switch>
    </>
  );
}
