const task1 = document.getElementById('task1')
const task2 = document.getElementById('task2')
const task3 = document.getElementById('task3')
const task4 = document.getElementById('task4')

// task1.addEventListener('click', function (event) {
//   event.target.classList = 'done'
// })
// task2.addEventListener('click', function (event) {
//   event.target.classList = 'done'
// })
// task3.addEventListener('click', function (event) {
//   event.target.classList = 'done'
// })
// task4.addEventListener('click', function (event) {
//   event.target.classList = 'done'
// })

// event delegation
const tasks = document.getElementById('tasks');

tasks.addEventListener('click', function (e) {
  console.log(e.target.getAttribute('id'))
  e.target.classList = 'done'
});
