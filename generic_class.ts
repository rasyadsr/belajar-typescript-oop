interface NamaGenericNya<T> {
  propA: T;
  methodA(): T;
}

// ketika class meng-implements interface yang generic
// maka class nya pun harus generic, tambahkan <T> di akhir nama class
class GenericClass<T> implements NamaGenericNya<T> {
  propA: T;

  constructor(propA: T) {
    this.propA = propA;
  }

  methodA(): T {
    return this.propA;
  }
}

const genericClassA = new GenericClass<number>(123);
console.log(genericClassA.methodA());
