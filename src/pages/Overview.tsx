import Details from "../components/Overview/Details";
import Hero from "../components/Overview/Hero";
import TopCasts from "../components/Overview/TopCasts";

const Overview = () => {
  return (
    <div id="overview" className="flex flex-col">
      <Hero />
      <Details />
      <TopCasts/>
    </div>
  );
};

export default Overview;
