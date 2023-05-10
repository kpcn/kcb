import { describe, it, expect, beforeAll } from 'vitest';
import { kebabCase } from '../misc';

describe('misc', () => {
  it('return kebab case string', () => {
    expect(kebabCase('helloWorld')).toBe('hello-world');
    expect(kebabCase('hello world')).toBe('hello-world');
    expect(kebabCase('hello_world')).toBe('hello-world');
    expect(kebabCase('hello-world')).toBe('hello-world');
  });

  it.todo('throw error when param with special characters');
});