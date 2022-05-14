const express = require('express');
const todoController = require('./controllers/todoControllers');
const app = express();

const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('./public'));

// controllers
todoController(app);

app.listen(port, () => {
  console.log(`Todo List App listening on port ${port}`);
});
