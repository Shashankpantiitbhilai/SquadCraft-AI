import * as React from "react";
import { PlayerCard } from "./PlayerCard";

export function TeamSection({ teamName, backgroundImageUrl, players }) {
  return (
    <div className="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full">
      <section className="flex flex-col pb-2.5 rounded-xl bg-zinc-300 bg-opacity-50 max-md:max-w-full">
        <div className="flex relative flex-col px-16 pt-2.5 pb-6 text-2xl text-center rounded-xl min-h-[54px] w-[492px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src={backgroundImageUrl}
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          {teamName}
        </div>
        <div className="flex flex-col mt-1.5 ml-6 max-w-full text-base w-[351px] max-md:ml-2.5">
          {players.map((player, index) => (
            <PlayerCard
              key={index}
              imageUrl={
                "https://cdn.builder.io/api/v1/image/assets/TEMP/b163be0910e2d00ee9e1dc81a7c90803f44c62d7f24241021fdd1b1e537b0f09?placeholderIfAbsent=true&apiKey=06101b99e1384fe5b76eade523a00afd"
              }
              iconUrl={
                "https://cdn.builder.io/api/v1/image/assets/TEMP/978457764cee9c0d36aedb50c3f7f8659109cbf7380b32a088e859aaf805a839?placeholderIfAbsent=true&apiKey=06101b99e1384fe5b76eade523a00afd"
              }
              name={player}
              role={"None"}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
