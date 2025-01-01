import * as React from "react";

export default function PredictionCard({ image }) {
  return (
    <article className="flex flex-col grow text-sm font-bold text-center text-white whitespace-nowrap max-md:mt-10">
      <div className="flex flex-col px-4 py-4 rounded-2xl shadow-sm bg-gradient-to-b from-lightRed to-mediumRed">
        <img
          loading="lazy"
          src={image}
          alt="Match prediction preview"
          className="object-contain w-full aspect-[2.23] max-md:mr-0.5"
        />
        <button className="self-end px-9 pt-2.5 pb-5 bg-lime-700 rounded-lg max-md:px-5">
          View
        </button>
      </div>
    </article>
  );
}
