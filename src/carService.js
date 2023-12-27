const car = require("Car");

class CarService {
    constructor(cars) {
    }

    getById(id) {
        let carId = this.car.find((car, index) => {
            if (car.id === id) {
                car.index = index;
                return car;
            }
        });
        return carId;
    }

    getByName(name) {
        let carName = this.car.find((element) => car.name === name);
        return carName;
    }

    include(car) {
        return this.car.push(car);
    }

    update(id, car) {
        let car = getId(id);
        this.car[car.index] = {
            id: id,
            ...car,
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
