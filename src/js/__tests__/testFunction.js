import { Character } from '../app';
// import { Zombie } from '../classes/zombie';

describe('1_test class Character', () => {
  class Zombie extends Character {};
  // const expected = new Zombie();
  
  test('2_Class is defined', () => {
    expect(Character).toBeDefined();
  });

  test('3_class Zombie is defined', () => {
      expect(Zombie).toBeDefined();
  });

  test('4_test check type = "string"', () => {
    expect(() => new Zombie('Nat', 123)).toThrow();
  });

  test('5_test check name length', () => {
    expect(() => new Zombie('N')).toThrow();
  });

  test('6_test check name = "string"', () => {
    expect(() => new Zombie(123)).toThrow();
  });

  // test('7_test check name = "string"', () => {
  //   expect(() => {expected.name = 123}).toThrow();
  // });
});
