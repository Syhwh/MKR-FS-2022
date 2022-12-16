const h1 = document.getElementsByTagName('h1')[0];
const p = document.getElementsByTagName('p')[0];
const ul = document.getElementsByTagName('ul')[0];
const li = document.getElementsByTagName('li')[0]

// console.log(h1.parentElement)
// console.log(h1.parentNode)

// console.log(li[0].parentNode.parentNode)

// const html = document.documentElement

// console.log(html.parentNode)//
// console.log(html.parentElement)//

console.log(ul.children)
console.log(ul.firstChild)// first child node
console.log(ul.firstElementChild)

ul.firstElementChild.style.color = 'red';
// ul.firstChild.style.color = 'red';

ul.lastElementChild.style.color = 'green'

console.log(ul.children)
console.log(ul.childNodes)