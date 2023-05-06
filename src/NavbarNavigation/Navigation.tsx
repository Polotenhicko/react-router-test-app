import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
        <Link to="/topics/123">Topics:123</Link>
      </li>
    </ul>
  );
}
