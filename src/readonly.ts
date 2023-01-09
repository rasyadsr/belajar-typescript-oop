class Person {
  public readonly gender: string = "Pria";
}

const person = new Person();
person.gender = "Wanita"; // ga akan bisa, akan terjadi error
