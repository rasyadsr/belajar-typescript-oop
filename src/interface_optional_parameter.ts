interface Teacher {
  name: string;
  age: number;
  phone?: number; // phone ini dia bersifat optional
}

let teacher: Teacher = { name: "rasyad", age: 18 };
console.log(teacher);
