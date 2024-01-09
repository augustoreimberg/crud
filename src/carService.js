class CarService {
    constructor(cars) {
        this.cars = cars;
    }

    isValidId(id){
        return id != undefined && id >= 0 && !isNaN(id);
    }

    isValidName(name){
        return isNaN(name)
    }

    getById(id) {
        if(this.isValidId(id)){
            return this.cars.find((car) => {
                if (car.id === id) {
                    return car;
                }
            });
        }
        return undefined;
    }

    getByName(name) {
        if(this.isValidName(name)){
            return this.cars.find((car) => car.name === name);
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