{
  // Enum (X) -> union
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday); // 1
  console.log(Days.Tuesday); // 2

  let day: Days = Days.Monday;
  day = 10;

  type DaysOfWeek = "Monday" | "Tuesday";
  let daysofweek: DaysOfWeek = "Monday";
  // daysofweek = 10;
}
