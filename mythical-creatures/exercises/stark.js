class Stark {
  constructor(person) {
    this.name = person.name;
    this.location = person.area || 'Winterfell';
  }
};

module.exports = Stark;
