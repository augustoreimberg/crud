// const crud = require("produto.js");

const express = require("express");
const app = express();
const port = 3000;

app.get('/', () => {
    res.send("Hello World!");
})

app.post('/',() => {
    res.send('POST exemplo');
});

app.put('/',() => {
    res.send('PUT exemplo');
});

app.delet('/',() => {
    res.send('DELETE exemplo');
});

app.listen(port,() => {
    console.log(`exemplo de app listado na porta ${port}`);
})
