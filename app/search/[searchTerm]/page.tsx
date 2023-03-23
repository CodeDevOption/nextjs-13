import Link from "next/link";
import React from "react";

type PageProps = {
  params: {
    searchTerm: string;
  };
};

type SearchResult = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};

const search = async (searchTerm: string) => {
  const res =
    await fetch(`https://serpapi.com/search.json?&q=${searchTerm}&api_key=bf00089bf5217eaca6b89065bc1bbc0b18873c51992f463e05d819120bde1e31
  `);
  const search: SearchResult = await res.json();
  return search;
};

const Page = async ({ params: { searchTerm } }: PageProps) => {
  const searchResult: SearchResult = await search(searchTerm);

  return (
    <div>
      <p className="text-gray-500 text-sm">You Searched for {searchTerm}</p>
      <ol className="space-y-5 p-5">
        {searchResult.organic_results.map((result) => (
          <li key={result.position} className="list-decimal">
            <Link href={result.link} className="font-bold">
              {result.title}
            </Link>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Page;
