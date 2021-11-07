class Skater {
  constructor(person) {
    this.name = person.name;
    this.skill = person.skill;
    this.tricks = person.tricks;
    this.money = person.cash;
    this.frustration = 0;
  }

  practice(trick) {
    for(var i = 0; i < this.tricks.length; i++) {
    if (this.tricks[i] === !trick) {
      this.frustration++
    }
    }
  }
}

module.exports = Skater;
