// Write a “person” class to hold all the details.

console.log(`person class to hold details:`)
class person {
  constructor(name) {
    this.personName = name
  }
  walk() {
    console.log(`name is `, this.personName)
  }
}
const personObj1 = new person('ASP')
personObj1.walk();
const personObj2 = new person('Karan')
personObj2.walk();
const personObj3 = new person('Guvi')
personObj3.walk();
const personObj4 = new person('Zen')
personObj4.walk();
const personObj5 = new person('Mentor')
personObj5.walk();
const personObj6 = new person('ASPKaran')
personObj6.walk();

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// write a class to calculate uber price.

console.log(`uber price calculation:`)
class uber {
  constructor(km) {
    this.km = km
  }

}
class uberSuvPrice extends uber {
  constructor(suv) {
    super(suv)
  }
  suvprice() {
    return 22 * this.km
  }
  suvtax() {
    return 20 + c1.suvprice()
  }
  suvdiscount() {
    return c1.suvtax() - 1
  }
}

class uberPrimePrice extends uber {
  constructor(Prime) {
    super(Prime)
  }
  primeprice() {
    return 17 * this.km
  }
  primetax() {
    return 17 + c2.primeprice()
  }
  primediscount() {
    return c2.primetax() - 2
  }
}

class uberHachbackPrice extends uber {
  constructor(Hachback) {
    super(Hachback)
  }
  hachbackprice() {
    return 14 * this.km
  }
  hachbacktax() {
    return 15 + c3.hachbackprice()
  }
  hachbackdiscount() {
    return c3.hachbacktax() - 3
  }
}
class uberAutoPrice extends uber {
  constructor(auto) {
    super(auto)
  }
  autoprice() {
    return 10 * this.km
  }
  autotax() {
    return 9 + c4.autoprice()
  }
  autodiscount() {
    return c4.autotax() - 2
  }
}

class uberBikePrice extends uber {
  constructor(bike) {
    super(bike)
  }
  bikeprice() {
    return 7.5 * this.km
  }
  biketax() {
    return 7 + c5.bikeprice()
  }
  bikediscount() {
    return c5.biketax() - 2
  }
}

const c1 = new uberSuvPrice(25);
const c2 = new uberPrimePrice(25);
const c3 = new uberHachbackPrice(25);
const c4 = new uberAutoPrice(25);
const c5 = new uberBikePrice(25);


console.log(`Details For SUV:`)
console.log(`For suv total km is `, c1.km)
console.log(`For suv price is `, c1.suvprice())
console.log(`CGST and SGST for suv is `, 20)
console.log(`price for suv inc tax is `, c1.suvtax())
console.log(`Discount amount`, `$1`)
console.log(`Total price for suv inc tax is `, c1.suvdiscount())


console.log(`Details For Prime(sedan):`)
console.log(`For prime total km is `, c2.km)
console.log(`For prime price is `, c2.primeprice())
console.log(`CGST and SGST for prime is `, 17)
console.log(`price for prime inc tax is `, c2.primetax())
console.log(`Discount amount`, `$2`)
console.log(`Total price for hachback inc tax is `, c2.primediscount())


console.log(`Details For hachback:`)
console.log(`For hachback total km is `, c3.km)
console.log(`For hachback price is `, c3.hachbackprice())
console.log(`CGST and SGST for hachback is `, 15)
console.log(`price for hachback inc tax is `, c3.hachbacktax())
console.log(`Discount amount`, `$3`)
console.log(`Total price for hachback inc tax is `, c3.hachbackdiscount())

console.log(`Details For auto:`)
console.log(`For auto total km is `, c4.km)
console.log(`For auto price is `, c4.autoprice())
console.log(`CGST and SGST for auto is `, 9)
console.log(`price for auto inc tax is `, c4.autotax())
console.log(`Discount amount`, `$3`)
console.log(`Total price for auto inc tax is `, c4.autodiscount())

console.log(`Details For Bike:`)
console.log(`For bike total km is `, c5.km)
console.log(`For bike price is `, c5.bikeprice())
console.log(`CGST and SGST for bike is `, 9)
console.log(`price for bike inc tax is `, c5.biketax())
console.log(`Discount amount`, `$3`)
console.log(`Total price for bike inc tax is `, c5.bikediscount())





















