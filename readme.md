## Class & Object

```ts
class Hewan {}

const kucing = new Hewan();
const anjing = new Hewan();

console.log(typeof kucing); // hasil nya object, karena kucing instansiasi dari class Hewan
console.log(typeof Hewan); // hasil nya function, karena di javascript tidak ada class, ada nya function
```

---

## Constructor

```ts
class HewanLain {
  constructor() {
    console.log("constructor akan selalu di panggil terlebih dahulu");
  }
}

const kangguru = new HewanLain(); //  hasil nya constructor akan selalu di panggil terlebih dahulu ketika object di instansiasikan
```

---

## Property & Method

```ts
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
```

---

## Constructor Lanjutan

```ts
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
```

---

## Inheritance

```ts
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
```

---

## Super Constructor

```ts
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
```

---

## Method Overriding

- berfungsi agar child class bisa mereplace method yang ada di parent class
- kalau child class tidak memiliki methhod seperti pada parent nya, maka child akan merujuk ke parent
- jika child class memiliki method seperti parent nya, maka akan di lakukan override, child akan merujuk ke class child itu sendiri

```ts
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
```
