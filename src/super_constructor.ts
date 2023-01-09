class HewanAmfibi {
  nama: string = "";
  kaki: number = 0;

  constructor(nama: string, kaki: number) {
    this.nama = nama;
    this.kaki = kaki;
  }
}

class Katak extends HewanAmfibi {
  isBeracun: boolean;

  // di child nya juga harus memasukan data constructor nya
  constructor(nama: string, kaki: number, isBeracun: boolean) {
    super(nama, kaki); // untuk mengirim ke class Parent nya
    this.isBeracun = isBeracun;
  }
}

const katak = new Katak("katak", 2, false);
console.log(katak);
