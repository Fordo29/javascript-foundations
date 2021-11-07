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
    this.swings++;
  }
}



module.exports = Ogre;
