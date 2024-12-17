import Showcase from "../components/Home/Showcase"
import Hero from "../components/SharedComponent/Hero"

const Movies = () => {
  return (
    <div
      id="movies"
      className="flex flex-col"
    >
      <Hero menuType={"Movies"} />
      <Showcase />
    </div>
  )
}

export default Movies
