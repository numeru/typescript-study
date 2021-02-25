# Type

- number

```
let num: number = -1;
```

- string

```
let str: string = "abc";
```

- boolean

```
let bool: boolean = true;
```

- undefined

```
let a: number | undefined;
a = 1;
```

- null

```
let person: string | null;
```

- unknown

```
let notSure: unknown = 0;
```

- any

```
let anything: any = 0;
anything = "hello";
```

- void

```
function print(): void {
  console.log("hello");
  return;
}
```

- never

```
function throwError(message: string): never {
  throw new Error(message);
  //while(true) {}
}
```

- object

```
let obj: object;
function acceptSomeObject(obj: object) {}
```

---

# Function

```
function tsAdd(n1: number, n2: number): number {
    return n1 + n2;
  }
```

```
 function tsFetchNum(id: string): Promise<number> {
    //...
    //...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
```

## Application

1. Optional Parameter

```
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName("choi", "yk"); //choi yk
  printName("choi"); // choi undefined
```

2. Default Parameter

```
 function printMessage(message: string = "default") {
    console.log(message);
  }
```

3. Rest Parameter

```
function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
```

---

# Array

```
  // Array
  const numbers1: number[] = [1, 2, 3];

  // Tuple
  let students: [string, number];
  students = ["name", 123];
  students[0]; // name
  students[1]; // 123
  const [name, age] = students;
```

---

# Alias

Type Alias: 특정 type만 나오기를 바랄 때 사용한다.

```
  type Text = string;
  const address: Text = "korea";

  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "choi",
    age: 20,
  };

  // String Lireal Types
  type Name = "name";
  let name: Name;
  name = 'choi'; -> Error
  name = 'name';
```

---

# Union

1. ex1

```
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }

  move("right");
```

2. ex2

```
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
```

---

# Intersection

```
  type Student = {
    name: string;
    score: number;
  };
  type Worker = {
    ID: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.ID, person.work());
  }

  internWork({
    name: "choi",
    score: 1,
    ID: 123,
    work: () => {},
  });
```

# Enum

```
   enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday); // 1
  console.log(Days.Tuesday); // 2

  let day: Days = Days.Monday;
  day = 10;

  type DaysOfWeek = "Monday" | "Tuesday";
  let daysofweek: DaysOfWeek = "Monday";
  // daysofweek = 10; -> 숫자 대입이 가능하다(☹)
```

---

# Inference

Type Inference: type이 자동으로 추론된다.

```
  let text = "hello";
  // 변수는 타입이 추론되도록 한다.

  function add(x: number, y: number): number {
    return x + y;
  }
  // 함수는 타입을 직접 명시하여준다.
```

---

# Assertion

Type Assertion: 여러 type이 나올 수 있는 상황에서 특정 type을 확신할 때 사용한다.

1. ex1

```
  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);
```

2. ex2

```
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));
```
