abstract class Department {
  static fiscalYear = 2022;
  // private employees: string[] = []; //型指定
  protected employees: string[] = []; //型指定

  static createEmployee(name: string) {
    return { name: name };
  }

  constructor(protected readonly id: string, public name: string) {
  }
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// ---------------------------------------------------------------------

//Departmentクラスを継承してITDepartmentクラスを作成
class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) { //admins: サブクラス独自のプロパティを追加
    //ベースクラスからコンストラクターを受け取り、プロパティを継承して値を変える
    //idプロパティは'd1'を受け取り、nameプロパティは'IT'に変更
    super(id, 'IT');
    this.admins = admins;
  }

  //ベースクラスでabstractを定義したため使うことを矯正される
  describe() {
    console.log('IT部門 - ID: ' + this.id);
  }
}

const it = new ITDepartment('d1', ['Max']); //インスタンス化して {name: Accounting} オブジェクトが作成される
//コンストラクターの中
// id: 'd1';
// name: 'IT';
// admins: ['Max'];

it.addEmployee('Eiji');
it.addEmployee('Yuzu');


it.describe();
it.printEmployeeInformation();

console.log(it);

// ---------------------------------------------------------------------

//Departmentクラスを継承してAccountingDepartmentクラスを作成
class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  //Getter : 外部からプライベートのプロパティにアクセスできる
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('レポートが見つかりません');
  }

  //Setter
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('正しい値を設定してください');
    }
    this.addReport(value);
  }

  //private コンストラクター とすることでインスタンス化されない
  private constructor(id: string, private reports: string[]) { //privateの独自のプロパティを追加
    super(id, 'Accounting'); //idプロパティはそのまま受け取り、nameプロパティは'Accounting'に変更
    this.lastReport = reports[0];
  }
  //コンストラクターの中
  // id: 'd2';
  // name: 'Accounting';
  // reports: [];

  //一度だけインスタンス化できる関数
  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log("会計部門 - ID: " + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  //オーバーライド : ベースクラスのメソッドを上書きして独自の実装を定義する 
  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }
}

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();


accounting.mostRecentReport = '通気会計レポート'; //Setter呼び出し。reports:['通気会計レポート']
accounting.addReport('Something');   //reports: ['通気会計レポート', 'Something'];
console.log(accounting.mostRecentReport); //Getter呼び出し
// accounting.printReports();
accounting.addEmployee('Max'); //returnではじかれる
accounting.addEmployee('Youya'); //pushで追加される

// accounting.printEmployeeInformation();
accounting.describe();

//インスタンス化しなくても直接createEmployeeメソッドにアクセスできる。
const employee1 = Department.createEmployee('Yamada');
console.log(employee1, Department.fiscalYear);