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
