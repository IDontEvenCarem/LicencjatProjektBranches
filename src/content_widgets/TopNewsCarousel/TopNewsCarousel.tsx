import Carousel from 'react-bootstrap/Carousel'
import './TopNewsCarousel.css'
import {funkyTitles, textToLoremLink} from '../../Constants'
import { sentences } from '../../lib/LoremIpsum';

export default function TopNewsCarousel () {
    const news = funkyTitles.slice(0, 3);

    return (
        <div className='top-news-carousel ac'> 
            <Carousel>
                {news.map(newstext => (
                    <Carousel.Item>
                        <div className='top-news-img-wrapper'>
                            <img className='top-news-img' src={textToLoremLink(newstext, 1000, 400)} width={1000} height={400}></img>
                            <div className='top-news-darken'></div>
                        </div>
                        <Carousel.Caption className='top-news-description'>
                            <h2>{newstext}</h2>
                            <p>{sentences()}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}
