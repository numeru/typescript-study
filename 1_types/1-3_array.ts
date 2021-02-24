{
  // Array
  const numbers1: number[] = [1, 2, 3];
  // const numbers2: Array<number> = [1,2,3];

  // Tuple (X) -> interface, type alias, class
  let students: [string, number];
  students = ["name", 123];
  students[0]; // name
  students[1]; // 123
  const [name, age] = students;
}
