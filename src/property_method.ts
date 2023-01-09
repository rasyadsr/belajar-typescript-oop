class HewanLainLagi {
  nama: string = ""; // property adalah variable yang berada di dalam class
  kaki: number = 0;
  isMamalia: boolean = false;

  bernafas(): void {
    // method adalah function yang berada di dalam class
    console.log(`${this.nama} sedang bernafas`);
  }
}

const naga = new HewanLainLagi();
naga.nama = "naga";
naga.kaki = 4;
console.log(naga);
naga.bernafas();
