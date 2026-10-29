import SiteMapPage from '../../components/SiteMapPage';
import { seoMetadata } from '../../lib/site';

export const metadata = seoMetadata('siteMap');

export default function Page() {
  return <SiteMapPage />;
}
