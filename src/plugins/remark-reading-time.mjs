import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

// TODO: need to figure out how to configure more efficiently
export function remarkReadingTime() {
  // @ts-ignore
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    data.astro.frontmatter.minutesToRead = readingTime.text;
  };
}
