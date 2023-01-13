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

---

## Visibility

- berguna untuk mengatur hak akses terhadap property dan method dari sebuah class, jadi dengan menggunakan visibility ini anda dapat mengatur, property dan method tersebut bisa diakses darimana saja
- public : bisa di akses dimana saja, baik di global, class child, dan class itu sendiri
- private : hanya bisa di akses oleh class child dan class itu sendiri
- protected : hanya bisa di akses oleh class itu sendiri

```ts
class Hewan7 {
  public name: string;
  protected isMamalia: boolean;
  private kaki: number;

  constructor(name: string, kaki: number, isMamalia: boolean) {
    this.name = name;
    this.kaki = kaki;
    this.isMamalia = isMamalia;
  }
}

class Katak7 extends Hewan7 {
  private umurKatak: number = 20;

  getUmur() {
    console.log(this.umurKatak);
  }

  getKakiParent() {
    console.log(this.kaki); // ga bisa ini akan terjadi error
  }

  getIsMamaliaParent() {
    console.log(this.isMamalia); // ini bisa karena isMamalia visibility nya protected
  }
}

const katak7 = new Katak7("asdf", 4, false);
console.log(katak7.isMamalia); // ini ga bisa akan error karena visibility nya protected
console.log(katak7.name); // ini bisa karena visivility nya public
console.log(katak7.kaki); //  ini ga bisa akan error karena visibility nya private
```

---

## Readonly

- keyword yang berfungsi agar sebuah propery tidak bisa di ubah value nya
- biasa di sebut juga immutable
- perbedaan const dengan readonly terdapat pada tempat penggunaanya
- const di gunakan agar sebuah variable bersifat immutable
- readonly di gunakan agar sebuah property dalam sebuah class bersifat immutable

```ts
class Person {
  public readonly gender: string = "Pria";
}

const person = new Person();
person.gender = "Wanita"; // ga akan bisa, akan terjadi error
```

---

## Getter dan Setter

```ts
class ProductA {
  private _price: number = 0; // dikasih _ biar enak aja buat getter setter nya
  private _discount: number = 0.5;

  get price() {
    return this._price;
  }

  // kegunaan setter yang lainnya adalah seperti kita bisa memberi validasi pada setter nya
  set price(value: number) {
    this._price = value - value * this._discount;
  }
}

const productSatu = new ProductA();
productSatu.price = 2000; // akan masuk ke fungsi setter
console.log(productSatu.price); // hasil dari fungsi getter
```

---

## Static keyword

- ketika kita memberi keyword static pada sebuah property / method maka itu akan menempel pada class bukan pada object

```ts
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
```

---

## Return Type

```ts
class Manuk {
  public kaki: number = 2;
  public nama: string = "rajawali";

  geKaki(): number {
    return this.kaki;
  }

  terbang(): void {
    console.log(`burung ${this.nama} terbang`);
  }

  async makan(): Promise<string> {
    return "makan dulu yah";
  }

  async jumlah(): Promise<number> {
    return 123;
  }
}
```

---

## Abstract class & abstract method

```ts
// abstract class ga bisa di instansiasi, harus membuat child class yang extends ke sini
abstract class Hewan12 {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  makan(): void {
    console.log(`${this.name} sedang makan!`);
  }

  abstract bergerak(): void; // wajib di override oleh child
}

class Kucing12 extends Hewan12 {
  constructor() {
    super("kucing");
  }
  bergerak(): void {
    console.log("kucing bergerak");
  }
}

class Burung12 extends Hewan12 {
  constructor() {
    super("burung");
  }
  bergerak(): void {
    console.log("burung bergerak");
  }
}

const kucing12 = new Kucing12();
kucing12.bergerak(); // kucing bergerak
kucing12.makan(); // kucing sedang makan!

const burung12 = new Burung12();
burung12.bergerak(); // burung bergerak
burung12.makan(); // burung sedang makan!
```

---

## Interface

```ts
interface AndroidPhone {
  name: string;
  menu(): void;
  home(): void;
  back(): void;
}

class Samsung implements AndroidPhone {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  menu(): void {
    console.log("menu di tekan");
  }
  home(): void {
    console.log("home di tekan");
  }
  back(): void {
    console.log("back di tekan");
  }
}

class GameA {
  private phone: AndroidPhone;

  constructor(phone: AndroidPhone) {
    this.phone = phone;
  }

  back(): void {
    console.log("kembali ke menu utama di game");
  }

  menu(): void {
    this.phone.menu(); // tombol menu dari phone
  }

  home(): void {
    this.phone.home();
  }
}

const samsung = new Samsung("Type A");
const game = new GameA(samsung);
game.back();
game.menu();
game.home();
```

---

## Interface Optional Parameter

- berfungsi agar property / method yang di beri optional parameter bisa di abaikan

```ts
interface Teacher {
  name: string;
  age: number;
  phone?: number; // phone ini dia bersifat optional
}

let teacher: Teacher = { name: "rasyad", age: 18 };
```
