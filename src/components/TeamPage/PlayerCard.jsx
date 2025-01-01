import * as React from "react";

export function PlayerCard({ imageUrl, iconUrl, name, role }) {
  return (
    <div className="flex gap-5 mt-4 w-full max-md:mr-0.5">
      <img
        loading="lazy"
        src={imageUrl}
        alt={`Player ${name}`}
        className="object-contain shrink-0 max-w-full aspect-[2.05] w-[123px]"
      />
      <div className="flex gap-2 items-start my-auto">
        <img
          loading="lazy"
          src={iconUrl}
          alt=""
          className="object-contain shrink-0 self-end mt-5 aspect-[2.05] w-[41px]"
        />
        <div className="flex flex-col self-start">
          <div className="self-end text-center">{name}</div>
          <div className="self-start mt-3">{role}</div>
        </div>
      </div>
    </div>
  );
}
