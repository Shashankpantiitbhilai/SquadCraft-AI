import * as React from "react";

export function TeamHeader({ flagUrl, countryName, abbreviation }) {
  return (
    <div className="flex flex-1 gap-10 self-start">
      <div className="flex flex-col text-lg">
        <img
          loading="lazy"
          src={flagUrl}
          alt={`${countryName} flag`}
          className="object-contain rounded-full aspect-[2.03] w-[132px]"
        />
        <div className="self-center mt-3.5">{countryName}</div>
      </div>
      <div className="self-start mt-5 text-2xl font-bold text-center">
        {abbreviation}
      </div>
    </div>
  );
}
