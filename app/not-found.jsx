import NotFoundPage from '../components/NotFoundPage';
import { seoMetadata } from '../lib/site';

export const metadata = seoMetadata('notFound');

export default function NotFound() {
  return <NotFoundPage />;
}
