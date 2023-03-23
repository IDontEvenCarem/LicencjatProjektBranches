import { funkyTitles, textToLoremLink } from "./Constants";
import { useParams } from 'react-router-dom'
import Shell from "./Shell";
import './Article.css'
import { faker } from "@faker-js/faker";
import { useEffect, useLayoutEffect } from "react";

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
            <div className="ac cpri article content">
                <div className="article-heading">
                    <img src={textToLoremLink(articleTitle, 1250, 600)} width={1250} height={600}></img>
                    <div className="heading-bottom">
                        <h1 className="title">
                            {articleTitle}
                        </h1>
                        <p className="stub">
                            {faker.lorem.sentence()}
                        </p>
                    </div>
                </div>

                <p>
                    {faker.lorem.sentences(10)}
                </p>
                <p>
                    {faker.lorem.sentences(10)}
                </p>
                <p>
                    {faker.lorem.sentences(10)}
                </p>
                <p>
                    {faker.lorem.sentences(10)}
                </p>
            </div>
        </Shell>
    )
}