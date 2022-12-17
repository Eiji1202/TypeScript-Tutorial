interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;
  constructor(name: string) {
    this.name = name;
  }
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

//型定義
let user1: Person;

//インスタンス
user1 = new Person("Max");

//関数の実行
user1.greet("Hello I am");
console.log(user1);
