import './AudioPlayer.css'
import { useState, useEffect, useRef } from 'react'
import {Howl} from 'howler'
import {fromS} from 'hh-mm-ss'

import Polygondwanaland from '../../assets/Polygondwanaland.mp4'
import { catchPhrase } from '../../lib/CompanyBs'

export default function AudioPlayer () {
    const [playing, setPlaying] = useState(false)
    const [title, _] = useState(catchPhrase())
    const [howl, setHowl] = useState<Howl|undefined>(undefined)
    const bar = useRef<HTMLDivElement>(null)
    const timeText = useRef<HTMLDivElement>(null)

    function togglePlayback() {
        if (howl) {
            if (playing) {
                howl.pause()
            } else {
                howl.play()
            }
        } else {
            const lhowl = new Howl({
                src: Polygondwanaland,
                onload() {
                    lhowl.play()
                },
                onend() {
                    setPlaying(false)
                }
            })
            setHowl(lhowl)
        }
        setPlaying(!playing)
    }

    useEffect((() => {
        var req: number
        return () => {
            cancelAnimationFrame(req)
            req = requestAnimationFrame(refreshPlayhead)
            function refreshPlayhead () {
                if (howl && playing) {
                    const curr = howl.seek() || 0
                    const total = howl.duration()
                    const part = curr / total
                    if(bar.current) {
                        bar.current.style.setProperty('width', `${100*part}%`)
                    }
                    if (timeText.current) {
                        timeText.current.innerText = `${fromS(Math.round(curr))}/${fromS(Math.round(total))}`
                    }
                }
                req = requestAnimationFrame(refreshPlayhead)
            }
    
            return () => {
                if (howl) {
                    howl.stop()
                }
                cancelAnimationFrame(req)
            }
        }
    })(), [playing])

    return (
        <div className="audio-player">
            <div className='audio-player-play-button' onClick={togglePlayback}>
                {!playing 
                    ?   <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="23" fill="#ffffff" stroke="#000000" stroke-width="2"/>
                            <polygon points="20,15 35,25 20,35" fill="#000000"/>
                        </svg>
                    :   <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="23" fill="#ffffff" stroke="#000000" stroke-width="2"/>
                            <rect x="16" y="15" width="8" height="20" fill="#000000"/>
                            <rect x="26" y="15" width="8" height="20" fill="#000000"/>
                        </svg>
                }
            </div>
            <div className='audio-player-top'>
                {title}
                <div ref={timeText} className='audio-player-right'>00/00</div>
            </div>
            <div className='audio-player-bottom'>
                <div className='audio-player-bar'>
                    <div ref={bar} className='audio-player-bar-filler'></div>
                    <div className='audio-player-bar-circle'></div>
                </div>
            </div>
        </div>
    )
}