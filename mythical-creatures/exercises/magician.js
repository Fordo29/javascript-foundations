class Magician {
  constructor(name) {
    this.name = `The Great ${name.name}`;
    this.assistant = name.assistant;
    if(favoriteAccessory === undefined) {
      this.favoriteAccessory = "top hat";
    } else {
      this.favoriteAccessory = favoriteAccessory;
    }

  }
}

module.exports = Magician;
