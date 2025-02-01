"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface SearchProps {
  data: {
    team: string;
    id: number[];
    warning?: boolean;
  }[];
}

const Search: React.FC<SearchProps> = ({ data }) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      setFilteredData(
        data.filter((item) =>
          (item.team.toLowerCase() + item.id).includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredData(data);
    }
  };

  return (
    <div className="p-4 w-full lg:w-2/3 mx-auto">
      {/* Search Input */}
      <Input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        className="mb-4"
      />

      {/* Results */}
      <div className="space-y-2 mb-32">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <Card
              key={index}
              className="border-none rounded-2xl p-3 shadow transition-transform duration-200 hover:scale-105 hover:shadow-lg "
            >
              <CardContent>
                <h1 className="text-lg font-bold text-[#19B3C5] ">
                  {item.warning && (
                    <p className="font-normal text-red-500">
                      ⚠️ PLEASE CONTACT STAFF IMMEDIATELY
                    </p>
                  )}
                  {item.team}
                </h1>
                <p className="text-gray-500">
                  {item.id.length} {item.id.length > 1 ? "members" : "member"}
                  {item.id.map((id, index) => (
                    <span key={index} className="text-gray-400">
                      {index === 0 ? " - " : ", "}
                      {id}
                    </span>
                  ))}
                </p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
