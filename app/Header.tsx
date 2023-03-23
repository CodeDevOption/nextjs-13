import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="p-5 bg-indigo-500 w-full flex justify-between">
      <Link href="/" className="bg-white text-indigo-500 px-4 py-2 rounded-md">
        Home
      </Link>
      <p className="font-bold text-white">I am the Header</p>
    </header>
  );
};

export default Header;
