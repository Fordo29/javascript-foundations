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
    if(this.actionCount <= 2 || this.standing === false) {
      return 'Twang!!!'
    } else {
      this.cranky = true;
      return 'NO!'
    }
    }

  run() {
    this.actionCount++
    if(this.actionCount <= 2 || this.standing === false) {
      return 'Clop clop clop clop!!!'
    } else {
      this.cranky = true;
      return 'NO!'
    }
  }
  sleep() {
    return 'NO!'
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
}

module.exports = Centaur;
