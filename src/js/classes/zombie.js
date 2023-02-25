import { Character } from "../app";

class Zombie extends Character {
  constructor(name, type = 'Zombie') {
    super(name, type);
    this.attack = 40; 
    this.defence = 10;
  }
}
