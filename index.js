let express = require("express");
let app = express();

app.use(express.json());

let users = [
    {id: 1, name: "Lawtrel" , email : "lawtrel@lawtrel.com"},
    {id: 2, name: "Leo" , email: "leo@leo.com"},
    {id: 3, name: "Law", email: "law@law.com"}
];

app.get('/users', (req, res) => {
    return res.json(users);
})

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(users => users.id === id);
    const status = user ? 200 : 404;
    return res.status(status).json(user);
})

app.get('/', (req, res) => {
    return res.send('Servidor Iniciado!');
    res.json({
        title: "Servidor Iniciado",
        message: "Servidor Iniciado com sucesso!"
    });
});

app.listen(8080);