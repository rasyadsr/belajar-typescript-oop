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

---

## Interface Readonly Property

```ts
interface Student {
  readonly name: string;
  readonly age: number;
}

// ketika sudah di assign sekali, maka tidak bisa di ubah
// mirip constanta yang bersifat immutable
let student: Student = { name: "Rasyad", age: 18 };

student.name = "fhurhfur"; // akan error
```

---

## Interface inheritance

- sama seperti class, interface pun bisa melakukan pewarisan

```ts
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
```

---

### Interface extends Class

- di typescript hal seperti ini bisa di lakukan

```ts
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
```

---

## Dependency Injection

```ts
// ----------------------- sebelum
// ribet nya adalah ketika misal kita ingin menabmah class baru kita harus merubah code pada saat initial value nya
class Store {
  private name: string = "Store A";
  private profit: number = 1000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class Store2 {
  private name: string = "Store A";
  private profit: number = 10000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class FashionProduct {
  private store: Store;
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    this.store = new Store();
    // andaikan kita ingin merubah menjadi Store2 maka kita perlu ubah
    this.store = new Store2();
  }

  sell(): void {
    console.log(
      `${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`
    );
  }
}

class TechProduct {
  private store: Store;
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    this.store = new Store();
    // andaikan kita ingin merubah menjadi Store2 maka kita perlu ubah
    this.store = new Store2();
  }

  sell(): void {
    console.log(
      `${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`
    );
  }
}

const baju = new FashionProduct("baju lengan panjang", 50000);
baju.sell();

// ----------------------- sesudah

interface IStore {
  name: string;
  profit: number;
  getProfit(): number;
}

class TokoLama implements IStore {
  name: string = "Toko Lama";
  profit: number = 1000;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class TokoBaru implements IStore {
  name: string = "Toko Baru";
  profit: number = 2500;

  getName(): string {
    return this.name;
  }

  getProfit(): number {
    return this.profit;
  }
}

class HijabProduct {
  private store: IStore;
  private name: string;
  private price: number;

  constructor(store: IStore, name: string, price: number) {
    this.name = name;
    this.price = price;
    this.store = store;
  }

  sell(): void {
    console.log(
      `${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`
    );
  }
}

class FoodProduct {
  private store: IStore;
  private name: string;
  private price: number;

  constructor(store: IStore, name: string, price: number) {
    this.name = name;
    this.price = price;
    this.store = store;
  }

  sell(): void {
    console.log(
      `${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`
    );
  }
}

const tokoLama = new TokoLama();
const tokoBaru = new TokoBaru();

const hijabMahal = new HijabProduct(tokoLama, "hijab mahal", 80000);
const hijabMahal2 = new HijabProduct(tokoBaru, "hijab mahal", 80000);

console.log(hijabMahal);
console.log(hijabMahal2);

hijabMahal.sell();
hijabMahal2.sell();
```

---

## Generic

- menjadikan sebuah function / class / interface bisa memiliki berbagai macam tipe data yang dynamis

```ts
/* <T> adalah type generic nya*/
function getData<T>(value: T) {
  return value;
}

/** Data nya bisa dinamis, kita harus definisikan data type nya */
const data = getData<string>("hello world");
console.log(data.toUpperCase());

const number = getData<number>(1212);
console.log(number.toFixed(2));
```

---

## Generic Type

- perbedaan antara `type` dan `interface` adalah, `interface` lebih ke object sedangkan `type` lebih ke variable biasa

```ts
type NamaGeneric<T> = T;

function genericFunction<T>(value: T): NamaGeneric<T> {
  return value;
}

console.log(genericFunction<string>("hello"));
```

---

## Generic Class

```ts
interface NamaGenericNya<T> {
  propA: T;
  methodA(): T;
}

// ketika class meng-implements interface yang generic
// maka class nya pun harus generic, tambahkan <T> di akhir nama class
class GenericClass<T> implements NamaGenericNya<T> {
  propA: T;

  constructor(propA: T) {
    this.propA = propA;
  }

  methodA(): T {
    return this.propA;
  }
}

const genericClassA = new GenericClass<number>(123);
console.log(genericClassA.methodA());
```

---

## Generic class Part 2

```ts
class ClassA {
  name: string = "Class A";
}

class ClassBaru<T> {
  classProp: T;

  constructor(classProp: T) {
    this.classProp = classProp;
  }
}

const classA = new ClassA();
const classBaru = new ClassBaru(classA);
```

---

## Generic Constraint

- terkadang kita juga butuh menampilkan beberapa option di dalam setiap type yang masuk ke dalam generic

```ts
interface Length {
  length: number;
}
// parameter generic T ini nantinya akan mempunyai options length, karena generic T extends ke interface Length
function generics24<T extends Length>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const generics24a = generics24("fruhfur"); // pada dasarnya, string memang mempunyai length
/**
 * meski generic bersifat dynamis
 * namun berbeda denan number, number tidak memiliki length untuk ngakalinnya bungkus parameter dalam sebuah object dan kita set length dan value nya
 * */
const generics24b = generics24({ length: 20, value: 23232 });
```

---

## Generic Class Constraint

- kita bisa mengakses beberapa method / property yang ada di dalam class di dalam generic function

```ts
interface Product {
  sell(): void;
}

class CarProduct implements Product {
  sell(): void {
    console.log("jual mobil");
  }
}

class MotorProduct implements Product {
  sell(): void {
    console.log("jual motor");
  }
}

function sellProduct<T extends Product>(products: T[]): void {
  products.forEach((product) => product.sell()); // bisa mengakses method sell, karena function nya Type nya extends ke interface Product
}

const car = new CarProduct();
const motor = new MotorProduct();
sellProduct([car, motor]);
// jual mobil
// jual motor
```

## Type parameter in generic constraint

```ts
/**
 * Nama generic type kan bebas, jadi di sini menggunakan U
 * yang dimana U ini harus sebuah key, dari object nya
 * Object nya bersifat generic juga
 */
function getProperty<T, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

let x = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

console.log(getProperty(x, "a")); // 1
console.log(getProperty(x, "c")); // 3
```

---

## Namespace

```ts
namespace ApapunItu {
  export class Hewan {}
  export const kodok = new Hewan(); // kalau di dalam namespace nya yang sama cara akses nya begini
}

const kodok = new ApapunItu.Hewan(); // jika dari global maka kita perlu memanggil nampesace nya
let kodokLagi = ApapunItu.kodok;
```

---

## Type vs Interface

- gunakan interface ketika kita ingin membuat sebuah object baru dari sebuah class, atau method dari sebuah object
- gunakan type jika kita ingin membuat sebuah variable atau function

```ts
// interface
interface NamaInterface {}

class NamaClass implements NamaInterface {}

// type
type NamaType = {};
function getData(): NamaType {}

type UserType = {
  name: string;
};

interface UserInterface {
  name: string;
}

// persamaan nya adalah class bisa implement ke interface maupun type
class UserKeType implements UserType {
  name: string = "user_type";
}

class UserKeInterface implements UserInterface {
  name: string = "user_interface";
}

// perbedaan

/**
 * - Iterface hanya bisa memakai object type
 * - interface harus sebuah object
 * - Type bisa dibuat dalam bentuk object ataupun variable
 */
type PhoneType = string;
type PhoneTypeObject = {
  name: string;
};

interface PhoneInterface {
  name: string;
}

/**
 * - Interface bisa di merge, sedangkan type tidak
 */

// ketika kita membuat dua interface dengan nama yang sama seperti ini, ini akan di merge dan menjadi satu kestauan
interface DinosaurusInterface {
  name: string;
}

interface DinosaurusInterface {
  weight: number;
}

class Dino implements DinosaurusInterface {
  name: string = "t-rex";
  weight: number = 200;
}

type DinoType = {
  name: string;
};

// ini akan error g bisa di merge soalnya kalau type itu
// type DinoType = {
//   weight: number;
// };

/**
 * - Dengan interface kita bisa implements dan extends class dengan mudah. kalau type ga bisa
 */
class Apaweh {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

interface ApaAja extends Apaweh {}

/**
 * Type juga terkadnag bisa di merge, tapi dengan cara berbeda
 * namun lebih tepat nya bukan merge melainkan interception
 */

type Name = {
  name: string;
};

type Age = {
  age: number;
};

type Employee = Name & Age; // jika ingin di merge semua
type EmployeeOpt = Name | Age; // jika ingin optional

const employee: Employee = {
  name: "fulan",
  age: 18,
};
```
