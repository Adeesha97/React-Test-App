import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Item = (props) => {
  console.log(props.id);
  const [loading, setLoading] = useState(false);
  const [todoItem, setTodoItem] = useState();

  const getTodoItem = async () => {
    try {
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${props.id}`
      );
      console.log(data);
      setTodoItem(data.data);
      console.log(setTodoItem);
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect
  useEffect(() => {
    getTodoItem(props.id);
  }, []);

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <li>{todoItem.title}</li>
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Item;
