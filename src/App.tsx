import { Switch, Route } from 'react-router-dom';
import { NavbarNavigation } from './NavbarNavigation';
import React from 'react';

const LazyHome = React.lazy(() => import('./Home/Home'));
const LazyAbout = React.lazy(() => import('./About/About'));
const LazyTopicsRouter = React.lazy(() => import('./TopicsRouter/TopicsRouter'));

export function App() {
  return (
    <>
      <NavbarNavigation />
      <React.Suspense fallback={<div>Загрузка....</div>}>
        <Switch>
          <Route exact path="/">
            <LazyHome />
          </Route>
          <Route path="/about">
            <LazyAbout />
          </Route>
          <Route path="/topics">
            <LazyTopicsRouter />
          </Route>
        </Switch>
      </React.Suspense>
    </>
  );
}
