{
  // (1)
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log("full time!");
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log("part time!");
    }
    workPartTime() {}
  }

  // 세부적인 타입을 받아서 추상적인 타입으로 return하는 함수는 좋지 않다.
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const choi = new FullTimeEmployee();
  const steve = new PartTimeEmployee();

  choi.workFullTime();
  steve.workPartTime();

  const choiAfterPay = payBad(choi);
  const steveAfterPay = payBad(steve);

  //choiAfterPay.workFullTime();
  //steveAfterPay.workPartTime();

  // (2)
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const obj = {
    name: "choi",
    age: 20,
  };
  console.log(getValue(obj, "age"));
}
