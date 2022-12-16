const d = document;
const article = d.getElementById('article');
const title = d.getElementById('title');
const content = d.getElementById('content');
const button = d.getElementById('button');

window.addEventListener('click', () => {
  console.log('window clicked')
})

document.addEventListener('click', () => {
  console.log('document clicked')
})


article.addEventListener('click', (event) => {
  console.log('article clicked')
  console.log(event.target)
}, true)

content.addEventListener('click', () => {
  console.log('content clicked')

})

button.addEventListener('click', (event) => {
  console.log('button clicked')
  // console.log(event)
  event.stopPropagation();

})