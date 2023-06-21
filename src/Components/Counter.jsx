import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
export default function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <Container className="align-items-center d-flex justify-content-center" style={{"height" : "100vh"}}>
      <Form>
        <h1>{count}</h1>
        <Form.Group>
          <Button onClick={increment}>increment</Button>
          <Button className="mx-2" variant="secondary" onClick={decrement}>
            decrement
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
