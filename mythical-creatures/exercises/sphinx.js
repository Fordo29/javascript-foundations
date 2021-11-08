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
    if(this.riddles.length === 1 && this.riddles[0].answer === guess) {
      this.riddles.splice(0, 1);
      return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${guess}"???`
    }
    for(var i = 0; i < this.riddles.length; i++) {
      if(this.riddles[i].answer === guess) {
        this.riddles.splice(i, 1);
        return 'That wasn\'t that hard, I bet you don\'t get the next one'
      }
    }
    this.heroesEaten++;
    }

}

module.exports = Sphinx;
