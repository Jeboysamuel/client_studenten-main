const express = require('express');

const app = express();
const port = 3000;
let cors = require('cors')
app.use(cors());
app.use(express.json());

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hallo wereld!");
});


app.post('/form', (req, res) => {

    let name = req.body.name;
    let email = req.body.email;
    let number = req.body.number;
    let subject = req.body.subject;
    let message = req.body.message;

    res.json({name: name, email: email, number: number, subject: subject, message: message});

});

app.listen(port, () => console.log(`Data API listening on port ${port}!`))
