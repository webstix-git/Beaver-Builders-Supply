import PrivacyPolicyPage from '../../components/PrivacyPolicyPage';
import { seoMetadata } from '../../lib/site';

export const metadata = seoMetadata('privacy');

export default function Page() {
  return <PrivacyPolicyPage />;
}
