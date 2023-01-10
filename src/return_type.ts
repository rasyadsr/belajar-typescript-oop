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
