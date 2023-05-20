import { describe, it, expect } from 'vitest';
import { kebabCase } from '../format';

describe('misc', () => {
  it('return kebab case string', () => {
    expect(kebabCase('helloWorld')).toBe('hello-world');
    expect(kebabCase('hello world')).toBe('hello-world');
    expect(kebabCase('hello_world')).toBe('hello-world');
    expect(kebabCase('hello-world')).toBe('hello-world');
  });

  it.todo('throw error when param with special characters');
});
