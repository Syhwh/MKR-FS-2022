const d = document

const input = d.getElementById('text');
const button = d.getElementById('button');
const tasks = document.getElementById('tasks');


button.addEventListener('click', () => {
  console.log(input.value)
  // Get input value
  const li = document.createElement('li');
  li.textContent = input.value;
  tasks.appendChild(li);
  input.value = ''

})
const date = Date.now();

// event delegation

tasks.addEventListener('click', function (e) {
  console.log(e.target.getAttribute('id'))
  e.target.classList.toggle('done')
});
