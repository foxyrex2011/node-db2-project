// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'corolla',
        mileage: 215000,
        title: 'slavage',
    },
    {
        vin: '1111111111111',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
    },
]

exports.seed = function(knex) {
    return knex('cars')
        .truncate().then(() => {
            return knex('cars').insert(cars)
    })
}