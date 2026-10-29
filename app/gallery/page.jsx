import GalleryPage from '../../components/GalleryPage';
import { seoMetadata } from '../../lib/site';

export const metadata = seoMetadata('gallery');

export default function Page() {
  return <GalleryPage />;
}
