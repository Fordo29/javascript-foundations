
class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.disposition = 'Good natured';
    this.clothes = {
      dresses: ['Iris']
    }
    this.humanWards = [];
  }

  receiveBelief() {
    this.dust++
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(newdresses) {
    for(var i = 0; i < newdresses.length; i++) {
      this.clothes.dresses.push(newdresses[i]);
    }
    // this.clothes.dresses.push.apply(this.clothes.dresses, newdresses);
  }

  becomeProvoked() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    if (this.humanWards.length >= 2) {
      this.disposition = 'Good natured';
    } else  if (this.disposition === 'Vengeful') {
      infant.disposition = 'Malicious';
      this.humanWards.push(infant);
    } else {
      return infant
    }
  }

}


module.exports = Fairy;
