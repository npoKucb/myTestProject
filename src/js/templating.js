// import Handlebars from 'handlebars';
import itemsTemplate from '../templates/gallery-items.hbs';
import menu from '../menu.json';

const test = itemsTemplate(menu);

// console.log(test);

const galleryRef = document.querySelector('ul.js-menu');
galleryRef.insertAdjacentHTML('beforeend', test);

// console.log(galleryRef);
