let cars = require("./cars");
const carService = require("./carService");
const service = new carService(cars);


// testar o get by id
function shouldGetCarById() {
    const car = service.getById(1);
    return car;
}

//verificar se há id
function shouldNotGetCarById() {
    const car = service.getById();
    return car;
}

const getCarById = shouldGetCarById();
const notGetCarById = shouldNotGetCarById();

// testar o get by name
function shouldGetCarByName() {
    const car = service.getByName("Panamera");
    return car.name;
}

//verificar se há name
function shouldNotGetCarByName() {
    const car = service.getByName();
    return car === undefined;
}

const getCarByName = shouldGetCarByName();
const notGetCarByName = shouldNotGetCarByName();

//testar o include
function shouldIncludeCar(){
    const car = service.include({
        id:4,
        name:"Macan",
        brand:"Porsche",
        engine:"2.0",
        fuel:"Gasoline"
    })
    return car;
}

//verificar se há include
function shouldNotIncludeCar() {
    const car = service.include();
    return car === undefined;
}

const includeCar = shouldIncludeCar();
const notIncludeCar = shouldNotIncludeCar(); 

//testar o update
function shouldUpdateCar(){
    const car = service.update(2,{
        name:"Spyder",
        brand:"Porsche",
        engine:"V6",
        fuel:"Gasoline"
    })
    return car;
}

//verificar se há update
function shouldNotUpdateCar(){
    const car = service.update()
    return car === undefined;
}

const updateCar = shouldUpdateCar();
const notUpdateCar = shouldNotUpdateCar();

//testar remove
function shouldRemoveCar(){
    let car = service.remove(1);
    return car;
}

//verificar se há remove
function shouldNotRemoveCar(){
    let car = service.remove();
    return car === undefined;
}

const removeCar = shouldRemoveCar();
const notRemoveCar = shouldNotRemoveCar();

//testar list
function shouldListCar(){
    let car = service.list(3, "Carrera");
    return car;
}

//verificar se há list
function shouldNotListCar(){
    let car = service.list();
    return car === undefined
}

const listCar = shouldListCar();
const notListCar = shouldNotListCar();

//console log
console.log("list car by id", listCar)