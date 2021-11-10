class Wagon {
  constructor(wagon) {
    this.title = wagon.name;
    this.wheels = wagon.wheels || [];
    this.axles = wagon.axles || [];
    this.oxen = wagon.oxen || [];
    this.yokes = wagon.yokes || [];
    this.food = wagon.food || {};
    this.ammunition = wagon.ammunition;
    this.clothes = wagon.clothes;

  }

  addPart(part) {
    if (this.wheels.type === part) {
      this.wheels.push(part);

    }

  }
}

module.exports = Wagon;
