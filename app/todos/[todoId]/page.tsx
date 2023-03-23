import { Todos } from "@/typings";
import React from "react";
import { notFound } from "next/navigation";
// by default true
// export const dynamicParams = false;

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 10 } }
  );
  const todo: Todos = await res.json();
  return todo;
};

const Page = async ({ params: { todoId } }: PageProps) => {
  const todo = await fetchTodo(todoId);
  if (!todo.id) return notFound();
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

export const generateStaticParams = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const todos: Todos[] = await res.json();
  const todo = todos.slice(0, 11);
  return todo.map((todo) => ({
    todoId: todo.id.toString(),
  }));
};
