let express = require("express");
let app = express();

app.get('/', (req, res) => {
    return res.send('Servidor Iniciado!');
    res.json({
        title: "Servidor Iniciado",
        message: "Servidor Iniciado com sucesso!"
    });
});

app.listen(8080);