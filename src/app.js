const express = require('express')
const app = express()
const port = 3000

const cars = require('./repository/cars')
const carService = require('./service/carService')
const service = new carService(cars)

app.get('/', (req, res) => {
    let car = service.list(3, 'Carrera')
    res.send(car)
})

app.post('/', (req, res) => {
    res.send('POST exemplo')
})

app.put('/', (req, res) => {
    res.send('PUT exemplo')
})

app.delete('/', (req, res) => {
    res.send('DELETE exemplo')
})

app.listen(port, (req, res) => {
    console.log(`exemplo de app listado na porta ${port}`)
})
