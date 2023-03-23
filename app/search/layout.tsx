import Search from "./Search";
export const metadata = {
  title: "Search",
  description: "This is the Search Section",
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex space-x-4 divide-x-2 p-5">
      <div className="">
        <h1>Search</h1>
      </div>
      <div className="flex-1">
        <Search />
        <div>{children}</div>
      </div>
    </main>
  );
};

export default RootLayout;
