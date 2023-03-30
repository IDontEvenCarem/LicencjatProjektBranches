import {faker} from '@faker-js/faker'
import _ from 'lodash'
import './BunchOfLorems.css'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { funkyTitles, textToLoremLink } from '../../Constants'
import NewsCard from './NewsCard'


let globLimit = 9

export default function BunchOfLorems () {
    const [limit, setLimit] = useState(globLimit);
    useEffect(() => {
        globLimit = limit
    }, [limit]);

    (window as any)['bunchOfLoremsData'] = (window as any).bunchOfLoremsData || _(funkyTitles).map((v, i) => ({v, i})).shuffle().map(v => {
        return {
            title: v.v,
            id: v.i
        }
    }).value()
    const data = (window as any as {bunchOfLoremsData: [{title: string, id: number}]}).bunchOfLoremsData

    return (
        <div className="lorem-wall-container">
            {_(data).take(limit).value().map((data, i) => (
                <NewsCard key={i} id={data.id} title={data.title}></NewsCard>
            ))}
            {
                limit < funkyTitles.length && 
                <div className='read-more ac' onClick={() => setLimit(v => v+9)}>
                    Pokaż więcej
                </div>
            }
        </div>
    )
}