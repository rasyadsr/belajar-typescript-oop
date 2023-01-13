interface Generics<T> {
  propA: T;
}

function genericFunction<T>(value: T): Generics<T> {
  let data: Generics<T> = {
    propA: value,
  };
  return data;
}

console.log(genericFunction<string>("hello"));
console.log(genericFunction<number>(23232));
console.log(genericFunction<boolean>(true));
