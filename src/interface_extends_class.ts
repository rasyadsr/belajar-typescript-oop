class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// di sini interface IShark extends ke class Animal
// sehingga interface ini memiliki property name
interface IShark extends Animal {
  swim(): void;
}

class Shark implements IShark {
  name: string = "megalodon";
  swim(): void {
    console.log("Shark swimming");
  }
}
