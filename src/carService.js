class CarService {
    constructor(cars) {
        this.cars = cars;
    }


    getById(id) {
        if(id != undefined && id >= 0 && id != NaN ){
            let carId = this.cars.find((car, index) => {
                if (car.id === id) {
                    car.index = index;
                    return car;
                }
            });
            return carId;
        }
        return "erro";
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
            return this.getById(value);
        }

        if (search === isNaN) {
            return this.getByName(value);
        }

        return cars;
    }
}

module.exports = CarService