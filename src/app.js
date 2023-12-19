const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.post('/',(req, res) => {
    res.send('POST exemplo');
});

app.put('/',(req, res) => {
    res.send('PUT exemplo');
});

app.delete('/',(req, res) => {
    res.send('DELETE exemplo');
});

app.listen(port,(req, res) => {
    console.log(`exemplo de app listado na porta ${port}`);
})
