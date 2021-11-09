class Golfer {
  constructor(person) {
    this.name = person.name;
    this.handicap = person.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }

  calculateAvg(par) {
    return `I usually shoot a ${this.handicap + par} on average.`
  }

  playRound(golfCourse) {
    if(golfCourse.difficulty === 'hard'){
      this.frustration = this.frustration + 500;
    } else if (golfCourse.difficulty === 'moderate') {
      this.frustration = this.frustration + 100;
    }
  }

  hitTheRange() {
    this.confidence = this.confidence + 10;
  }

  marvel(golfCourse) {
    return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`
  }

  whatYaShoot(par) {
    if (par > 2) {
      this.frustration = 20;
      return 'Doh!';
    } else if (par < 0) {
      this.frustration = 0;
      return 'I AM THE GREATEST GOLFER ALIVE!';
    } else if (par === 0) {
      this.frustration = 10;
      return 'Booyah!';
    } else if (par > 0) {
      this.frustration = 30;
      return 'Doh!';
    }
  }
}

module.exports = Golfer;
