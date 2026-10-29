/** Normalize Turnstile keys: env values are stored without the 0x prefix. */
export function turnstileKey(value) {
  const raw = (value || '').trim();
  if (!raw) return '';
  return raw.startsWith('0x') ? raw : `0x${raw}`;
}
