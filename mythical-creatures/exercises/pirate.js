class Pirate {
  constructor(name, job) {
    this.name = name;
    this.cursed = false;
    this.booty = 0;
    if (job === undefined) {
      this.job = "scallywag";
    } else {
      this.job = job;
    }
  }
  robShip() {
    this.booty += 100;
    if (this.booty <= 500) {
      return 'YAARRR!'
    } else {
      this.booty -= 100;
      this.cursed = true;
      return 'ARG! I\'ve been cursed!'
    }
  }
  liftCurse() {
    if (this.cursed === false) {
      return 'You don\'t need to lift a curse!'
    }else if (this.cursed === true) {
        this.booty -= 300;
        this.cursed = false;
        return 'Your curse has been lifted!'
      }
  }
}


module.exports = Pirate;
