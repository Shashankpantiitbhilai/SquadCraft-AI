import React from "react";
import MatchCard from "./MatchCard";

function MatchCardList({ matches }) {
  return (
    <div className="flex gap-5 max-md:flex-col">
      {matches.map((match, index) => (
        <div
          key={index}
          className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
        >
          <MatchCard {...match} />
        </div>
      ))}
    </div>
  );
}

export default MatchCardList;
