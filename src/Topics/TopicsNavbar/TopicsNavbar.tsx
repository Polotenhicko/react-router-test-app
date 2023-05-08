import { Link } from 'react-router-dom';
import { match } from 'react-router-dom';

type TTopicsNavbarProps = {
  routeMatch: match<{}>;
};

export default function TopicsNavbar({ routeMatch }: TTopicsNavbarProps) {
  return (
    <>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${routeMatch.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${routeMatch.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
    </>
  );
}
