import { Suspense } from "react";
import TodosList from "./todos/TodosList";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p className="text-rose-600">Loading Todo</p>}>
        <h1>Loading Todos</h1>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
      <Suspense fallback={<p className="text-indigo-400">Shopping Trolley</p>}>
        <h1>Loading Shopping Trolley</h1>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
}
