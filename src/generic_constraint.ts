interface Length {
  length: number;
}

function generics24<T extends Length>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const generics24a = generics24("fruhfur");
const generics24b = generics24({ length: 20, value: 23232 });
