const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const FormData = require('./models/FormData');
const { calcular } = require('./controllers/script');

let data;
app.locals.iteraciones = data;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('index', {
        data: data
    });
});

app.post('/', (req, res) => {
    const formData = new FormData(
        req.body.x0,
        req.body.x1,
        req.body.fx
    );
    data = calcular(formData)
    res.redirect('/');
});

app.listen(port, () => {
    console.log('Server on ' + `http://localhost:3000/`);
});