class InvalidResultTestError extends Error {
    constructor(message) {
        super(message)
        this.name = 'InvalidResultTestError'
    }
}

module.exports = InvalidResultTestError