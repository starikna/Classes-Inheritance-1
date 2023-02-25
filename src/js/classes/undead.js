import { Character } from "../app";

class Undead extends Character {
  constructor(name, type = 'Undead') {
    super(name, type);
    this.attack = 25; 
    this.defence = 25;
  }
}


 // class Bowman extends Character {
  //   constructor(name, type = 'Bowman', attack = 25, defence = 25) {
  //     super(name, type, attack, defence);
  //   }
  // }

  // class Swordsman extends Character {
  //   constructor(name, type = 'Swordsman', attack = 40, defence = 10) {
  //     super(name, type, attack, defence);
  //   }
  // }

  // class Magician extends Character {
  //   constructor(name, type = 'Magician', attack = 10, defence = 40) {
  //     super(name, type, attack, defence);
  //   }
  // }

  // class Undead extends Character {
  //   constructor(name, type = 'Undead', attack = 25, defence = 25) {
  //     super(name, type, attack, defence);
  //   }
  // }

  // class Daemon extends Character {
  //   constructor(name, type = 'Daemon', attack = 40, defence = 10) {
  //     super(name, type, attack, defence);
  //   }
  // }