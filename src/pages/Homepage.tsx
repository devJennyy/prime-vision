import Hero from "../components/Home/Hero"
import Showcase from "../components/Home/Showcase"


const Homepage = () => {
  return (
    <div
      id="homepage"
      className="flex flex-col"
    >
      <Hero />
      <Showcase />
    </div>
  )
}

export default Homepage
