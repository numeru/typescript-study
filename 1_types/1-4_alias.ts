{
  // Type Alias: 특정 type만 나오기를 바랄 때 사용한다.
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
  // name = 'choi'; (X)
  // name = 'name'; (O)
}
