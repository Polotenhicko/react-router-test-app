import { useRouteMatch } from 'react-router-dom';
import { TopicsNavbar } from './TopicsNavbar';
import { TopicsRouter } from './TopicsRouter';

export default function Topics() {
  const match = useRouteMatch();
  return (
    <div>
      <TopicsNavbar routeMatch={match} />
      <TopicsRouter routeMatch={match} />
    </div>
  );
}
