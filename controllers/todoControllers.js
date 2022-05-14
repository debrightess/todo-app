const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

let data = [
  { item: 'Feed the dog' },
  { item: 'Go Shopping' },
  { item: 'Learn Node JS' },
];

module.exports = (app) => {
  app.get('/todo', urlencodedParser, (req, res) => {
    res.render('todo', { todos: data });
  });

  app.post('/todo', (req, res) => {
    data.push(req.body);
    res.json(data);
  });

  app.delete('/todo/:item', (req, res) => {
    data = data.filter(
      (todo) => todo.item.replace(/ /g, '-') !== req.params.item
    );
    res.json(data);
  });
};
