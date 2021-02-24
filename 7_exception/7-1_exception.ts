{
  // Error Handling: try -> catch -> finally

  function readFile(fileName: string): string {
    if (fileName === "not exist") {
      throw new Error("file not exist!");
    }
    return "file content";
  }

  function closeFile(fileName: string) {}

  const fileName = "file";
  try {
    console.log(readFile(fileName));
  } catch (e) {
    console.log("catched!");
  } finally {
    closeFile(fileName);
  }
}
