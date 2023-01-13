interface Vechile {
  name: string;
  wheels: number;
}

interface Car extends Vechile {
  doors: number;
}

class Civic implements Car {
  doors: number = 2;
  name: string = "Civic";
  wheels: number = 4;
}
