import { describe, it, expect, beforeAll } from 'vitest';
import { readTimeObject, readTime } from '../md-utils';

describe('md utilities', () => {
  let content: string;
  beforeAll(() => {
    content = 'Hello world!';
  });

  it('return read time result object', () => {
    const result = readTimeObject(content);
    expect(result).toEqual({
      text: '1 min read',
      minutes: 0.01,
      time: 600,
      words: 2,
    });
  });

  it('return read time string', () => {
    const result = readTime(content);
    expect(result).toEqual('1 min read');
  });
});
