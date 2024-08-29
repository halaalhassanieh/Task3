import BestDeal from "../../componantes/BestDeal/BestDeal"
import Featured from "../../componantes/Featured/Featured"
import Slider from "../../componantes/Slider/Slider"
import VideoSection from "../../componantes/VideoSection/VideoSection"


const Home = () => {
  return (
    <div>
      <div>
        <Slider />
      </div>
      <div >
        <Featured />
      </div>
      <div>
        <VideoSection />
      </div>
      <div>
        <BestDeal/>
      </div>
    </div>
  )
}

export default Home
