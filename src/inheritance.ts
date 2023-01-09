class BaseAnimal {
  nama: string = "";
  kaki: number = 0;

  bernafas(): void {
    console.log("nafas");
  }
}

/** karena Burung extends ke BaseAnimal maka class Burung bisa meng-akses property atau method milik BaseAnimal */
class Burung extends BaseAnimal {
  warna: string = "";
}

const burung = new Burung();
burung.nama = "Kenari";
burung.kaki = 2;
burung.nama = "kuning";
console.log(burung); // Burung { nama: 'kuning', kaki: 2, warna: '' }
burung.bernafas(); // nafas
