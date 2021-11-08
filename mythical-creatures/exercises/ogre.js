class Ogre {
  constructor(person) {
    this.name = person.name;
    this.home = person.abode || 'Swamp';
    this.swings = 0;
  }
  encounter(human) {
    human.encounterCounter++;
    if (human.noticesOgre()) {
      this.swingAt(human);
    }

  }

  swingAt(human) {
    this.swings++;
    if (this.swings % 2) {
      human.knockedOut = true;
    }
  }
  apologize(human) {
    human.knockedOut = false;
  }
}



module.exports = Ogre;
