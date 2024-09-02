import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
            setNewTodo("");
        }
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    let upperCaseAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => ({
                ...todo,
                task: todo.task.toUpperCase(),
            }))
        );
    };

    let markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id
                    ? { ...todo, isDone: true }
                    : todo
            )
        );
    };

    return (
        <div>
            <input
                placeholder="Add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <hr />
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
                            {todo.task}
                        </span>
                        &nbsp; &nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                        <button onClick={() => markAsDone(todo.id)}>
                            Mark as Done
                        </button>
                    </li>
                ))}
            </ul>
            <br />
            <button onClick={upperCaseAll}>Uppercase All</button>
        </div>
    );
}
