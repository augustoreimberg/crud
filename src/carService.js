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
        if (this._isValidId(id)) {
            const index = this.cars.findIndex((car => car.id == id));

            if (index >= 0) {
                return index
            }
        }
        return undefined
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
        const index = this._getIndex(id)
        if (index){
            this.cars.splice(index);
            return true;
        }
        return false;
    }

    list(search) {
        if (search != isNaN) {
            this.getById(search);
            return true;
        }

        if (search === isNaN) {
            this.getByName(search);
            return true;
        }
        
        if (search === undefined){
            return this.cars
        }
        return undefined;
    }
}

module.exports = CarService;
