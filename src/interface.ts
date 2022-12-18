//型定義
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

//変数addの型定義
let add: AddFn;

//実装を定義
add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

//型定義
let user1: Greetable;

//インスタンス
// user1 = new Person("Max");
user1 = new Person();

//関数の実行
user1.greet("Hello I am");
console.log(user1);
