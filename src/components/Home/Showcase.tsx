import { FaStar, FaStarHalf } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";
import { transitionEffect } from "../../styles/GlobalStyles";
import { IoChevronForward } from "react-icons/io5";

interface Props {
  title: string;
  data: {
    title: string;
    rating: string;
    genre: string;
    duration: string;
    imageCover: string;
  }[];
  hasArrow: boolean;
  isClickable: boolean;
}

const Showcase = ({ title, data, hasArrow, isClickable }: Props) => {
  const  handleShowcase = () => {
    console.log("Show all Movies or Series")
  }
  const handleDetails = () => {
    console.log("View Movie/Series Details");
  };
  const handleDownloadLinks = () => {
    console.log("Download Links");
  };
  return (
    <div className="flex flex-col items-start w-full lg:mt-16 sm:mt-20 mt-10">
      <button disabled={!isClickable} onClick={() => handleShowcase ()} className={`flex justify-center items-center gap-3 ${isClickable && `hover:gap-5 hover:text-primary/70 active:text-primary dark:hover:text-white/70 dark:active:text-white`} ${transitionEffect}`}>
        <p className="sm:text-[1.7rem] sm:font-semibold font-medium">{title}</p>
        {hasArrow && <IoChevronForward className="sm:text-[25px]"/>}
      </button>
      <div className="sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex w-full 2xl:gap-9 xl:gap-6 md:gap-4 sm:gap-6 gap-3 sm:pt-10 pt-5 z-30 overflow-x-auto">
        {data?.map((data, index) => {
          return (
            <div
              key={index}
              className="w-full sm:max-w-full min-w-[150px] sm:h-[389px] h-[230px]  z-30 relative group overflow-hidden cursor-pointer"
            >
              <div className="opacity-0 flex flex-col justify-end items-start absolute w-full h-full bg-gradient-to-t group-hover:opacity-100 group-hover:translate-y-0 translate-y-full transition-all duration-500 ease from-black from-20% to-transparent rounded-[2rem] p-6">
                <p className="font-semibold text-xl">{data?.title}</p>
                <div className="flex justify-center items-center gap-[6px] mb-5 mt-1 text-secondary">
                  <div className="flex gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </div>
                  <p className="font-semibold leading-none mt-[2px]">
                    {data?.rating}
                  </p>
                </div>
                <div className="flex justify-between w-full text-white/70">
                  <p>{data?.genre}</p>
                  <p>{data?.duration}</p>
                </div>
                <div className="flex w-full h-11 gap-3 mt-4">
                  <button
                    onClick={() => handleDetails()}
                    className={`flex justify-center items-center w-full h-full rounded-full border border-white active:border-white/70 active:text-white/70 hover:border-secondary text-white hover:text-secondary ${transitionEffect}`}
                  >
                    <p className="text-sm">View Details</p>
                  </button>
                  <button
                    onClick={() => handleDownloadLinks()}
                    className={`flex justify-center items-center w-full max-w-11 h-11 rounded-full bg-white/10 border border-transparent hover:border-secondary hover:bg-transparent text-white hover:text-secondary ${transitionEffect}`}
                  >
                    <LiaDownloadSolid size={21} />
                  </button>
                </div>
              </div>
              <img
                src={data?.imageCover}
                alt="image-cover"
                className="w-full h-full object-cover bg-no-repeat xl:rounded-[2rem] sm:rounded-3xl rounded-2xl"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Showcase;
