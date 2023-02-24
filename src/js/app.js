export default class Character {
  constructor(name, type, attack, defence, health = 100, level = 1) {
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.defence = defence;
    this.health = health;
    this.level = level;

    this.checkNameLength = function () {
      if (this.name.length < 2 || this.name.length > 10) {
        throw new Error('Ошибка длины имени!');
      }
    };

    this.checkNameType = function () {
      if (typeof this.name !== 'string') {
        throw new Error('Имя - не строка!');
      }
    };
  }
}

// class Zombie extends Character {
//   constructor(name, type = 'Zombie', attack = 10, defence = 40) {
//     super(name, type, attack, defence);
//   }
// }

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
