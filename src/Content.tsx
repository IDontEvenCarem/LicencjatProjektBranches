import TopNewsCarousel from './content_widgets/TopNewsCarousel/TopNewsCarousel'
import './Content.css'
import MiscTopBar from './content_widgets/MiscTopBar/MiscTopBar'

function Content () {
    return (
        <div className="content ac">
            <MiscTopBar></MiscTopBar>
            <TopNewsCarousel></TopNewsCarousel>
        </div>
    )
}

export default Content