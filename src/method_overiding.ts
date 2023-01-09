class Hewan6 {
  bernafas(): void {
    console.log("sedang bernafas");
  }
}

class Katak6 extends Hewan6 {
  bernafas(): void {
    console.log("malas bernafas");
  }
}

const katak6 = new Katak6();
katak6.bernafas(); // malas bernafas
