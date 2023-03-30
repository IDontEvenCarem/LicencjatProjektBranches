import './PlaybackWidget.css'
import { useState, useEffect, useRef } from "react"

export default function PlaybackWidget () {
    const [closed, setClosed] = useState(true)
    const videoRef = useRef(null)

    useEffect(() => {
        const sideAd = document.querySelector('.side-add')

        document.addEventListener('click', function clickDocument(){
            document.removeEventListener('click', clickDocument);
            (videoRef.current as any).play()
        })

        if (sideAd) {
            setClosed(false)
        }
    }, [])

    if (closed) return <></>

    const space = document.querySelector(".side-add")?.getBoundingClientRect().width || 180

    return (
        <div className="playback-widget ac c-a" style={{width: `${space-5}px`}}>
            <div className='top-bar'>
                <strong>Wiosna się zaczyna!</strong>
                <span onClick={() => setClosed(true)} className={"material-symbols-rounded close-button"}>close</span>
            </div>
            <video ref={videoRef} controls width="960" height="540" autoPlay loop>
                <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm"></source>
                <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4"></source>
                Download the
                <a href="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm">WEBM</a>
                or
                <a href="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4">MP4</a>
                video.
            </video>
        </div>
    )
}