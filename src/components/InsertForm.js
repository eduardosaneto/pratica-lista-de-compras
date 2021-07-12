import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function InsertForm({ onAddItem }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { text };
<<<<<<< HEAD
    const req = axios.post("http://localhost:4000/items", newItem);
    req.then(res => {
      setText("");
      onAddItem();
    });
    req.catch(err => {
      console.log(err);
    });
=======
    axios.post("http://localhost:4000/items", newItem);
    setText("");
    onAddItem();
>>>>>>> d6e005ed05b0fa71b18abe3ce8cb6e5e45ac1672
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Insert a new item..."
      />
    </form>
  );
}

const Input = styled.input`
  width: 400px;
  line-height: 40px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
  outline: none;
`;
