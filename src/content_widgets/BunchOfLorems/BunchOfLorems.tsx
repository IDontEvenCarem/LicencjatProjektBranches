import './BunchOfLorems.css'
import {useState, useEffect} from 'react'
import { funkyTitles } from '../../Constants'
import NewsCard from './NewsCard'


let globLimit = 9
let savedResponse = undefined as {title: string, idx: number}[]|undefined

const fetchUrl = import.meta.env.PROD ? "/" : "http://localhost:8012/"; 

export default function BunchOfLorems () {
    const [limit, setLimit] = useState(globLimit);
    const [response, setResponse] = useState(savedResponse)
    
    useEffect(() => {
        globLimit = limit
    }, [limit]);

    useEffect(()=>{
        fetch(`${fetchUrl}api/postStubs?postsPerPage=9`)
            .then(res => res.json())
            .then(json => {
                savedResponse = json
                setResponse(json)
            })
            .catch(err => {
                console.error(err)
            })
    }, []);

    return (
        <div className="lorem-wall-container">
            {
                response 
                ? response.map(v => (<NewsCard key={v.idx} id={v.idx} title={v.title}></NewsCard>)) 
                : <h3>Wczytywanie...</h3>
            }
            {
                limit < funkyTitles.length && 
                <div className='read-more ac' onClick={() => setLimit(v => v+9)}>
                    Pokaż więcej
                </div>
            }
        </div>
    )
}