
class Craft {
  constructor(art) {
    this.name = art.type;
    this.materials = art.materials;
    this.completed = false;
  }

  completeCraft() {
    this.completed = true;
    return 'All done! It looks great!';
  }

  calculateProjectTotal() {
    var sum = 0;
    for (var i = 0; i < this.materials.length; i++) {
      sum += (this.materials[i].calculateMaterialCost());      
    }
    return sum
  }
}

module.exports = Craft;
