import ContactPage from '../../components/ContactPage';
import { seoMetadata } from '../../lib/site';

export const metadata = seoMetadata('contact');

export default function Page() {
  return <ContactPage />;
}
