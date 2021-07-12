import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import InsertForm from "./InsertForm";

export default function ShoppingList() {

  const [items, setItems] = useState([]);

  useEffect(loadItems, []);

  function loadItems() {
    const req = axios.get("http://localhost:4000/items");
    req.then(res => {
      setItems(res.data);
    });
    req.catch(err => {
      console.log(err);
    });
  }

  return (
    <>
      <InsertForm onAddItem={loadItems} />
      <List>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </List>
    </>
  );
}

const List = styled.ul`
  margin-top: 40px;
  background: #fff;
  width: 600px;
  padding: 20px;
  border-radius: 10px;
  font-size: 25px;
  padding-left: 50px;
  line-height: 40px;
  list-style-type: disc;
`;
