var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];

  
  gazeAtVictim(victim) {
    var newStatue = new Statue(victim.name);
    if(this.statues.length <= 2) {
      this.statues.push(newStatue);
    } else if (this.statues.length >= 3) {
      var releasedVictim = new Person(this.statues[0].name);
      releasedVictim.mood = "relieved";
      this.statues.shift();
      this.statues.push(newStatue);
      return releasedVictim;
    }
  }
}

module.exports = Medusa;
