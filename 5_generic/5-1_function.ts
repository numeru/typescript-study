{
  function checkNotNull(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid");
    }
    return arg;
  }
  const result = checkNotNull(123);
  console.log(result);

  function checkNotNullWithGeneric<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid");
    }
    return arg;
  }
  const result1 = checkNotNullWithGeneric(123);
  const result2 = checkNotNullWithGeneric(true);
  const result3 = checkNotNullWithGeneric("asd");
}
