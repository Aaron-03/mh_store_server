
export function formatSlug(text: string) {
  const slug: string = text.toLowerCase()
                           .replace(/\s+/, '-')
                           .replace('á', 'a')
                           .replace('é', 'e')
                           .replace('í', 'i')
                           .replace('ó', 'o')
                           .replace('ú', 'u');
  return slug;
}