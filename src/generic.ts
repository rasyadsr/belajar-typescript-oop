function getData<T>(value: T) {
  return value;
}

/** Data nya bisa dinamis, kita harus definisikan data type nya */
const data = getData<string>("hello world");
console.log(data.toUpperCase());

const number = getData<number>(1212);
console.log(number.toFixed(2));
