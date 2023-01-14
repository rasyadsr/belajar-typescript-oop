interface Product {
  sell(): void;
}

class CarProduct implements Product {
  sell(): void {
    console.log("jual mobil");
  }
}

class MotorProduct implements Product {
  sell(): void {
    console.log("jual motor");
  }
}

function sellProduct<T extends Product>(products: T[]): void {
  products.forEach((product) => product.sell()); // bisa mengakses method sell, karena function nya Type nya extends ke interface Product
}

const car = new CarProduct();
const motor = new MotorProduct();
sellProduct([car, motor]);
// jual mobil
// jual motor
