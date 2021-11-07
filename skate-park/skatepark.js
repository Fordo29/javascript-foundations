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
}

module.exports = SkatePark;
