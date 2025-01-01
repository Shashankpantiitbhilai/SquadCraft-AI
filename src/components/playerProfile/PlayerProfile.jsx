import React from "react";

function Description() {
  return (
    <div className="self-end px-16 pt-24 pb-20 mt-14 max-w-full text-xl text-center whitespace-nowrap rounded-2xl bg-zinc-300 w-[581px] max-md:px-5 max-md:pb-28 max-md:mt-10">
      Description
    </div>
  );
}

function SelectButton() {
  return (
    <button className="self-end px-7 pt-2.5 pb-5 mt-11 text-sm text-center text-white whitespace-nowrap bg-black rounded-lg max-md:px-5 max-md:mt-10">
      Select
    </button>
  );
}

function PlayerImage() {
  return (
    <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca62870b38b1923b4f547a715e6507ad9e1246205b7425d4898e826c86a72d70?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b"
        alt="Player profile"
        className="object-contain grow w-full rounded-3xl aspect-[0.68] shadow-[0px_8px_13px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full"
      />
    </div>
  );
}

function PlayerInfo() {
  const playerStats = [
    "Right - arm batsman",
    "Off - spinner",
    "Strike rate : 118",
    "Wickets : 73",
    "Last match : 52*, 3 wickets",
  ];

  return (
    <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
      <article className="flex flex-col grow px-10 pt-7 pb-11 w-full font-bold text-black bg-white rounded-3xl shadow-[0px_8px_13px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h1 className="self-start text-5xl max-md:text-4xl">SLOK TULSYAN</h1>
        <ul className="self-start mt-14 ml-3 text-3xl font-medium max-md:mt-10 max-md:ml-2.5">
          {playerStats.map((stat, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: stat }} />
          ))}
        </ul>
        <Description />
        <SelectButton />
      </article>
    </div>
  );
}

const PlayerProfile = () => {
  return (
    <main className="flex flex-col w-screen h-screen overflow-hidden bg-white">
      <header className="flex w-full bg-zinc-300 min-h-[101px] max-md:max-w-full" />
      <section className="flex flex-col items-center gap-6 mt-4 w-full h-full px-4 max-w-[1223px] mx-auto">
        <div className="flex w-full gap-6 max-md:flex-col">
          <PlayerImage />
          <PlayerInfo />
        </div>
      </section>
    </main>
  );
};

export default PlayerProfile;
