'use strict';

var spy = new Gumshoe('#nav-links a');

var menu = document.querySelector('.nav-links');
var menuButton = document.querySelector('.nav-toggle');

menuButton.addEventListener('click', function() {
  menu.hidden = !menu.classList.toggle('active');
});

menu.querySelectorAll('a').forEach(a => a.addEventListener('click', function(event) {
  menu.classList.remove('active');
  menu.hidden = true;
  document.querySelector(event.target.getAttribute('href')).focus();
}));