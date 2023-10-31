const express = require('express');
const mysql = require('mysql2');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'phpmyadmin',
  password: 'aluno',
  database: 'isadora'
});

db.connect((err) => {
  if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      throw err;
  }
  console.log('Conexão com o banco de dados MySQL estabelecida.');
});



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// READ
app.get('/cadastro', (req, res) => {
  db.query('SELECT * FROM dados', (err, result) => {
   if (err) throw err;
    res.render('cadastro', { dados: result });
  });
});

app.get('/login1', (req, res) => {
  db.query('SELECT * FROM dados', (err, result) => {
   if (err) throw err;
    res.render('login1', { dados: result });
  });
});

app.get('/login2', (req, res) => {
  db.query('SELECT * FROM dados', (err, result) => {
   if (err) throw err;
    res.render('login2', { dados: result });
  });
});

app.get('/agendar', (req, res) => {
  db.query('SELECT * FROM dados', (err, result) => {
   if (err) throw err;
    res.render('agendar', { dados: result });
  });
});

app.get('/consultas', (req, res) => {
  db.query('SELECT * FROM dados', (err, result) => {
   if (err) throw err;
    res.render('consultas', { dados: result });
  });
});



app.get('/inicio', (req, res) => {
  db.query('SELECT * FROM dados', (err, result) => {
   if (err) throw err;
    res.render('inicio', { dados: result });
  });
});

app.get('/erro', (req, res) => {
  db.query('SELECT * FROM dados', (err, result) => {
   if (err) throw err;
    res.render('erro', { dados: result });
  });
});

app.get('/userselect', (req, res) => {
  db.query('SELECT * FROM dados', (err, result) => {
   if (err) throw err;
    res.render('userselect', { dados: result });
  });
});

// CREATE
app.post('/add', (req, res) => {
  const { email, CPF, senha } = req.body;
  const sql = 'INSERT INTO dados (email, CPF, senha ) VALUES (?, ?, ?)';
  db.query(sql, [email, CPF, senha], (err, result) => {
    if (err) throw err;
    res.redirect('/');
  });
});

// UPDATE
app.post('/update/:id', (req, res) => {
  const { id } = req.params;
  const { email, CPF } = req.body;
  const sql = 'UPDATE dados SET name = ?, email = ? WHERE id = ?';
  db.query(sql, [email, id], (err, result) => {
    if (err) throw err;
    res.redirect('/');
  });
});

// DELETE
app.get('/delete/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM dados WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.redirect('/');
  });
});






app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
