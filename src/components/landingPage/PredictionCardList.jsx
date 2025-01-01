import React from "react";
import PredictionCard from "./PredictionCard";

function PredictionCardList({ predictions }) {
  return (
    <div className="flex gap-5 max-md:flex-col">
      {predictions.map((prediction, index) => (
        <div
          key={index}
          className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
        >
          <PredictionCard {...prediction} />
        </div>
      ))}
    </div>
  );
}

export default PredictionCardList;
