import TopNewsCarousel from './content_widgets/TopNewsCarousel/TopNewsCarousel'
import './Content.css'
import WeatherTopBar from './content_widgets/WeatherTopBar/WeatherTopBar'
import BunchOfLorems from './content_widgets/BunchOfLorems/BunchOfLorems'

function Content () {
    return (
        <div className="content ac">
            <WeatherTopBar></WeatherTopBar>
            <TopNewsCarousel></TopNewsCarousel>
            <BunchOfLorems></BunchOfLorems>
        </div>
    )
}

export default Content