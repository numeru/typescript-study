{
  // class간에 너무 긴밀하게 연결되어 있는 것(class안에서 다른 class를 불러오는 경우)은 확장성, 유연성 측면에서 좋지 않다.
  // -> class자체를 가져오는 것이 아닌, interface를 받아온다.

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  class MilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Steaming milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Fancy Steaming milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting some sugar...");
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      this.getSugar();
      return {
        ...cup,
        hasSugar: true,
      };
    }
  }

  class FancySugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Fancy Getting some sugar...");
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      this.getSugar();
      return {
        ...cup,
        hasSugar: true,
      };
    }
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans be greater than 0");
      }
      this.coffeeBeans = beans;
    }

    clean() {
      console.log("cleaning machine...");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up...");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milk: MilkFrother
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milk.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(beans: number, private sugar: SugarProvider) {
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
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  // milk
  const milkMaker = new MilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();

  // sugar
  const sugarMaker = new SugarMixer();
  const fancySugarMaker = new FancySugarMixer();

  // machine
  // 같은 class로 다양한 object를 만들 수 있다.
  const latteMachine = new CaffeLatteMachine(12, "ss", milkMaker);
  const fancyLatteMachine = new CaffeLatteMachine(12, "ss", fancyMilkMaker);

  const sweetMachine = new SweetCoffeeMaker(12, sugarMaker);
  const fancySweetMachine = new SweetCoffeeMaker(12, fancySugarMaker);

  const sweetLatteMachine = new SweetCoffeeLatteMachine(
    12,
    milkMaker,
    sugarMaker
  );
}
