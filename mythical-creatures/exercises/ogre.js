class Ogre {
  constructor(person) {
    this.name = person.name;
    this.home = person.abode || 'Swamp';
  }
  encounter(human){
    human.encounterCounter++;
  }
}

module.exports = Ogre;
