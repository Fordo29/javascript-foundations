class Gear {
  constructor(type, quantity) {
    this.type = type;
    this.quantity = quantity;
  }

  checkForValidity() {
    if((this.type === 'ammunition') || (this.type === 'food') || (this.type === 'clothes')) {
      return `Great, we\'ll need lots of ${this.type}!`
    } else {
      var invalidType = this.type;
      this.type = null;
      return `I don\'t think a ${invalidType} will help us.`
    }
  }
}

module.exports = Gear;
