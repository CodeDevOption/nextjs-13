"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`);
    setSearch("");
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Search"
        className="p-2 border-b-2 border-indigo-500 outline-none"
      />
      <button
        type="submit"
        className="text-white bg-gradient-to-br from-blue-500 to-indigo-500 px-4 rounded-md shadow-indigo-500 shadow-md py-2"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
