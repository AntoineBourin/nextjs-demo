"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get("query") || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`?query=${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <input type="submit" value="Rechercher" />
    </form>
  );
};

export default SearchBar;
