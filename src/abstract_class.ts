abstract class Hewan12 {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  makan(): void {
    console.log(`${this.name} sedang makan!`);
  }

  abstract bergerak(): void; // wajib di override oleh child
}

class Kucing12 extends Hewan12 {
  constructor() {
    super("kucing");
  }
  bergerak(): void {
    console.log("kucing bergerak");
  }
}

class Burung12 extends Hewan12 {
  constructor() {
    super("burung");
  }
  bergerak(): void {
    console.log("burung bergerak");
  }
}

const kucing12 = new Kucing12();
kucing12.bergerak(); // kucing bergerak
kucing12.makan(); // kucing sedang makan!

const burung12 = new Burung12();
burung12.bergerak(); // burung bergerak
burung12.makan(); // burung sedang makan!
