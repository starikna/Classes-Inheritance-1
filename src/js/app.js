export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    if (name.length < 2 || name.length > 10) 
    {
      throw new Error('Ошибка длины имени!');
    }

    if (typeof name !== 'string') {
      throw new Error('Имя - не строка!');
    }

    if (typeof type !== 'string') {
      throw new Error('Тип - не строка!');
    }
  };
}
