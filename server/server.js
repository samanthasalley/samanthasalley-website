const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/blog', (req, res) => {
  res.render('blog');
});

app.get('/*', (req, res) => {
  res.render('home');
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));