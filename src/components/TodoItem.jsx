import React, { useState } from "react";
import Item from "./Item";

const TodoItem = ({ key, userId, title, completed, id }) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="todo">
      <li>{title}</li>
      <button onClick={() => setButtonPopup(true)}>view</button>
      <Item trigger={buttonPopup} setTrigger={setButtonPopup} id={id}></Item>
    </div>
  );
};

export default TodoItem;
