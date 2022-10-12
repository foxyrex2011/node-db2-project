// STRETCH
const cars = [
    {
        vin: 'JA4MW31R12J026290',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '1B3ES56C55D137449',
        make: 'toyota',
        model: 'corolla',
        mileage: 215000,
        title: 'slavage',
    },
    {
        vin: 'JH4DA3450HS011682',
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