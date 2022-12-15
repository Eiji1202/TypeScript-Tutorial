class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const accounting = new Department('Accounting'); //インスタンス化して {name: Accounting} オブジェクトが作成される
console.log(accounting);