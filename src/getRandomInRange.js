// Определение функции, дающее рандомное целое число
const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandomInRange;