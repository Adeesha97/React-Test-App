import React, { useEffect, useState } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

// import components
import Footer from "../components/Footer";
import Header from "../components/Header";
import TodoList from "../components/TodoList";

const TodoDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [todoData, setTodoData] = useState([]);

  const getTodoList = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(data);
      setTodoData(data.data);
      console.log(todoData);
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect
  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <div>
      <Header />
      <TodoList todoData={todoData} />
      <Footer />
    </div>
  );
};

export default TodoDashboard;
