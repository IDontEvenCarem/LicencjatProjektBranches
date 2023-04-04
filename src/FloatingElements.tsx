import './FloatingElements.css'
import PlaybackWidget from './widgets/playback_widget/PlaybackWidget'

export default function FloatingElements () {
    return (
        <div className="floating-elements-wrapper">
            <div className='bottom-right ac'>
                <PlaybackWidget></PlaybackWidget>
            </div>
        </div>
    )
}