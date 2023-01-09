/** Cara biasa */
class HewanConstructorBiasa {
  nama: string;
  kaki: number;

  constructor(nama: string, kaki: number) {
    this.nama = nama;
    this.kaki = kaki;
  }
}

const biasa = new HewanConstructorBiasa("singa", 4);
console.log(biasa); // HewanConstructorBiasa { nama: 'singa', kaki: 4 }

/** Promote constructor */
class HewanConstructorPromote {
  constructor(public nama: string, public kaki: number) {}
}

const promote = new HewanConstructorPromote("harimau", 4);
console.log(promote); // HewanConstructorPromote { nama: 'harimau', kaki: 4 }
