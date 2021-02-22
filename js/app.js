'use strict';
function randomValue( min, max ) {
  console.log( 'randomValue' );
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let total;
let bodyElement = document.getElementById( 'body' );
const tableElement = document.createElement( 'table' );
bodyElement.appendChild( tableElement );


function SalmonCokies( location, minimumNumberOfCustomers, maximumNumberOfCustomers, averageNumberOfCookiesPurchased ) {
  this.location = location;
  this.minimumNumberOfCustomers = minimumNumberOfCustomers;
  this.maximumNumberOfCustomers = maximumNumberOfCustomers;
  this.averageNumberOfCookiesPurchased = averageNumberOfCookiesPurchased;
  this.cookiesNumber = [];
  this.randomCustomers = [];
  this.cookiesNumber = [];
}

SalmonCokies.prototype.randomCustomerNumber = function () {
  for ( let i = 0; i < hours.length; i++ ) {
    this.randomCustomers.push( randomValue( this.minimumNumberOfCustomers, this.maximumNumberOfCustomers ) );
  }
};

SalmonCokies.prototype.cookiesPerHour = function () {
  total = 0;
  for ( let i = 0; i < hours.length; i++ ) {
    this.cookiesNumber.push( Math.ceil( this.randomCustomers[i] * this.averageNumberOfCookiesPurchased ) );
    total = total + this.cookiesNumber[i];
  }
};

SalmonCokies.prototype.render = function () {
  let trElement = document.createElement( 'tr' );
  tableElement.appendChild( trElement );
  let td1Element = document.createElement( 'td' );
  trElement.appendChild( td1Element );
  td1Element.textContent = this.location;
  for ( let i = 0; i < hours.length; i++ ) {
    let tdElement = document.createElement( 'td' );
    tdElement.textContent = this.cookiesNumber[i];
    trElement.appendChild( tdElement );
  }
  let td2Element = document.createElement( 'td' );
  trElement.appendChild( td2Element );
  td2Element.textContent = total;
};

function tableHeader() {
  let trElement = document.createElement( 'tr' );
  tableElement.appendChild( trElement );
  let th1Element = document.createElement( 'th' );
  trElement.appendChild( th1Element );
  for ( let i = 0; i < hours.length; i++ ) {
    let thElement = document.createElement( 'th' );
    thElement.textContent = hours[i];
    trElement.appendChild( thElement );
  }
  let th2Element = document.createElement( 'th' );
  th2Element.textContent = 'Daily Location Total';
  trElement.appendChild( th2Element );
}

function tableFooter() {
  let trElement = document.createElement( 'tr' );
  tableElement.appendChild( trElement );
  let th1Element = document.createElement( 'th' );
  th1Element.textContent = 'Total';
  trElement.appendChild( th1Element );
  for ( let i = 0; i < hours.length; i++ ) {
    let thElement = document.createElement( 'th' );
    thElement.textContent = totalByHour[i];
    trElement.appendChild( thElement );
  }
  let th2Element = document.createElement( 'th' );
  trElement.appendChild( th2Element );
  th2Element.textContent = totalOfTotal;
}

tableHeader();

let seattle = new SalmonCokies( 'Seattle', 23, 65, 6.3 );
let tokyo = new SalmonCokies( 'Tokyo', 3, 24, 1.2 );
let dubai = new SalmonCokies( 'Dubai', 11, 38, 3.7 );
let paris = new SalmonCokies( 'Paris', 20, 38, 2.3 );
let lima = new SalmonCokies( 'Lima', 2, 16, 4.6 );

let locations = [seattle, tokyo, dubai, paris, lima];

let totalOfTotal = 0;
let totalByHour = [];
let totalhours;

for ( let j = 0; j < locations.length; j++ ) {
  locations[j].randomCustomerNumber();
  locations[j].cookiesPerHour();
  locations[j].render();
}

for ( let k = 0; k < hours.length; k++ ) {
  totalhours = 0;
  for ( let i = 0; i < locations.length; i++ ) {
    totalhours = totalhours + locations[i].cookiesNumber[k];
    totalByHour[i] = totalOfTotal + totalhours;
  }
  totalByHour.push( totalhours );
  totalOfTotal=totalOfTotal+totalhours;
}

tableFooter();
