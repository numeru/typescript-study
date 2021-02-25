# Generic

- 사용할 타입을 그 함수나 클래스를 사용할 때 결정하는 프로그래밍 기법이다.
- 함수와 클래스의 범용적인 사용을 가능하게 한다.

## Function

1. 제네릭을 사용하지 않을 때

```
  function checkNotNull(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid");
    }
    return arg;
  }
  const result = checkNotNull(123);
  console.log(result);
```

2. 제네릭을 사용할 때

```
  function checkNotNullWithGeneric<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid");
    }
    return arg;
  }
  const result1 = checkNotNullWithGeneric(123);
  const result2 = checkNotNullWithGeneric(true);
```

## Class

```
  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) {}
    left(): L {
      return this.leftValue;
    }
    right(): R {
      return this.rightValue;
    }
  }

  const either = new SimpleEither(4, "asd");
  console.log(either.left());
  console.log(either.right());
```

```
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const obj = {
    name: "choi",
    age: 20,
  };
  console.log(getValue(obj, "age"));
```
