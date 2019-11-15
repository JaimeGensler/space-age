import { Human } from './../src/Human.js';

describe('Human', () => {
  let reusableHuman;

  beforeEach(() => {
    reusableHuman = new Human(22);
  });

  test('should correctly create a Human object that stores user age', () => {
    expect(reusableHuman.age).toEqual(22);
  });
});
