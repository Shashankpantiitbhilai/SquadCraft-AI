import React from "react";

const playerPositions = [
  { top: "mt-36", left: "ml-0" },
  { top: "mt-0", left: "ml-5" },
  { top: "mt-11", left: "ml-5" },
  { top: "mt-36", left: "ml-5" },
  { top: "mt-0", left: "ml-0" },
  { top: "mt-11", left: "ml-0" },
  { top: "mt-0", left: "ml-0" },
  { top: "mt-12", left: "ml-0" },
  { top: "mt-12", left: "ml-5" },
  { top: "mt-0", left: "ml-0" },
  { top: "mt-11", left: "ml-3.5" },
];

function PlayerImage({ src, className }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt="Player"
      className={`object-contain shrink-0 max-w-full aspect-square rounded-[50px] w-[100px] ${className}`}
    />
  );
}

function EditButton() {
  return (
    <button className="self-end px-9 pt-2.5 pb-5 mt-6 text-sm font-bold text-center text-white whitespace-nowrap bg-black rounded-lg max-md:px-5 max-md:mr-1.5">
      Edit
    </button>
  );
}

function PredictedXI() {
  return (
    <section className="flex flex-col grow max-md:mt-7 max-md:max-w-full">
      <h2 className="z-10 self-center -mt-1.5 text-3xl font-semibold text-center text-black">
        Predicted XI <span className="">(by our model)</span>
      </h2>
      <div className="flex flex-col px-9 pt-5 pb-9 mt-6 w-full rounded-3xl max-md:px-5 max-md:max-w-full">
        <div className="self-center max-w-full w-[483px]">
          <div className="flex gap-5 max-md:flex-col">
            {[0, 1, 3].map((index) => (
              <div
                key={index}
                className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
              >
                <PlayerImage
                  src={`https://cdn.builder.io/api/v1/image/assets/TEMP/35a0db52ca3f03f158a310eb79edd71c070f7a32a1aa02e15e8c8be85d5ea275?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b${
                    index + 1
                  }`}
                  className={`${playerPositions[index].top} ${playerPositions[index].left}`}
                />
                {index === 1 && (
                  <PlayerImage
                    src={`https://cdn.builder.io/api/v1/image/assets/TEMP/35a0db52ca3f03f158a310eb79edd71c070f7a32a1aa02e15e8c8be85d5ea275?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b${
                      index + 2
                    }`}
                    className={playerPositions[2].top}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[77%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-3.5 max-md:mt-7">
                <div className="flex flex-col">
                  {[4, 5].map((index) => (
                    <PlayerImage
                      key={index}
                      src={`https://cdn.builder.io/api/v1/image/assets/TEMP/35a0db52ca3f03f158a310eb79edd71c070f7a32a1aa02e15e8c8be85d5ea275?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b${
                        index + 1
                      }`}
                      className={playerPositions[index].top}
                    />
                  ))}
                </div>
                <div className="flex flex-col">
                  <PlayerImage
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/35a0db52ca3f03f158a310eb79edd71c070f7a32a1aa02e15e8c8be85d5ea275?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b7"
                    className={playerPositions[6].top}
                  />
                  <div className="flex gap-5 justify-between mt-12 max-md:mt-10">
                    {[7, 8].map((index) => (
                      <PlayerImage
                        key={index}
                        src={`https://cdn.builder.io/api/v1/image/assets/TEMP/35a0db52ca3f03f158a310eb79edd71c070f7a32a1aa02e15e8c8be85d5ea275?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b${
                          index + 1
                        }`}
                        className={playerPositions[index].left}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start max-md:mt-8">
                {[9, 10].map((index) => (
                  <PlayerImage
                    key={index}
                    src={`https://cdn.builder.io/api/v1/image/assets/TEMP/35a0db52ca3f03f158a310eb79edd71c070f7a32a1aa02e15e8c8be85d5ea275?placeholderIfAbsent=true&apiKey=5cb64624e01144ebb9760bce2475869b${
                      index + 1
                    }`}
                    className={`${playerPositions[index].top} ${playerPositions[index].left}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditButton />
    </section>
  );
}

export default PredictedXI;
