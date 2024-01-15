const cars = require('../repository/cars')
const carService = require('../service/carService')
const service = new carService(cars)
const Car = require('../model/car')
const InvalidIdError = require('../error/invalidIdError')
const CarNotFoundError = require('../error/carNotFoundError')
const InvalidResultTestError = require('./InvalidResultTestError')

function shouldGetCarById(carId) {
    const car = service.getById(carId)

    if (car.name == undefined) {
        throw new InvalidResultTestError('shouldGetCarById')
    }
}

const allInvalidIds = ['', -1, 'a', 0, 9, true, false]
function shouldNotGetCarById(invalidIds) {

    let errorInvalidId = false

    try {
        service.getById(invalidIds[0])
    } catch (error) {
        if (error instanceof InvalidIdError
            || error instanceof CarNotFoundError) {
            errorInvalidId = true
        }
    } finally {
        invalidIds.splice(0, 1)
    }

    if (invalidIds.length > 0) {
        shouldNotGetCarById(invalidIds)
    }

    if (!errorInvalidId) {
        throw new InvalidResultTestError('shouldNotGetCarById')
    }
}

shouldGetCarById(1)
shouldNotGetCarById(allInvalidIds)

function shouldGetCarByName(carName) {
    const car = service.getByName(carName)

    if (car.name == undefined) {
        throw new InvalidResultTestError('shouldGetCarByName')
    }
}

const invalidNames = ['a', 0, true, false]
function shouldNotGetCarByName(invalidNames) {

    let errorInvalidName = false

    try {
        service.getByName(invalidNames[0])
    } catch (error) {
        if (error instanceof InvalidIdError
            || error instanceof CarNotFoundError) {
            errorInvalidName = true
        }
    } finally {
        invalidNames.splice(0, 1)
    }

    if (invalidNames.length > 0) {
        shouldNotGetCarByName(invalidNames)
    }

    if (!errorInvalidName) {
        throw new InvalidResultTestError('shouldNotGetCarByName')
    }
}

shouldGetCarByName('Panamera')
shouldNotGetCarByName(invalidNames)

function shouldIncludeCar(newCar) {
    const included = service.include(newCar)

    if (!included) {
        throw new InvalidResultTestError('shouldIncludeCar')
    }
}

const allInvalidCars = ['gfjhsd', 5, {}]
function shouldNotIncludeCar(invalidCars) {
    let errorOnIncludeCar = false
    try {
        service.include(invalidCars[0])
    } catch (error) {
        if (error.name == 'InvalidIdError') {
            errorOnIncludeCar = true
        }
    } finally {
        invalidCars.splice(0, 1)
    }

    if (invalidCars.length > 0) {
        shouldNotIncludeCar(invalidCars)
    }

    if (!errorOnIncludeCar) {
        throw new InvalidResultTestError('shouldNotIncludeCar')
    }
}

shouldIncludeCar(new Car(4, 'Macan', 'Porsche', '2.0', 'Gasoline'))
shouldNotIncludeCar(allInvalidCars)

function shouldUpdateCar(carToBeUpdated) {
    const car = service.update(carToBeUpdated.id, carToBeUpdated)
    if (!car) {
        throw new InvalidResultTestError('shouldUpdateCar')
    }
}

const invalidCarsToBeUpdated = [{ 7: 'a' }, { 2: {} }, { 'a': 5 }]
function shouldNotUpdateCar(cars) {
    const car = cars[0]
    const key = Object.entries(car)[0][0]
    const val = Object.entries(car)[0][1]

    let updated = true
    try {
        updated = service.update(key, val)
    } catch (error) {
        if (error instanceof InvalidIdError) {
            updated = false
        }
    } finally {
        cars.splice(0, 1)
    }

    if (cars.length > 0) {
        shouldNotUpdateCar(cars)
    }

    if (updated) {
        throw new InvalidResultTestError('shouldNotUpdateCar')
    }

}

shouldUpdateCar(new Car(2, 'Spyder', 'Porsche', 'V6', 'Gasoline'))
shouldNotUpdateCar(invalidCarsToBeUpdated)

function shouldRemoveCar(carId) {
    let carRemoved = service.remove(carId)
    if (!carRemoved) {
        throw new InvalidResultTestError('shouldRemoveCar')
    }
}

function shouldNotRemoveCar(invalidCar) {
    let carRemoved = true
    try {
        carRemoved = service.remove(invalidCar)
    } catch (error) {
        if (error instanceof InvalidIdError
            || error instanceof CarNotFoundError) {
            carRemoved = false
        }
    }

    if (carRemoved) {
        throw new InvalidResultTestError('shouldNotRemoveCar')
    }
}

shouldRemoveCar(1)
shouldNotRemoveCar()

function shouldListCar(searchTerm) {
    let car = service.list(searchTerm)

    if (car.name == undefined) {
        throw new InvalidResultTestError('shouldListCar')
    }
}

function shouldNotListCar() {
    let car = service.list()

    if (car.length < 0) {
        throw new InvalidResultTestError('shouldNotListCar')
    }
}

shouldListCar(3)
shouldNotListCar()

console.log("everything is okay")