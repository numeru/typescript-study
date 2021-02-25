# OOP

1. **Encapsulation**  
   관련있는 data를 한 object안에 담아둔다.

2. **Abstraction**  
   외부에서 간단한 interface를 통해 object를
   사용한다.

3. **Inheritance**  
   class를 재사용 한다.

4. **Polymorphism**  
   상속을 통해 다양한 형태의 class를 만든다.

---

# Class

ex) 커피를 만드는 class

```
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT = 7; //class level
    coffeeBeans: number = 0; // object level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots & CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
}
```

---

# Encapsulation

1. private

```
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
```

2. getter, setter

```
  class User {
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }
  }

  user.age = 6; //setter
  console.log(user.fullName); //getter
```

---

# Abstraction

- interface를 통한 추상화 -> class의 object를 사용하기 편하게 만든다.
- interface에 있는 모든 함수를 class에서 구현해주어야 한다.
- class는 임의의 여러 interface를 제공한다. -> class내 사용할 수 있는 함수를 제한한다.

```
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    fillCoffeeBeans(beans: number): void;
    makeCoffee(shots: number): CoffeeCup;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    fillCoffeeBeans(beans: number) {
      ...
    }

    makeCoffee(shots: number): CoffeeCup {
      ...
    }

    clean() {
      ...
    }
  }

  // class
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(12);
  maker.makeCoffee(2);

  // interface1
  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
  maker2.makeCoffee(2);

  // interface2
  const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  maker3.fillCoffeeBeans(12);
  maker3.makeCoffee(2);
  maker3.clean();
```

---

# Inheritance

```
  class CoffeeMachine{
    private coffeeBeans: number = 0;
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    ...
  }

  class CaffeLatteMachine extends CoffeeMachine {
    // 자식 class의 constructor는 필요한 인자를 받아 부모 class의 constructor를 실행해야 한다.
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    steamMilk(): void {
      console.log("Steaming milk...");
    }
  }

  const latteMachine = new CaffeLatteMachine(23, "ssss");
```

---

# Polymorphism

```
  class CoffeeMachine{}

  class CaffeLatteMachine extends CoffeeMachine {
    ...
    private steamMilk(): void {
      console.log("Steaming milk...");
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    ...
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }
```

---

# Composition

class 계층이 깊어지는 것을 막는다.

```
  class MilkSteamer {
    private steamMilk(): void {
      console.log("Steaming milk...");
    }
    ...
  }

  class SugarMixer {
    private getSugar() {
      console.log("Getting some sugar...");
    }
    ...
  }

  class CoffeeMachine {}

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milk: MilkSteamer
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milk.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(beans: number, private sugar: SugarMixer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCoffeeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      private milk: MilkSteamer,
      private sugar: SugarMixer
    ) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }
```

---

# Abstract

부모 class에서 자식 class마다 달라져야 하는 함수를 abstract로 지정한다. -> 자식 class에서 반드시 정의해주어야 한다.

```
  abstract class CoffeeMachine {
    ...
    protected abstract extract(shots: number): CoffeeCup;
  }

  class CaffeLatteMachine extends CoffeeMachine {
    ...
    protected extract(shots: number): CoffeeCup {
      ...
    }
  }
```
