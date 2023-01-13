interface Student {
  readonly name: string;
  readonly age: number;
}

// ketika sudah di assign sekali, maka tidak bisa di ubah
// mirip constanta yang bersifat immutable
let student: Student = { name: "Rasyad", age: 18 };

student.name = "fhurhfur"; // akan error
