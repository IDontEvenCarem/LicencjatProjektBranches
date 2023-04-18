import { funkyTitles, textToLoremLink, fetchUrl } from "./Constants";
import { useParams } from 'react-router-dom'
import Shell from "./Shell";
import './Article.css'
import { faker } from "@faker-js/faker";
import { useEffect, useLayoutEffect, useState } from "react";
import AudioPlayer from "./widgets/audio_player/AudioPlayer";

export default function Article () {
    const params = useParams()
    const articleIdx = parseInt(params['articleId'] as string)

    const [data, setData] = useState<any>(undefined)

    useEffect(() => {
        fetch(`${fetchUrl}api/post/${params['articleId']}`)
            .then(res => res.json())
            .then(json => setData(json))
            .catch(err => console.error(err))
    }, [])

    useLayoutEffect(() => {
        requestAnimationFrame(() => {
            window.scrollTo(0, 0)
        })
    }, [])

    return (
        <Shell>
            {
                data 
                    ?<div className="ac article content">
                        <div className="article-heading">
                            <img src={textToLoremLink(data.title, 1250, 600)} width={1250} height={600}></img>
                            <div className="heading-bottom">
                                <h1 className="article-title">
                                    {data.title}
                                </h1>
                                <p className="article-stub">
                                    {faker.lorem.sentence()}
                                </p>
                            </div>
                        </div>
        
                        {data.title.codePointAt(0)! % 2 === 0 && <AudioPlayer></AudioPlayer>}
        
                        <div dangerouslySetInnerHTML={{__html: data.content}}></div>
                    </div>
                    : <h3 className="ac">Loading...</h3>
            }

            
        </Shell>
    )
}