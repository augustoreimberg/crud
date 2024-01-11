class CarService {
    constructor(cars) {
        this.cars = cars;
    }

    _isValidId(id) {
        return id != undefined && id >= 0 && !isNaN(id);
    }

    _isValidName(name) {
        return name != undefined && isNaN(name);
    }

    _getIndex(id){
        const findCar = this.cars.filter(filterCar => id === filterCar.id)
        return this.cars.indexOf(findCar);
    }

    getById(id) {
        if (this._isValidId(id)) {
            return this.cars.find((car) => {
                if (car.id === id) {
                    return car;
                }
            });
        }
        return undefined;
    }

    getByName(name) {
        if (this._isValidName(name)) {
            return this.cars.find((car) => car.name === name);
        }
    }

    include(car) {
        if (this._isValidId(car.id)) {
            const existingCar = this.getById(car.id);

            if (!existingCar) {
                this.cars.push(car);
                return true;
            }
        }
        return false;
    }

    update(id, car) {
        const index = this._getIndex(id)
        if (index) {
            this.cars[index] = {
                id: id,
                ...car,
            };

            return true
        }
        return false;
    }

    remove(id) {
        if (this._isValidId(id)){
            let carById = this.getById(id);
            this.cars.splice(carById.index);
        }
        return false;
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

module.exports = CarService;
