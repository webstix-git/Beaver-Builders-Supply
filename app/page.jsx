import HomePage from '../components/HomePage';
import { seoMetadata } from '../lib/site';

export const metadata = seoMetadata('home');

export default function Page() {
  return <HomePage />;
}
