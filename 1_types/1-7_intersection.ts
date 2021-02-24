{
  // Intersection Types
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
}
