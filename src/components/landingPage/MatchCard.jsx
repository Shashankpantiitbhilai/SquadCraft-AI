import * as React from "react";
import { useDispatch } from "react-redux";
import { setTeam1, setTeam2,setDate } from "../../redux/slices/matchSlice";
import { useNavigate } from "react-router-dom";

export default function MatchCard({ teamA, teamB,date, timeLeft, matchImage }) {
  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleImageClick = () => {
    console.log(date)
    dispath(setTeam1(teamA));
    dispath(setTeam2(teamB));
    dispath(setDate(date))
    navigate("/team-page");
  };

  return (
    <article className="flex flex-col grow pt-4 max-md:mt-10">
      <div className="flex flex-col px-px pb-6 w-full bg-white rounded-3xl shadow-[5px_5px_10px_rgba(0,0,0,0.25)]">
        <img
          loading="lazy"
          src={matchImage}
          alt={"Match Preview"}
          className="object-contain z-10 mt-0 w-full rounded-3xl aspect-[2.44]"
          onClick={handleImageClick}
        />
        <div className="flex gap-5 justify-between self-center mt-3 max-w-full w-[294px]">
          <div className="flex flex-col text-black">
            <div className="flex gap-1.5 text-base font-bold text-center whitespace-nowrap">
             
              {/* <div className="my-auto">{teamA.code}</div> */}
            </div>
            <div className="self-start mt-2.5 text-xs">{teamA}</div>
          </div>
          <div className="flex flex-col self-start mt-2 text-xs text-center">
            <div className="text-black text-opacity-50">MatchDate</div>
           <div>
             {date}
            </div>
          </div>
          <div className="flex flex-col text-black whitespace-nowrap">
            <div className="flex gap-2 text-base font-bold text-center">
              {/* <div className="my-auto">{teamB.code}</div> */}
             
            </div>
            <div className="self-end mt-2.5 text-xs text-right max-md:mr-1.5">
              {teamB}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
