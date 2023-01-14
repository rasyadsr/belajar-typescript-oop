/**
 * Nama generic type kan bebas, jadi di sini menggunakan U
 * yang dimana U ini harus sebuah key, dari object nya
 * Object nya bersifat generic juga
 */
function getProperty<T, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

let x = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

console.log(getProperty(x, "a")); // 1
console.log(getProperty(x, "c")); // 3
