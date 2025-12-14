import { greet } from './index';

describe('greet', () => {
  it('should greet with the given name', () => {
    expect(greet('world')).toBe('Hello, world!');
    expect(greet('TypeScript')).toBe('Hello, TypeScript!');
  });
});
