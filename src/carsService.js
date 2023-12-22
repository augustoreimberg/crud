const cars = require("Cars");

class CarsService {
    constructor(cars) {
        this.cars = cars;
    }

    getId(id){
        let carId = this.cars.find((element, index) => 
        {if (element.id === id){
            element.index = index;
            return element;
        }}
        );
        return carId;
    }

    getName(name){
        let carName = this.cars.find((element) => element.name === name);
        return carName;
    }

    include(newCar) {
        return this.cars.push(newCar);
    }

    update(id, newCar) {
        let carById = getId(id);
        this.cars[carById.index] = {
            id : id,
            ...newCar
        }
    }

    remove(id){
        let carById = getId(id);
        this.cars.splice(carById.index);
    }

    list(id, name){
        if(id){
            return getId(id);
        }

        if(name){
            return getName(name);
        }

        return cars;
    }
}

module.exports = CarsService