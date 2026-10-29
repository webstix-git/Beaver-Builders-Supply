import ThankYouPage from '../../components/ThankYouPage';
import { seoMetadata } from '../../lib/site';

export const metadata = seoMetadata('thankYou');

export default function Page() {
  return <ThankYouPage />;
}
