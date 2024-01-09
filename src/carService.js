class CarService {
    constructor(cars) {
        this.cars = cars;
    }

    getById(id) {
        if(id != undefined && id >= 0 && id != NaN ){
            let carId = this.cars.find((car, index) => {
                if (car.id === id) {
                    return car;
                }
            });
            return;
        }
        return undefined;
    }

    getByName(name) {
        if(name != isNaN){
            let carName = this.cars.find((car) => car.name === name);
            return carName;
        }
    }

    include(car) {
        let includeCar = this.cars.push(car)
    }

    update(id, car) {
        let carById = this.getById(id);
        this.cars[carById.index] = {
            id: id,
            ...car,
        };
    }

    remove(id) {
        let carById = this.getById(id);
        this.cars.splice(carById.index);
    }

    list(search) {
        if (search != isNaN) {
            return this.getById(search);
        }

        if (search === isNaN) {
            return this.getByName(search);
        }

        return this.cars;
    }
}

module.exports = CarService