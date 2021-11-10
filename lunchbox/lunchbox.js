var Snack = require('./snack');
class LunchBox {
  constructor(lunch) {
    this.owner = lunch.owner;
    this.material = lunch.madeOf;
    this.shape = lunch.shape;
    this.color = lunch.color;
    this.snacks = [];
    this.healthySnacks = [];
  }

  acquireSnack(snack) {
    this.snacks.push(snack);
    snack.isInLunchBox = true;
    if (snack.type.includes("fruit") || snack.type.includes("Fruit")) {
      this.healthySnacks.push(snack.type);

    }
  }

  findHealthySnacks() {
    return this.healthySnacks
  }
}

module.exports = LunchBox;
