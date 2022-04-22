var Skier = require('./Skier');

class Lift {
  constructor(num) {
    this.inService = true;
    this.limit = num;
    this.skiers = [];
    this.safetyBar = 'up';
  }

  admitSkier(name, ticket) {
    var skier = new Skier (name, ticket);
    if (this.limit > this.skiers.length && ticket === true) {
      this.skiers.push(skier);
    } else if (ticket === true) {
      return `Sorry, ${skier.name}. Please wait for the next lift!`;
    } else {
      return `Sorry, ${skier.name}. You need a lift ticket!`
    }
  }

  startLift() {
    if (this.limit === this.skiers.length) {
    this.safetyBar = 'down';
  } else if (this.limit > this.skiers.length) {
    var seatsLeft = this.limit - this.skiers.length;
    return `We still need ${seatsLeft} more skier!`
  }
  }
}

module.exports = Lift;
