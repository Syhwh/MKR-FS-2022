const express = require('express');
const app = express();

app.get('/users/:id', (request, response) => {
  console.log(request.params);
  console.log(request.query);
  console.log(request.body);
  console.log(request.headers);

  response.send(`The id you specified is ${request.params.id}`);
});
app.get('/', (request, response) => {
  console.log(request.params);
  console.log(request.query);
  console.log(request.body);
  console.log(request.headers);

  response.status(200).send('<h1> Hello World</h1>');
});

app.post('/users', (request, response) => {
  // AQUI ES MI TRABAJO
  console.log(request.params);
  console.log(request.query);
  console.log(request.body);
  console.log(request.headers);
  response.status(400).send('<h1> Hello</h1>');
});


app.put('/users/:id', (request, response) => {
  response.send('Got a PUT request at /user');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});