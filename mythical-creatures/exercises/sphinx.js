class Sphinx {
  constructor() {
    this.name = "";
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    if(this.riddles.length < 3) {
      this.riddles.push(riddle);
    } else {
      this.riddles.shift();
      this.riddles.push(riddle);
    }
  }

  attemptAnswer(guess) {
    for(var i = 0; i < this.riddles.length; i++) {
      if(this.riddles[i].answer === guess) {
        this.riddles.splice(i, 1);
        return 'That wasn\'t that hard, I bet you don\'t get the next one'
      } else {
        this.heroesEaten++;
      }
    }
  }
}

module.exports = Sphinx;
