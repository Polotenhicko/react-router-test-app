import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { Topic } from '../Topic/Topic';

export function TopicsRouter() {
  let match = useRouteMatch();
  console.log(match);
  // обернуть в lazy, suspense
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route path={match.path}>
          <div>{match.path}</div>
        </Route>
      </Switch>
    </div>
  );
}
