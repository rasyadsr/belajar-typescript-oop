class Hewan {}

const kucing = new Hewan();
const anjing = new Hewan();

console.log(typeof kucing); // hasil nya object, karena kucing instansiasi dari class Hewan
console.log(typeof Hewan); // hasil nya function, karena di javascript tidak ada class, ada nya function
