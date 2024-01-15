class CarNotFoundError extends Error {
    constructor(message) {
        super(message)
        this.name = 'CarNotFoundError'
    }
}

module.exports = CarNotFoundError