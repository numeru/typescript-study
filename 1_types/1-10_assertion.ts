{
  // Type Assertion: 여러 type이 나올 수 있는 상황에서 특정 type을 확신할 때 사용한다. (X)
  // 1)
  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  // 2)
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // (X)

  // 3)
  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const number = findNumbers()!;
  number.push(2); //(X)
}
