export class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

  if (this.name.length < 2 || this.name.length > 10) throw new Error('Ошибка длины имени!');

  if (typeof this.name !== 'string') throw new Error('Имя - не строка!');
  };
}
