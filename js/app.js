'use strict';
console.log( 'start' );
function randomValue( min, max ) {
  console.log( 'randomValue' );
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let total;

let seattle = {
  location: 'Seattle',
  minimumNumberOfCustomers: 23,
  maximumNumberOfCustomers: 65,
  averageNumberOfCookiesPurchased: 6.3,
  randomCustomers: [],
  randomCustomerNumber: function () {
    for ( let i = 0; i < hours.length; i++ ) {
      console.log( 'randomCustomerNumber' );
      this.randomCustomers.push( randomValue( this.minimumNumberOfCustomers, this.maximumNumberOfCustomers ) );
    }
  },
  cookiesNumber: [],
  cookiesPerHour: function () {
    total = 0;
    for ( let i = 0; i < hours.length; i++ ) {
      this.cookiesNumber.push( Math.ceil( this.randomCustomers[i] * this.averageNumberOfCookiesPurchased ) );
      total = total + this.cookiesNumber[i];
    }
  },
  render: function () {
    let bodyElement = document.getElementById( 'body' );
    let ulElement = document.createElement( 'ul' );
    ulElement.textContent = this.location;
    bodyElement.appendChild( ulElement );
    let liElement;
    for ( let i = 0; i < hours.length; i++ ) {
      liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${hours[i]}: ${this.cookiesNumber[i]} cookies.`;
    }
    liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total: ${total} cookies.`;
  }
};
seattle.randomCustomerNumber();
seattle.cookiesPerHour();
seattle.render();

let tokyo = {
  location: 'Tokyo',
  minimumNumberOfCustomers: 3,
  maximumNumberOfCustomers: 24,
  averageNumberOfCookiesPurchased: 1.2,
  randomCustomers: [],
  randomCustomerNumber: function () {
    for ( let i = 0; i < hours.length; i++ ) {
      this.randomCustomers.push( randomValue( this.minimumNumberOfCustomers, this.maximumNumberOfCustomers ) );
    }
  },
  cookiesNumber: [],
  cookiePerHour: function () {
    total = 0;
    for ( let i = 0; i < hours.length; i++ ) {
      this.cookiesNumber.push( Math.ceil( this.randomCustomers[i] * this.averageNumberOfCookiesPurchased ) );
      total = total + this.cookiesNumber[i];
    }
  },
  render: function () {
    let bodyElement = document.getElementById( 'body' );
    let ulElement = document.createElement( 'ul' );
    ulElement.textContent = this.location;
    bodyElement.appendChild( ulElement );
    let liElement;
    for ( let i = 0; i < hours.length; i++ ) {
      liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${hours[i]}: ${this.cookiesNumber[i]} cookies.`;
    }
    liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total: ${total} cookies.`;
  }
};

tokyo.randomCustomerNumber();
tokyo.cookiePerHour();
tokyo.render();

let dubai = {
  location: 'Dubai',
  minimumNumberOfCustomers: 11,
  maximumNumberOfCustomers: 38,
  averageNumberOfCookiesPurchased: 3.7,
  randomCustomers: [],
  randomCustomerNumber: function () {
    for ( let i = 0; i < hours.length; i++ ) {
      this.randomCustomers.push( randomValue( this.minimumNumberOfCustomers, this.maximumNumberOfCustomers ) );
    }
  },
  cookiesNumber: [],
  cookiePerHour: function () {
    total = 0;
    for ( let i = 0; i < hours.length; i++ ) {
      this.cookiesNumber.push( Math.ceil( this.randomCustomers[i] * this.averageNumberOfCookiesPurchased ) );
      total = total + this.cookiesNumber[i];
    }
  },
  render: function () {
    let bodyElement = document.getElementById( 'body' );
    let ulElement = document.createElement( 'ul' );
    ulElement.textContent = this.location;
    bodyElement.appendChild( ulElement );
    let liElement;
    for ( let i = 0; i < hours.length; i++ ) {
      liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${hours[i]}: ${this.cookiesNumber[i]} cookies.`;
    }
    liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total: ${total} cookies.`;
  }
};

dubai.randomCustomerNumber();
dubai.cookiePerHour();
dubai.render();


let paris = {
  location: 'Paris',
  minimumNumberOfCustomers: 20,
  maximumNumberOfCustomers: 38,
  averageNumberOfCookiesPurchased: 2.3,
  randomCustomers: [],
  randomCustomerNumber: function () {
    for ( let i = 0; i < hours.length; i++ ) {
      this.randomCustomers.push( randomValue( this.minimumNumberOfCustomers, this.maximumNumberOfCustomers ) );
    }
  },
  cookiesNumber: [],
  cookiePerHour: function () {
    total = 0;
    for ( let i = 0; i < hours.length; i++ ) {
      this.cookiesNumber.push( Math.ceil( this.randomCustomers[i] * this.averageNumberOfCookiesPurchased ) );
      total = total + this.cookiesNumber[i];
    }
  },
  render: function () {
    let bodyElement = document.getElementById( 'body' );
    let ulElement = document.createElement( 'ul' );
    ulElement.textContent = this.location;
    bodyElement.appendChild( ulElement );
    let liElement;
    for ( let i = 0; i < hours.length; i++ ) {
      liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${hours[i]}: ${this.cookiesNumber[i]} cookies.`;
    }
    liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total: ${total} cookies.`;
  }
};

paris.randomCustomerNumber();
paris.cookiePerHour();
paris.render();

let lima = {
  location: 'Lima',
  minimumNumberOfCustomers: 2,
  maximumNumberOfCustomers: 16,
  averageNumberOfCookiesPurchased: 4.6,
  randomCustomers: [],
  randomCustomerNumber: function () {
    for ( let i = 0; i < hours.length; i++ ) {
      this.randomCustomers.push( randomValue( this.minimumNumberOfCustomers, this.maximumNumberOfCustomers ) );
    }
  },
  cookiesNumber: [],
  cookiePerHour: function () {
    total = 0;
    for ( let i = 0; i < hours.length; i++ ) {
      this.cookiesNumber.push( Math.ceil( this.randomCustomers[i] * this.averageNumberOfCookiesPurchased ) );
      total = total + this.cookiesNumber[i];
    }
  },
  render: function () {
    let bodyElement = document.getElementById( 'body' );
    let ulElement = document.createElement( 'ul' );
    ulElement.textContent = this.location;
    bodyElement.appendChild( ulElement );
    let liElement;
    for ( let i = 0; i < hours.length; i++ ) {
      liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${hours[i]}: ${this.cookiesNumber[i]} cookies.`;
    }
    liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total: ${total} cookies.`;
  }
};

lima.randomCustomerNumber();
lima.cookiePerHour();
lima.render();
