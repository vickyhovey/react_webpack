// // // import './utils.js';
// // import subtract, { square, add } from './utils.js';

// // console.log('app.js is running');
// // console.log(square(4));
// // console.log(add(100, 23));
// // console.log(subtract(100, 81));

// import isSenior, { isAdult, canDrink } from './person.js';
// console.log(isAdult(18));
// console.log(canDrink(21));
// console.log(isSenior(64));

// install -> import -> use
// import validator from 'validator';

// console.log(validator.isEmail('vickyhovey@gmail.com'));


import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'testing 123');
ReactDOM.render(template, document.getElementById('app'));