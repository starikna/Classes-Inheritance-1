import { Character } from '../app';
import { Zombie } from '../classes/zombie';

test('Class Zombie is defined', () => {
  const received = new Zombie('Nat');
  expect(received).toBeDefined();
});  

describe('1_test class Character', () => {
  class Zombie extends Character {};
  
  test('2_Class is defined', () => {
    expect(Character).toBeDefined();
  });  

  test('3_test check type === "string"', () => {
    expect(() => new Zombie('Nat', 321)).toThrow();
  });

  test('4_test check name length > 11', () => {
    expect(() => new Zombie('Nattttttttttttttttttt')).toThrow();
  });

  test('5_test check name = "string"', () => {
    expect(() => new Zombie(123)).toThrow();
  });
})
