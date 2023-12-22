const car = require("Car");

class CarService {
    constructor(car) {
        this.car = car;
    }

    getById(id) {
        let carId = this.car.find((element, index) => {
            if (element.id === id) {
                element.index = index;
                return element;
            }
        });
        return carId;
    }

    getByName(name) {
        let carName = this.car.find((element) => element.name === name);
        return carName;
    }

    include(newCar) {
        return this.car.push(newCar);
    }

    update(id, newCar) {
        let carById = getId(id);
        this.car[carById.index] = {
            id: id,
            ...newCar,
        };
    }

    remove(id) {
        let carById = getId(id);
        this.car.splice(carById.index);
    }

    list(id, name) {
        if (id) {
            return getById(id);
        }

        if (name) {
            return getByName(name);
        }

        return car;
    }
}

module.exports = CarService;
