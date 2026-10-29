import MaterialsPage from '../../components/MaterialsPage';
import { seoMetadata } from '../../lib/site';

export const metadata = seoMetadata('materials');

export default function Page() {
  return <MaterialsPage />;
}
