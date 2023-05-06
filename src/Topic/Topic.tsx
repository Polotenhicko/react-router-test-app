import { useParams } from 'react-router-dom';

interface RouteParams {
  topicId: string;
}

export function Topic() {
  let { topicId } = useParams<RouteParams>();
  return <h3>Requested topic ID: {topicId}</h3>;
}
