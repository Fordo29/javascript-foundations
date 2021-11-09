class Part {
  constructor(type) {
    this.type = type;
    this.broken = false;
    this.brokenCount = 0;

  }

  break() {
    this.broken = true;
    this.brokenCount++;
  }

  repair() {
    if (this.brokenCount < 1) {
      this.broken = false;
    } else {
      
    }

  }
}

module.exports = Part;
