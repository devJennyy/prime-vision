import { directors, topCast } from "../../data/castData";

const TopCasts = () => {
  return (
    <div className="flex flex-col items-start text-left gap-5 sm:mb-28 mb-20 border-t-2 border-silverAsh/10 tracking-wide">
      <p className="text-2xl font-medium mt-10 sm:mb-3 mb-2">Top Cast</p>
      <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-4 w-full lg:gap-0 sm:gap-10 gap-5">
        {topCast?.cast?.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-between items-center w-full h-fit sm:gap-5 gap-2"
            >
              <div className="sm:w-20 sm:h-20 w-16 h-16 rounded-full bg-white"></div>
              <div className="text-center capitalize">
                <p className="sm:text-[16px] text-sm">{data?.actor?.split(" ")[0]}</p>
                <p className="font-extralight sm:text-sm text-[12px]">
                  {data?.role?.split(" ")[0]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-2xl font-medium sm:mt-10 mt-8 sm:mb-3 mb-2">Directors</p>
      <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-4 w-full lg:gap-0 sm:gap-10 gap-5">
        {directors?.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-between items-center w-full h-fit sm:gap-5 gap-2"
            >
              <div className="sm:w-20 sm:h-20 w-16 h-16 rounded-full bg-white"></div>
              <div className="sm:text-[16px] text-sm text-center capitalize">
                <p>{data?.name?.split(" ")[0]}</p>
                <p>{data?.name?.split(" ").slice(-1)[0]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCasts;
