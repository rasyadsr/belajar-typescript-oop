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
