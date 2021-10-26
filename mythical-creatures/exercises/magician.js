class Magician {
  constructor({name:name, assistant: assistant, clothing:clothing}) {
    this.name = `The Great ${name}`;
    this.assistant = assistant;
    this.confidencePercentage = 10;
    if (clothing ===  undefined) {
      this.favoriteAccessory = "top hat";
    } else {
      this.favoriteAccessory = clothing;
    }
  }
  performIncantation(magicTrick) {
    return `${magicTrick.toUpperCase()}!`;
  }
  performTrick() {
    this.confidencePercentage += 10;
    if(this.favoriteAccessory === "top hat"){
      return 'PULL RABBIT FROM TOP HAT';
    } else {
      return 'PULL DOVE FROM SLEEVE';
    }

    }
    performShowStopper() {
      if(this.confidencePercentage < 100 || this.assistant === false) {
        return 'Oh no, this trick is not ready!';
      } else {
        return 'WOW! The magician totally just sawed that person in half!';
      }
  }
}

module.exports = Magician;
