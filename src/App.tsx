import { Switch, Route } from 'react-router-dom';
import { NavbarNavigation } from './NavbarNavigation';
import React from 'react';

const LazyHome = React.lazy(() => import('./Home/Home'));
const LazyAbout = React.lazy(() => import('./About/About'));
const LazyTopics = React.lazy(() => import('./Topics/Topics'));

export function App() {
  return (
    <>
      <NavbarNavigation />
      <React.Suspense fallback={<div>Загрузка....</div>}>
        <Switch>
          <Route exact path="/" component={LazyHome} />
          <Route path="/about" component={LazyAbout} />
          <Route path="/topics" component={LazyTopics} />
        </Switch>
      </React.Suspense>
    </>
  );
}
