import { useParams } from 'react-router-dom';

interface RouteParams {
  topicId: string;
}

export default function Topic() {
  const { topicId } = useParams<RouteParams>();
  return <h3>Requested topic ID: {topicId}</h3>;
}
