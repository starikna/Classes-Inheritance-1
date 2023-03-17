import Character from '../app';
import Zombie from '../classes/zombie';
import Bowerman from '../classes/bowerman';
import Daemon from '../classes/daemon';
import Magician from '../classes/magician';
import Swordsman from '../classes/swordsman';
import Undead from '../classes/undead';

describe('test class Character', () => {
  
  test('1_Class is defined', () => {
    expect(Character).toBeDefined();
  });  

  test('2_test check type === "string"', () => {
    expect(() => new Zombie('Nat', 321)).toThrow();
  });

  test('3_test check name length > 11', () => {
    expect(() => new Zombie('Nattttttttttttttttttt')).toThrow();
  });

  test('4_test check name length < 2', () => {
    expect(() => new Zombie('N')).toThrow();
  });

  test('5_test check name = "string"', () => {
    expect(() => new Zombie(123)).toThrow();
  });

  test('6_test check attack = 40', () => {
    const received = new Zombie('Nat');
    expect(received.attack).toBe(40);
  });
});

describe('test class Bowerman', () => {

  test('7_test check type === "string"', () => {
    expect(() => new Bowerman('Nat', 321)).toThrow();
  });

  test('8_test check name length > 11', () => {
    expect(() => new Bowerman('Nattttttttttttttttttt')).toThrow();
  });

  test('9_test check name = "string"', () => {
    expect(() => new Bowerman(123)).toThrow();
  });

  test('10_test check attack = 25', () => {
    const received = new Bowerman('Nat');
    expect(received.attack).toBe(25);
  });
});

describe('test class Daemon', () => {

  test('11_test check type === "string"', () => {
    expect(() => new Daemon('Nat', 321)).toThrow();
  });
  
  test('12_test check name length > 11', () => {
    expect(() => new Daemon('Nattttttttttttttttttt')).toThrow();
  });
  
  test('13_test check name = "string"', () => {
    expect(() => new Daemon(123)).toThrow();
  });

  test('14_test check attack = 10', () => {
    const received = new Daemon('Nat');
    expect(received.attack).toBe(10);
  });
  });
  
describe('test class Magician', () => {

  test('15_test check type === "string"', () => {
   expect(() => new Magician('Nat', 321)).toThrow();
  });
    
  test('16_test check name length > 11', () => {
    expect(() => new Magician('Nattttttttttttttttttt')).toThrow();
  });
    
  test('17_test check name = "string"', () => {
    expect(() => new Magician(123)).toThrow();
  });

  test('18_test check attack = 10', () => {
    const received = new Magician('Nat');
    expect(received.attack).toBe(10);
  });
});
    
describe('test class Swordsman', () => {
  test('19_test check type === "string"', () => {
    expect(() => new Swordsman('Nat', 321)).toThrow();
  });
      
  test('20_test check name length > 11', () => {
    expect(() => new Swordsman('Nattttttttttttttttttt')).toThrow();
  });
      
  test('21_test check name = "string"', () => {
    expect(() => new Swordsman(123)).toThrow();
  });

  test('22_test check attack = 40', () => {
    const received = new Swordsman('Nat');
    expect(received.attack).toBe(40);
  });
});
      
describe('test class Undead', () => {
  test('23_test check type === "string"', () => {
    expect(() => new Undead('Nat', 321)).toThrow();
  });
        
  test('24_test check name length > 11', () => {
    expect(() => new Undead('Nattttttttttttttttttt')).toThrow();
  });
        
  test('25_test check name = "string"', () => {
    expect(() => new Undead(123)).toThrow();
  });

  test('26_test check attack = 25', () => {
    const received = new Undead('Nat');
    expect(received.attack).toBe(25);
  });
});
