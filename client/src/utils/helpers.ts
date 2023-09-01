export function getFullImageUrl(shortUrl: string | undefined) {
  return `${process.env.REACT_APP_API_URL}${shortUrl}`;
}
