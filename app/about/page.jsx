import AboutPage from '../../components/AboutPage';
import { seoMetadata } from '../../lib/site';

export const metadata = seoMetadata('about');

export default function Page() {
  return <AboutPage />;
}
