type NamaGeneric<T> = T;

function genericFunction<T>(value: T): NamaGeneric<T> {
  return value;
}

console.log(genericFunction<string>("hello"));
