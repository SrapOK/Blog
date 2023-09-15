export function getFullImageUrl(shortUrl: string | undefined) {
  return `${import.meta.env.VITE_API_URL}${shortUrl}`;
}
