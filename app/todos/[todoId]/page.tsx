import { Todos } from "@/typings";
import React from "react";

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  const todo: Todos = await res.json();
  return todo;
};

const Page = async ({ params: { todoId } }: PageProps) => {
  const todo = await fetchTodo(todoId);
  return (
    <div className="p-10 bg-indigo-300 border-2 m-2 shadow-lg">
      <p>
        #{todo.id} : {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>

      <p>By User: {todo.userId}</p>
    </div>
  );
};

export default Page;
