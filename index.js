// Import stylesheets
import './style.css';
// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
const container = document.querySelector('.container');
const box = document.querySelector('.box');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
prev.addEventListener('click', () => {
  const cardWidth = box.clientWidth;
  container.scrollLeft += cardWidth;
});
next.addEventListener('click', () => {
  const cardWidth = box.clientWidth;
  container.scrollLeft -= cardWidth;
});
