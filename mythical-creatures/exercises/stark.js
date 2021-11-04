const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(person) {
    this.name = person.name;
    this.location = person.area || 'Winterfell';
    this.safe = false;
  }
  sayHouseWords() {
    if(this.safe === true) {
      return 'The North Remembers';
    } else {
      return 'Winter is Coming';
    }
  }

  callDirewolf(wolfName, wolfHome) {
    var direwolf5 = new Direwolf(wolfName, wolfHome);
    direwolf5.home = this.location;
    direwolf5.protect(this);
    return direwolf5
  }
};

module.exports = Stark;
