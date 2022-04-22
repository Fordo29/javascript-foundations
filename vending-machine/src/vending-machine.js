class VendingMachine {
  constructor({id, isBroken}) {
    this.id = id;
    this.isBroken = isBroken;
    this.snacks = [];
  }
  addSnacks(candy) {
    for (var i = 0; i < this.snacks.length; i ++) {
      if (this.snacks[i].name === candy.name) {
        return 'Sorry, that snack is already stocked! Try adding a different snack.'
      }
    }
    this.snacks.push(candy);
  }
  purchaseSnack(snackName, money){
    for (var i = 0; i < this.snacks.length; i ++) {
      if(this.snacks[i].name === snackName && money >= this.snacks[i].price && this.snacks[i].itemsInStock > 0) {
        this.snacks[i].removeItem()
        return `Success! Here is $${money - this.snacks[i].price} back!`
      } else if (this.snacks[i].itemsInStock === 0){
        return 'Sorry, no items in stock. Try another item.'
      } else if (money < this.snacks[i].price) {
        return 'Sorry, not enough payment. Please add more money.'
      }
    }
  }
}

module.exports = VendingMachine;
