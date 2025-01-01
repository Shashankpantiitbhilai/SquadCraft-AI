import React from "react";

const PlayerImage = ({ src, className }) => (
  <img
    loading="lazy"
    src={src}
    alt="Player"
    className={`object-contain aspect-square rounded-[50px] w-[100px] ${className}`}
  />
);

const PlayerColumn = ({ players, className }) => (
  <div className={`flex flex-col ${className}`}>
    {players.map((player, index) => (
      <PlayerImage key={index} src={player.src} className={player.className} />
    ))}
  </div>
);
const PredictedTeam = () => {
  const topPlayers = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/35a0db52ca3f03f158a310eb79edd71c070f7a32a1aa02e15e8c8be85d5ea275?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b",
      className: "mt-36 max-md:mt-10",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/35a0db52ca3f03f158a310eb79edd71c070f7a32a1aa02e15e8c8be85d5ea275?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b",
      className: "",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe96ac29d136034c4f25e75b5a4feccc100c72bb0ffe00ae7d04d8cfd65b1ac5?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b",
      className: "mt-11 shadow-lg max-md:mt-10",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/35a0db52ca3f03f158a310eb79edd71c070f7a32a1aa02e15e8c8be85d5ea275?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b",
      className: "mt-36 max-md:mt-10",
    },
  ];

  const bottomLeftPlayers = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/35a0db52ca3f03f158a310eb79edd71c070f7a32a1aa02e15e8c8be85d5ea275?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b",
      className: "self-end",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/35a0db52ca3f03f158a310eb79edd71c070f7a32a1aa02e15e8c8be85d5ea275?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b",
      className: "mt-11 max-md:mt-10",
    },
  ];

  const bottomCenterPlayers = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/35a0db52ca3f03f158a310eb79edd71c070f7a32a1aa02e15e8c8be85d5ea275?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b",
      className: "self-center",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/35a0db52ca3f03f158a310eb79edd71c070f7a32a1aa02e15e8c8be85d5ea275?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b",
      className: "",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/35a0db52ca3f03f158a310eb79edd71c070f7a32a1aa02e15e8c8be85d5ea275?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b",
      className: "",
    },
  ];

  const bottomRightPlayers = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/35a0db52ca3f03f158a310eb79edd71c070f7a32a1aa02e15e8c8be85d5ea275?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b",
      className: "",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/35a0db52ca3f03f158a310eb79edd71c070f7a32a1aa02e15e8c8be85d5ea275?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b",
      className: "mt-11 ml-3.5 max-md:mt-10 max-md:ml-2.5",
    },
  ];
  return (
    <section className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
      <h2 className="z-10 self-center -mt-1.5 text-3xl font-semibold text-center text-black">
        Predicted XI <span className="">(by our model)</span>
      </h2>
      <div className="flex flex-col px-9 pt-5 pb-9 mt-6 w-full rounded-3xl max-md:px-5 max-md:max-w-full">
        <div className="self-center max-w-full w-[483px]">
          <div className="flex gap-5 max-md:flex-col">
            <PlayerColumn
              players={[topPlayers[0]]}
              className="w-[33%] max-md:ml-0 max-md:w-full"
            />
            <PlayerColumn
              players={[topPlayers[1], topPlayers[2]]}
              className="ml-5 w-[33%] max-md:ml-0 max-md:w-full"
            />
            <PlayerColumn
              players={[topPlayers[3]]}
              className="ml-5 w-[33%] max-md:ml-0 max-md:w-full"
            />
          </div>
        </div>
        <div className="mt-10 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[77%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-3.5 max-md:mt-7">
                <PlayerColumn players={bottomLeftPlayers} />
                <div className="flex flex-col">
                  <PlayerImage
                    src={bottomCenterPlayers[0].src}
                    className={bottomCenterPlayers[0].className}
                  />
                  <div className="flex gap-5 justify-between mt-12 max-md:mt-10">
                    <PlayerImage
                      src={bottomCenterPlayers[1].src}
                      className={bottomCenterPlayers[1].className}
                    />
                    <PlayerImage
                      src={bottomCenterPlayers[2].src}
                      className={bottomCenterPlayers[2].className}
                    />
                  </div>
                </div>
              </div>
            </div>
            <PlayerColumn
              players={bottomRightPlayers}
              className="ml-5 w-[23%] max-md:ml-0 max-md:w-full"
            />
          </div>
        </div>
      </div>
      <button className="self-end px-9 pt-2.5 pb-5 mt-6 text-sm font-bold text-center text-white whitespace-nowrap bg-black rounded-lg max-md:px-5 max-md:mr-1.5">
        Edit
      </button>
    </section>
  );
};

export default PredictedTeam;
