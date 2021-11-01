class Centaur {
  constructor(person) {
    this.name = person.name;
    this.breed = person.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.actionCount = 0;
  }

  shootBow() {
    this.actionCount++;
    if(this.actionCount <= 2 && this.layingDown === false && this.standing === true) {
      return 'Twang!!!'
    } else {
      this.cranky = true;
      return 'NO!'
    }
    }

  run() {
    this.actionCount++
    if(this.actionCount <= 2 && this.layingDown === false && this.standing === true) {
      return 'Clop clop clop clop!!!'
    } else {
      this.cranky = true;
      return 'NO!'
    }
  }
  sleep() {
    if(!this.layingDown) {
      return 'NO!'
    } else {
      this.actionCount = 0;
      this.cranky = false;
      return 'ZZZZ'
    }
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    if(!this.layingDown) {
      this.cranky = false;
      this.actionCount = 0;
    } else {
      return 'Not while I\'m laying down!'
    }
  }
}

module.exports = Centaur;
