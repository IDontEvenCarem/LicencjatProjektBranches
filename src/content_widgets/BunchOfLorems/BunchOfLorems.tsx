import {faker} from '@faker-js/faker'
import _ from 'lodash'
import './BunchOfLorems.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import { funkyTitles } from '../../Constants'



export default function BunchOfLorems () {
    const [limit, setLimit] = useState(9);
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
                <Link to={`/article/${data.id}`} key={i} className='lorem-card hoversec ac'>
                    <img src={`https://picsum.photos/seed/${data.title.split('').reduce((prev, curr) => curr.charCodeAt(0) + prev, 0)}/450/300?`}></img>
                    <div className='title'>{data.title}</div>
                </Link>
            ))}
            {
                limit < funkyTitles.length && 
                <div className='read-more hoversec ac' onClick={() => setLimit(v => v+9)}>
                    Pokaż więcej
                </div>
            }
        </div>
    )
}