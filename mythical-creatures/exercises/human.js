class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
  }

  noticesOgre(){
    if (this.encounterCounter % 3 === 0) {
      return true
    }
      return false
  }
}
console.log(6 % 3);
module.exports = Human;
