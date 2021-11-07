class Ogre {
  constructor(person) {
    this.name = person.name;
    this.home = person.abode || 'Swamp';
    this.swings = 0;
  }
  encounter(human) {
    human.encounterCounter++;
  }

  swingAt(human) {
    if (human.noticesOgre() === true) {
       this.swings++;
       return this.swings
    } else {
      return this.swings
    }
  }
}



module.exports = Ogre;
