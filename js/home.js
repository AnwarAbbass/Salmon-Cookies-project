'use strict';

let slideIndex = 1;
showDivs( slideIndex );

// eslint-disable-next-line no-unused-vars
function plusDivs( n ) {
  showDivs( slideIndex += n );
}

function showDivs( n ) {
  let i;
  let x = document.getElementsByClassName( 'mySlides' );
  if ( n > x.length ) {slideIndex = 1;}
  if ( n < 1 ) {slideIndex = x.length;}
  for ( i = 0; i < x.length; i++ ) {
    x[i].style.display = 'none';
  }
  x[slideIndex-1].style.display = 'block';
}

let bodyElement = document.getElementById( 'bodyHome' );
const tableElement = document.createElement( 'table' );
bodyElement.appendChild( tableElement );


function SalmonCokies( location, addres,contactInformation, openHoures ) {
  this.location = location;
  this.addres=addres;
  this.contactInformation=contactInformation;
  this.openHoures=openHoures;
}

SalmonCokies.prototype.render = function () {
  let trElement = document.createElement( 'tr' );
  tableElement.appendChild( trElement );

  let td1Element = document.createElement( 'td' );
  trElement.appendChild( td1Element );
  td1Element.textContent = this.location;

  let td2Element = document.createElement( 'td' );
  trElement.appendChild( td2Element );
  td2Element.textContent = this.openHoures;

  let td3Element = document.createElement( 'td' );
  trElement.appendChild( td3Element );
  td3Element.textContent = this.addres;

  let td4Element = document.createElement( 'td' );
  trElement.appendChild( td4Element );
  td4Element.textContent = this.contactInformation;
};

function tableHeader() {
  let trElement = document.createElement( 'tr' );
  tableElement.appendChild( trElement );

  let th1Element = document.createElement( 'th' );
  th1Element.textContent='LOCATION';
  trElement.appendChild( th1Element );

  let th2Element = document.createElement( 'th' );
  th2Element.textContent = 'OPEN HOUER';
  trElement.appendChild( th2Element );

  let th3Element = document.createElement( 'th' );
  th3Element.textContent = 'ADRESS';
  trElement.appendChild( th3Element );

  let th4Element = document.createElement( 'th' );
  th4Element.textContent = 'CALL US';
  trElement.appendChild( th4Element );
}

tableHeader();

let seattle = new SalmonCokies( 'Seattle', '222 5th Ave N, Seattle, WA 98109, United States', '+1 206-xxx-xxxx' ,'6am-7pm' );
let tokyo = new SalmonCokies( 'Tokyo', '2 Chome-6-7 Yoyogi, 渋谷区 Shibuya City, Tokyo 151-0053, Japan', '+81 3-xxxx-xxxx' ,'6am-7pm' );
let dubai = new SalmonCokies( 'Dubai', 'Dubai Media City - Dubai - United Arab Emirates', '+971 xxx-xxxxxx' ,'6am-7pm' );
let paris = new SalmonCokies( 'Paris', '1 Rue du Commerce, 75015 Paris, France', '+33 xxxxxxxxx', '6am-7pm' );
let lima = new SalmonCokies( 'Lima', '2619 Elida Rd, Lima, OH 45805, United States', '+1 xxx-xxx-xxxx', '6am-7pm' );

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
