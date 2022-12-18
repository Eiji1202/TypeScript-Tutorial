type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface  ElevatedEmployee extends Admin, Employee {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// function add(a: Combinable, b: Combinable) {
//   //型ガード
//   if (typeof a === "string" || b === "string") {
//     return a.toString() + b.toString();
//   } else if (typeof a === "number" && b === "number") {
//     return a + b;
//   }
// }

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(emp.name);

  //"privileges" というプロパティが emp に含まれていれば
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }

  //"startDate" というプロパティが emp に含まれていれば
  if ("startDate" in emp) {
    console.log("StartDate: " + emp.startDate);
  }
}

// printEmployeeInformation(e1);
printEmployeeInformation({ name: "Eiji", startDate: new Date() });

class Car {
  drive() {
    console.log("運転中...");
  }
}

class Truck {
  drive() {
    console.log("トラックを運転中");
  }

  loadCargo(amount: number) {
    console.log("荷物を載せています..." + amount);
  }
}

type Vehicle = Car | Truck;

const Vehicle1 = new Car();
const Vehicle2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  // if ("loadCargo" in vehicle) {
  //   vehicle.loadCargo(1000);
  // }

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(Vehicle1);
useVehicle(Vehicle2);

interface Bird {
  type: "bird"; //プロパティではなく "bird" という型
  flyingSpeed: number;
}

interface Horse {
  type: "horse"; //プロパティではなく "horse" という型
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("移動速度： " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
const userInputElement = document.getElementById("user-input")! as HTMLInputElement;

userInputElement.value = "こんにちは";
