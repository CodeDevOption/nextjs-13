import { Todos } from "@/typings";
import Link from "next/link";
import React from "react";

type Props = {};

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todos[] = await res.json();
  return todos;
};

const TodosList = async (props: Props) => {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map((todo) => (
        <>
          <div
            key={todo.id}
            className="p-10 bg-indigo-300 border-2 m-2 shadow-lg"
          >
            <Link href={`/todos/${todo.id}`}>
              #{todo.id} : {todo.title}
            </Link>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>

            <p className="border-t border-black mt-5 text-right">
              By User: {todo.userId}
            </p>
          </div>
        </>
      ))}
    </>
  );
};

export default TodosList;
