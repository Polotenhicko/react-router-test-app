import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import { match } from 'react-router-dom';

type TTopicsRouterProps = {
  routeMatch: match<{}>;
};

const LazyTopic = React.lazy(() => import('../../Topic/Topic'));

export default function TopicsRouter({ routeMatch }: TTopicsRouterProps) {
  console.log(routeMatch);
  return (
    <Switch>
      <Route exact path={routeMatch.path}>
        <div>Главная</div>
      </Route>
      <Route exact path={`${routeMatch.path}/:topicId`} component={LazyTopic} />
      <Redirect to={routeMatch.path} />
    </Switch>
  );
}
