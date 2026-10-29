import { INDEXABLE_ROUTES, absoluteUrl } from '../lib/site';

export default function sitemap() {
  const lastModified = new Date();
  return INDEXABLE_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority
  }));
}
