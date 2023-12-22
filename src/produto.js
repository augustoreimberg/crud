class Cars {
    constructor(id, type, brand, name, engine, fuel) {
        (this.id = id),
            (this.type = type),
            (this.brand = brand),
            (this.name = name),
            (this.engine = engine),
            (this.fuel = fuel);
    }
}

class CarsService {
    constructor(cars) {
        this.cars = cars;
    }

    getId(id){
        let carId = this.cars.find((element, index) => 
        {if (element.id === id){
            element.index = index;
            return element;
        }}
        );
        return carId;
    }

    include(newCar) {
        return this.cars.push(newCar);
    }

    update(id, newCar) {
        let carById = getId(id);
        this.cars[carById.index] = {
            id : id,
            ...newCar
        }
    }

    remove(id){
        for (let car of this.car) {
            if (car.id === id) {
                let carIndex = this.cars.indexoOf(car);
                this.cars.splice(carIndex, 1);
                break;
            }
        }
    }
}
