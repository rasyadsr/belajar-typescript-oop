class Ayam {
  static kaki: number = 2;

  static jalan(): void {
    // method jalan ini, nempel nya di class jadi karena sama" nempel di class method jalan ini bisa akses property kaki
    console.log(`ayam berjalan dengan ${this.kaki} kaki`);
  }

  getKaki() {
    // karena kaki ini bersifat static, menempel pada class nya bukan pada object
    console.log(Ayam.kaki);
  }
}

Ayam.jalan();
console.log(Ayam.kaki);

const ayam = new Ayam();
ayam.getKaki();
