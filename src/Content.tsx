import TopNewsCarousel from './content_widgets/TopNewsCarousel/TopNewsCarousel'
import './Content.css'
import MiscTopBar from './content_widgets/MiscTopBar/MiscTopBar'
import BunchOfLorems from './content_widgets/BunchOfLorems/BunchOfLorems'

function Content () {
    return (
        <div className="content ac">
            <MiscTopBar></MiscTopBar>
            <TopNewsCarousel></TopNewsCarousel>
            <BunchOfLorems></BunchOfLorems>
        </div>
    )
}

export default Content