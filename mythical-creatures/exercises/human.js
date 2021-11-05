class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
  }

  noticesOgre(){
    if (this.encounterCounter.length % 3 === 0) {
      return true
    }
      return false
  }
}

module.exports = Human;
