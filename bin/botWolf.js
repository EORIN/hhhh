const db = require('./db')

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}
exports.getBase = ()=>{
    return db.arr[getRandomIntInclusive(0, db.arr.length)]
}