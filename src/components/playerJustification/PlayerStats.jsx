import React from "react";

const PlayerCard = ({ imageSrc, name, points, role }) => {
  return (
    <article className="flex flex-col grow text-center max-md:mt-10">
      <div className="flex flex-col px-4 pt-3.5 pb-10 w-full bg-white rounded-2xl border-t-0 border-black shadow-[0px_6px_8px_rgba(0,0,0,0.25)]">
        <div className="flex gap-2.5 items-start text-base">
          <img
            loading="lazy"
            src={imageSrc}
            alt={`${name}'s profile`}
            className="object-contain shrink-0 mt-1.5 max-w-full aspect-square w-[100px]"
          />
          <div className="flex flex-col flex-1">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d127c2aee973bb6efb34c8d809f1295aa75199409bfbd4ffb293aeac6bb8a95?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b"
              alt=""
              className="object-contain self-end w-6 aspect-square"
            />
            <div className="flex gap-1.5 mt-6 text-black">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f44e00af4d7a9b2637c7bea7c3d7aad2c5fb1959e2132f27fea0a6b4f22b70f2?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b"
                alt=""
                className="object-contain shrink-0 aspect-square w-[31px]"
              />
              <div className="self-start">{points} pts</div>
            </div>
            <div className="mt-2.5 text-black text-opacity-50 max-md:mr-0.5">
              {role}
            </div>
          </div>
        </div>
        <h3 className="self-start mt-4 text-2xl text-black">{name}</h3>
      </div>
    </article>
  );
};

const PlayerStats = () => {
  const playerData = [
    {
      name: "SLOK TULSYAN",
      points: "9.5",
      role: "All-rounder",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f92befcabec579a298412cbb0f56583b9b823eb2023be4c1c8482914d4d6b4b7?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b",
    },
    {
      name: "SLOK TULSYAN",
      points: "9.5",
      role: "All-rounder",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f92befcabec579a298412cbb0f56583b9b823eb2023be4c1c8482914d4d6b4b7?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b",
    },
  ];

  return (
    <section className="flex flex-col items-start px-8 py-7 mx-auto w-full bg-white rounded-3xl shadow-[0px_8px_13px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-9 max-md:max-w-full">
      <h1 className="text-3xl font-semibold text-black">Player's statistics</h1>
      <div className="mt-4 max-w-full w-[469px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f89db069461b44ba46319e5d272da91077a7d82a47ee42beb40873e23f7dc381?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b"
              alt="Player's profile"
              className="object-contain shrink-0 max-w-full aspect-square rounded-[75px] w-[150px] max-md:mt-3.5"
            />
          </div>
          <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-black max-md:mt-6">
              <h2 className="text-4xl">SLOK TULSYAN</h2>
              <p className="mt-8 text-xl max-md:mr-1">
                Bowler Strike rate: 150 <br />
                Avg. score: 73 Points: 8.5 <br />
                %Bound.: 46 %Dot: 54
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch px-16 py-16 mt-4 text-xl text-center text-black whitespace-nowrap rounded-2xl bg-zinc-300 max-md:px-5 max-md:max-w-full">
        Description
      </div>
      <h2 className="mt-5 text-3xl font-semibold text-black">
        Recommendations
      </h2>
      <div className="self-stretch mt-8 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {playerData.map((player, index) => (
            <div
              key={index}
              className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
            >
              <PlayerCard {...player} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlayerStats;
