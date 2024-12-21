import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { movieCategoriesData } from "../../data/movieData";
import { transitionEffect } from "../../styles/GlobalStyles";
import React from "react";
import { Tabs } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
interface Props {
  menuType: string;
}

const Hero = ({ menuType }: Props) => {
  const [activeTab, setActiveTab] = React.useState<number>(1);

  const onTabClick = (_: React.BaseSyntheticEvent, index: number) => {
    setActiveTab(index);
  };

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <div id="movies" className="flex flex-col items-start w-full mt-20 gap-5">
      <p className="text-2xl mt-10 font-medium tracking-wide">{menuType || <Skeleton count={1}/>}</p>
      <div className="w-full">
        <Tabs
          activeTab={activeTab}
          onTabClick={onTabClick}
          leftBtnIcon={
            <button
              className={`flex justify-center items-center p-3 text-white hover:text-secondary`}
            >
              <IoChevronBackOutline size={18} />
            </button>
          }
          rightBtnIcon={
            <button
              className={`flex justify-center items-center p-3 text-white hover:text-secondary`}
            >
              <IoChevronForwardOutline size={18} />
            </button>
          }
        >
          {movieCategoriesData?.map((data, index) => (
            <button
              key={index}
              className={`w-full whitespace-nowrap shadow-sm backdrop-blur-sm hover:bg-transparent hover:text-secondary hover:border-secondary ${transitionEffect}`}
            >
              {data.label}
            </button>
          ))}
        </Tabs>
      </div>
    </div>
    </SkeletonTheme>
  );
};

export default Hero;
