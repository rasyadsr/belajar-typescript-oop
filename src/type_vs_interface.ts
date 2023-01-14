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
