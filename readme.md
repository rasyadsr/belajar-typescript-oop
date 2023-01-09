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
