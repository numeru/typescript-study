{
  // let, const
  let name = "choi";
  name = "kim";

  const age = 3;

  // number
  let num: number = -1;

  // string
  let str: string = "abc";

  // boolean
  let bool: boolean = true;

  // undefined
  let a: number | undefined;
  a = 1;

  // null
  let person: string | null;

  // unknown (X)
  let notSure: unknown = 0;

  // any (X)
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
    return;
  }

  // never
  function throwError(message: string): never {
    throw new Error(message);
    //while(true) {}
  }

  // object (X)
  let obj: object;
  function acceptSomeObject(obj: object) {}
}
