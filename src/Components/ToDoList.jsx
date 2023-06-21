import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function setLocalStorage(x) {
    localStorage.setItem("data", JSON.stringify(x));
  }
  function getLocalStorage() {
    const result = localStorage.getItem("data");
    if (result) return setTasks(JSON.parse(result));
  }
  function handleMark(name) {
    const updateTasks = tasks.map((task) => {
      if (task.name == name) {
        task.mark = !task.mark;
        return task;
      }
      return task;
    });
    setTasks(updateTasks);
    setLocalStorage(updateTasks);
  }

  function addTask(e) {
    setTasks((tasks) => [...tasks, { name: title, mark: false }]);
    setLocalStorage([...tasks, { name: title, mark: false }]);

    e.preventDefault();
  }

  const deleteTask = (name) => {
    const updateTasks = tasks.filter((el) => el.name !== name);
    setTasks(updateTasks);
    setLocalStorage(updateTasks);
  };

  useEffect(() => {
    getLocalStorage();
  }, []);
  return (
    <Container>
      <h1 className="my-4">To Do List</h1>
      <hr />
      <ul className="p-0 my-4" style={{ listStyle: "none" }}>
        {tasks.map((task) => (
          <li
            key={task.name}
            className="my-1 p-2 border d-flex justify-content-between align-items-center "
          >
            {task.mark ? (
              <Form.Check
                label={task.name}
                name="group1"
                type={"checkbox"}
                checked
                onChange={() => {
                  handleMark(task.name);
                }}
              />
            ) : (
              <Form.Check
                label={task.name}
                name="group1"
                type={"checkbox"}
                onChange={() => {
                  handleMark(task.name);
                }}
              />
            )}

            <Button onClick={() => deleteTask(task.name)}>Delete</Button>
          </li>
        ))}
      </ul>
      <hr />
      <Form onSubmit={(e) => addTask(e)}>
        <Form.Group>
          <Form.Control
            name="name"
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter new task"
          />
          <Button className="my-2" type="submit">
            Add
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
