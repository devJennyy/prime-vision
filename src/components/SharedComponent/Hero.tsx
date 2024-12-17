import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { movieCategoriesData } from "../../data/movieData";
import { transitionEffect } from "../../styles/GlobalStyles";

interface Props {
  menuType: string;
}

const Hero = ({menuType} : Props) => {
  return (
    <div id="movies" className="flex flex-col items-start w-full mt-20 gap-5">
      <p className="text-2xl mt-10 font-medium tracking-wide">{menuType}</p>
      <div className="flex justify-center items-center w-full gap-4 h-14">
        <button
          className={`flex justify-center items-center p-[10px] bg-nightFall border border-lightSlate/50 rounded-full hover:scale-105 hover:border-secondary hover:text-secondary hover:bg-transparent active:bg-nightFall active:border-lightSlate/50 active:text-white ${transitionEffect}`}
        >
          <IoChevronBackOutline size={18} />
        </button>
        <div className="flex items-center gap-3 overflow-hidden w-full">
          {movieCategoriesData?.map((data, index) => (
            <button
              key={index}
              className={`w-full text-white whitespace-nowrap text-sm py-2 px-5 bg-nightFall rounded-full shadow-sm backdrop-blur-sm border-silverAsh/10 border hover:bg-transparent hover:text-secondary hover:border-secondary ${transitionEffect}`}
            >
              {data.label}
            </button>
          ))}
        </div>
        <button
          className={`flex justify-center items-center p-[10px] bg-nightFall border border-lightSlate/50 rounded-full hover:scale-105 hover:border-secondary hover:text-secondary hover:bg-transparent active:bg-nightFall active:border-lightSlate/50 active:text-white ${transitionEffect}`}
        >
          <IoChevronForwardOutline size={18} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
