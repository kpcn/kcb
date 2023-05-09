import type { ReadTimeResults } from 'reading-time';
import readingTime from 'reading-time';

export const readTimeObject = (content: string): ReadTimeResults => {
  return readingTime(content);
};

export const readTime = (content: string): string => {
  return readTimeObject(content).text;
};
