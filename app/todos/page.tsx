import React from "react";
import TodosList from "./TodosList";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      {/* @ts-ignore */}
      <TodosList />
    </div>
  );
};

export default page;
