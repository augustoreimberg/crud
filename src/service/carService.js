const InvalidIdError = require('../error/invalidIdError')
const CarNotFoundError = require('../error/carNotFoundError')

class CarService {
    constructor(cars) {
        this.cars = cars
    }

    _isValidId(id) {
        if (id != undefined && typeof id === 'number' && id >= 0) {
            return true
        }

        throw new InvalidIdError()
    }

    _isValidName(name) {
        if (name != undefined && isNaN(name)) {
            return true
        }

        throw new InvalidIdError()
    }

    _getIndex(id) {
        if (this._isValidId(id)) {
            const index = this.cars.findIndex((car => car.id == id))

            if (index >= 0) {
                return index
            }

            throw new CarNotFoundError()
        }
    }

    getById(id) {
        if (this._isValidId(id)) {
            const car = this.cars.find((car) => {
                if (car.id === id) {
                    return car
                }
            })

            if (car) {
                return car
            }

            throw new CarNotFoundError
        }

    }

    getByName(name) {
        if (this._isValidName(name)) {
            const car = this.cars.find((car) => {
                if (car.name === name) {
                    return car
                }
            })

            if (car) {
                return car
            }

            throw new CarNotFoundError
        }
    }

    include(car) {
        let existingCar

        try {
            existingCar = this.getById(car.id)
        } catch (error) {
            if (!(error instanceof CarNotFoundError)) {
                throw error
            }
        }

        if (!existingCar) {
            this.cars.push(car)
            return true
        }

        return false
    }

    update(id, car) {
        const index = this._getIndex(id)
        if (index) {
            this.cars[index] = {
                id: id,
                ...car,
            }

            return true
        }
    }

    remove(id) {
        const index = this._getIndex(id)

        if (index >= 0) {
            this.cars.splice(index, 1)
            return true
        }
        
        return false
    }

    list(search) {

        if (search) {
            let car
            if (this._isValidId(search)) {
                car = this.getById(search)
                if (car) {
                    return car
                }
            }

            if (this._isValidName(search)) {
                car = this.getByName(search)
                if (car) {
                    return car
                }
            }
        }

        return this.cars

    }
}

module.exports = CarService
