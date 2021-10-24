class Pirate {
  constructor(name, job) {
    this.name = name;
    this.cursed = false;
    if (job === undefined) {
      this.job = "scallywag";
    } else {
      this.job = job;
  }
}
}


module.exports = Pirate;
