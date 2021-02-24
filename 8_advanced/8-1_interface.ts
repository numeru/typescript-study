{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  // Both
  // 1) object
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };

  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // 2) class
  class Pos1 implements PositionType {
    x: 1;
    y: 1;
  }

  class Pos2 implements PositionInterface {
    x: 1;
    y: 1;
    z: 1;
  }

  // 3) extends
  type ZPositionType = PositionType & { z: number };

  interface ZPositionInterface extends PositionInterface {
    z: number;
  }

  // Only Interface
  // 1) merge
  interface PositionInterface {
    x: number;
    y: number;
    z: number;
  }

  //Only Type
  // 1) computed property
  type Person = {
    name: string;
    age: number;
  };

  type Name = Person["name"]; // string
}
