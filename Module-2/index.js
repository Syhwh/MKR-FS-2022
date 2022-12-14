const element = document.getElementById('root');




// const element = document.getElementsByTagName('div')
console.log(element);


const selector = document.querySelectorAll('.selector')
console.log(selector);

// selector.forEach((element, index) => {
//   element.style.color = index % 2 === 0 ? 'red' : 'blue'
//   element.innerHTML = 'Hello world from' + index
// })
const name = document.getElementById('name');
const button = document.getElementById('button');
button.addEventListener('click', function () {
  element.innerHTML = `Hello ${name.value}`;
})
// Input -> name "research how to get the input value"
//button
// -> Hello -> name




