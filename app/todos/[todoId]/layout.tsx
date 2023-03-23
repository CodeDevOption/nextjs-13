import TodosList from "../TodosList";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div>
        {/* @ts-ignore */}
        <TodosList />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default RootLayout;
