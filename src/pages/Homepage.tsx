import Categories from "../components/Home/Categories";
import Hero from "../components/Home/Hero";
import Showcase from "../components/Home/Showcase";
import GlobalSearch from "../components/layout/GlobalSearch";
import {
  popularMoviesData,
  showcaseData,
  trendingSeriesData,
} from "../data/showcaseData";

const Homepage = () => {
  return (
    <div id="homepage" className="flex flex-col">
      <GlobalSearch />
      <Hero />
      <Categories />
      <div className="mb-16">
        <Showcase title={"You might like"} data={showcaseData} hasArrow={false} isClickable={false} />
        <Showcase title={"Popular Movies"} data={popularMoviesData} hasArrow={true} isClickable={true} />
        <Showcase title={"Trending Series"} data={trendingSeriesData} hasArrow={true} isClickable={true} />
      </div>
    </div>
  );
};

export default Homepage;
