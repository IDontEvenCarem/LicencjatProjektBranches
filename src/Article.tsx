import { funkyTitles, textToLoremLink } from "./Constants";
import { useParams } from 'react-router-dom'
import Shell from "./Shell";
import './Article.css'
import {sentence, sentences} from './lib/LoremIpsum'
import { useEffect, useLayoutEffect } from "react";
import AudioPlayer from "./widgets/audio_player/AudioPlayer";

export default function Article () {
    const params = useParams()
    const articleIdx = parseInt(params['articleId'] as string)
    const articleTitle = funkyTitles[articleIdx]

    useLayoutEffect(() => {
        requestAnimationFrame(() => {
            window.scrollTo(0, 0)
        })
    }, [])

    return (
        <Shell>
            <div className="ac article content">
                <div className="article-heading">
                    <img src={textToLoremLink(articleTitle, 1250, 600)} width={1250} height={600}></img>
                    <div className="heading-bottom">
                        <h1 className="article-title">
                            {articleTitle}
                        </h1>
                        <p className="article-stub">
                            {sentence()}
                        </p>
                    </div>
                </div>

                {articleTitle.codePointAt(0)! % 2 === 0 && <AudioPlayer></AudioPlayer>}

                <p>
                    {sentences(30)}
                </p>
                <p>
                    {sentences(30)}
                </p>
                <p>
                    {sentences(30)}
                </p>
                <p>
                    {sentences(30)}
                </p>
            </div>
        </Shell>
    )
}