import Hero from "../components/Home/Hero"
import Showcase from "../components/Home/Showcase"
import { popularMoviesData, showcaseData, trendingSeriesData } from "../data/showcasedata"


const Homepage = () => {
  return (
    <div
      id="homepage"
      className="flex flex-col"
    >
      <Hero />
      <div className="mb-16">
      <Showcase title={"You might like"} data={showcaseData} />
      <Showcase title={"Popular Movies"} data={popularMoviesData} />
      <Showcase title={"Trending Series"} data={trendingSeriesData} />
      </div>
    </div>
  )
}

export default Homepage
