export function getReadingTime(content: string): string {
  const wordsPerMinute = 180;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  return minutes === 1 ? '1 min' : `${minutes} mins`;
}

export function getWordCount(content: string): number {
  return content.trim().split(/\s+/).length;
}
