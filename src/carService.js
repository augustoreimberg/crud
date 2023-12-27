let cars = require("../src/cars")

class CarService {
    constructor(cars) {
    }

    getById(id) {
        let carId = this.cars.find((car, index) => {
            if (car.id === id) {
                car.index = index;
                return car;
            }
        });
        return carId;
    }

    getByName(name) {
        let carName = this.cars.find((nameOfCar) => car.name === name);
        return carName;
    }

    include(car) {
        return this.cars.push(car);
    }

    update(id, car) {
        car = getId(id);
        this.cars[car.index] = {
            id: id,
            ...car,
        };
    }

    remove(id) {
        let carById = getId(id);
        this.cars.splice(carById.index);
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

module.exports = CarService