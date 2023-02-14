import React, { useState, useEffect } from "react";
import todo from "./apis";

import Form from "./components/Form";
//import Section from "./components/Section";
import List from "../../src/components/List";


const appTitle = "To do App";

// const list = [
//     { title: "Test # 1", completed: false },
//     { title: "Test # 2" },
//     { title: "Test # 3 "}
// ];

const App = () => {

    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await todo.get("/todos");
            setTodoList(data);
        }
        fetchData();
    }, []);

    const addTodo = async (item) => {
        const { data } = await todo.post("/todos", item);
        setTodoList((oldlist) => [...oldlist, data]);
        //setTodoList((oldlist) => [...oldlist, item]);
    }

    const removeTodo = async (id) => {
        await todo.delete(`/todos/${id}`);
        setTodoList((oldList) => oldList.filter((item) => item._id !== id));
    }

    const editTodo = async (id, item) => {
        await todo.put(`/todos/${id}`, item);
    }

    return (
        <div className="m-auto">
            <>
                <h1 className="font-Rubik text-dark text-center font-normal">
                    {appTitle}
                </h1>
            </>

            <>
                <Form addTodo={addTodo} />
            </>

            <>
                <List
                    editTodoListProp={editTodo}
                    removeTodoListProp={removeTodo}
                    list={todoList}
                />
            </>

        </div>
    )
}

export default App