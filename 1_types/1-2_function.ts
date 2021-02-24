{
  // JS
  function jsAdd(n1, n2) {
    return n1 + n2;
  }
  // TS
  function tsAdd(n1: number, n2: number): number {
    return n1 + n2;
  }

  // JS
  function jsFetchNum(id) {
    //...
    //...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  // TS
  function tsFetchNum(id: string): Promise<number> {
    //...
    //...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Application

  // 1) Optional Parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName("choi", "yk"); //choi yk
  printName("choi"); // choi undefined

  // 2) Default Parameter
  function printMessage(message: string = "default") {
    console.log(message);
  }

  // 3) Rest Parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
}
