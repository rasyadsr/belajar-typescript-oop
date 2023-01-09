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
