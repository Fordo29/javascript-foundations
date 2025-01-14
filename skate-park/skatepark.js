class SkatePark {
  constructor(place) {
    this.name = place.name;
    this.yearFounded = place.year;
    this.style = place.type;
    this.features = place.features;
    this.isPrivate = place.isPrivate || false;
    this.cost = place.price || 0;
    this.occupants = [];
  }
  admit(skater) {
    if(this.cost === 0) {
      this.occupants.push(skater);
      return 'Welcome to the free Major Taylor Skatepark!'
    } else if (skater.money >= this.cost && this.occupants.length < 3) {
      skater.money = skater.money - this.cost;
      this.occupants.push(skater);
      return `Welcome to Curbside, the cost will be $${this.cost}.00.`
    } else if (this.cost > skater.money) {
      return `Sorry, you don't have enough money.`
    } else {
      return 'Sorry, we are at max capacity. Thank you for understanding.'
    }
  }
}

module.exports = SkatePark;
