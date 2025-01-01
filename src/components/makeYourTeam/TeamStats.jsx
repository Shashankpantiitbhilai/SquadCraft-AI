import React from "react";

function TeamInfo({ name, shortName, flagSrc }) {
  return (
    <div className="flex flex-col flex-1 self-start">
      <div className="flex gap-3 text-2xl font-bold text-center whitespace-nowrap">
        <img
          loading="lazy"
          src={flagSrc}
          alt={`${name} flag`}
          className="object-contain shrink-0 w-16 rounded-full aspect-[0.98]"
        />
        <div className="my-auto">{shortName}</div>
      </div>
      <div className="mt-3.5 text-lg max-md:mr-1.5">{name}</div>
    </div>
  );
}

function PlayerCard({ name, role, avatarSrc, iconSrc }) {
  return (
    <div className="flex gap-2.5 mt-4 first:mt-0">
      <img
        loading="lazy"
        src={avatarSrc}
        alt={`${name}'s avatar`}
        className="object-contain shrink-0 aspect-square w-[60px]"
      />
      <div className="flex flex-col my-auto">
        <div className="text-center">{name}</div>
        <div className="flex gap-1 self-start mt-3 whitespace-nowrap">
          <img
            loading="lazy"
            src={iconSrc}
            alt=""
            className="object-contain shrink-0 w-5 aspect-square"
          />
          <div>{role}</div>
        </div>
      </div>
    </div>
  );
}

function PlayerList({ teamName, players, flagSrc }) {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-black max-md:mt-10">
        <div className="flex flex-col pb-2.5 rounded-xl bg-zinc-300 bg-opacity-50">
          <div className="flex relative flex-col px-14 pt-2.5 pb-6 text-2xl text-center rounded-xl aspect-[4.444] max-md:px-5">
            <img
              loading="lazy"
              src={flagSrc}
              alt={`${teamName} flag background`}
              className="object-cover absolute inset-0 size-full"
            />
            {teamName}
          </div>
          <div className="flex flex-col pr-6 pl-3 mt-1.5 w-full text-base max-md:pr-5">
            {players.map((player, index) => (
              <PlayerCard key={index} {...player} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MatchDetails() {
  const teams = [
    {
      name: "South Africa",
      shortName: "SA",
      flagSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dedfe0d85c5bdbf4c66c02592f37d6693e560cce1ecb582be279adc64f41eccc?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b",
    },
    {
      name: "India",
      shortName: "IND",
      flagSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/89f3486fc728f73b6c8e6c2c1e2e38b80ca55aaba02ccce207fc5bc866f9d79a?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b",
    },
  ];

  const players = [
    {
      name: "SLOK TULSYAN",
      role: "Bowler",
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a60df8e7c84b4a688b42cb123d02ade1ad96545870199e0b42c53c33c79286dc?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b904618949d7344adcbd8b463ab6c196be4e1a4fde23a732dd8bcda709bf9fdf?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b",
    },
    {
      name: "SLOK TULSYAN",
      role: "Bowler",
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a60df8e7c84b4a688b42cb123d02ade1ad96545870199e0b42c53c33c79286dc?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b904618949d7344adcbd8b463ab6c196be4e1a4fde23a732dd8bcda709bf9fdf?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b",
    },
    {
      name: "SLOK TULSYAN",
      role: "Bowler",
      avatarSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a60df8e7c84b4a688b42cb123d02ade1ad96545870199e0b42c53c33c79286dc?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b904618949d7344adcbd8b463ab6c196be4e1a4fde23a732dd8bcda709bf9fdf?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b",
    },
  ];

  return (
    <main className="flex flex-col items-start px-8 py-9 w-full bg-white rounded-3xl shadow-[0px_8px_13px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
      <section className="flex gap-10 max-w-full text-black w-[300px]">
        {teams.map((team, index) => (
          <TeamInfo key={index} {...team} />
        ))}
      </section>
      <section className="mt-11 text-2xl text-black max-md:mt-10">
        Venue : <span className="font-bold">Wankhede stadium, Mumbai</span>
      </section>
      <section className="mt-5 text-2xl text-black">
        Time : <span className="font-bold">7:50 pm</span>
      </section>
      <h2 className="mt-12 text-3xl font-semibold text-black max-md:mt-10">
        Remaining players
      </h2>
      <section className="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <PlayerList
            teamName="South Africa"
            players={players}
            flagSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/9892d2c8b8a24009b8e9512b8e2f9796ba40fc074ade7940dad82d9ad88fc348?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b"
          />
          <PlayerList
            teamName="India"
            players={players}
            flagSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/486ddf6280e943de518b3971c9b7e67fce4b09218651c17ff948bbd34fdddfee?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b"
          />
        </div>
      </section>
    </main>
  );
}

export default MatchDetails;
