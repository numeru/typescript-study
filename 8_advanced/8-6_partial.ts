{
  type ToDo = {
    title: string;
    description: string;
  };

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: ToDo = {
    title: "typescript",
    description: "study",
  };

  const updated = updateTodo(todo, { description: "project" });

  console.log(updated); //{ title: 'typescript', description: 'project' }
}
