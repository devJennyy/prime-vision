import { directors, topCast } from "../../data/castData";

const TopCasts = () => {
  return (
    <div className="flex flex-col items-start text-left gap-5 mb-36 border-t-2 border-silverAsh/10 tracking-wide">
      <p className="text-2xl font-medium mt-10 mb-4">Top Cast</p>
      <div className="grid grid-cols-7 w-full">
        {topCast?.cast?.map((data, index) => {
          return (
            <div key={index} className="flex flex-col justify-between items-center w-full h-[145px]">
              <div className="w-20 h-20 rounded-full bg-white"></div>
              <div className="text-center capitalize">
                <p>{data?.actor}</p>
                <p className="font-extralight text-sm">{data?.role}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-2xl font-medium mt-16 mb-4">Directors</p>
      <div className="grid grid-cols-7 w-full">
        {directors?.map((data, index) => {
          return (
            <div key={index} className="flex flex-col justify-between items-center w-full h-[145px]">
              <div className="w-20 h-20 rounded-full bg-white"></div>
              <div className="text-center capitalize">
                <p>{data?.name}</p>
                <p className="font-extralight text-sm">{data?.knownFor}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCasts;
