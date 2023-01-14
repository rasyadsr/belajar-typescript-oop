namespace ApapunItu {
  export class Hewan {}
  export const kodok = new Hewan(); // kalau di dalam namespace nya yang sama cara akses nya begini
}

const kodok = new ApapunItu.Hewan(); // jika dari global maka kita perlu memanggil nampesace nya
let kodokLagi = ApapunItu.kodok;
