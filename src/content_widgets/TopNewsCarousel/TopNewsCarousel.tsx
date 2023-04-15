import './TopNewsCarousel.css'
import {funkyTitles, textToLoremLink} from '../../Constants'
import { sentences } from '../../lib/LoremIpsum';
import Carousel from 'bootstrap/js/src/carousel'
import './BootstrapFragment.scss'
import "bootstrap/js/src/util"
import { useEffect, useRef } from 'react';

export default function TopNewsCarousel () {
    const news = funkyTitles.slice(0, 3);
    const caroref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        Carousel.getOrCreateInstance(caroref.current)
    }, [])

    return (
        <div className='top-news-carousel ac'> 
            <div ref={caroref} id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    {news.map((newstext, i) => (
                        <div key={i} className={i === 0 ? "carousel-item active" : "carousel-item"}>
                            <div className='top-news-img-wrapper'>
                                <img className='top-news-img' src={textToLoremLink(newstext, 1000, 400)} width={1000} height={400}></img>
                                <div className='top-news-darken'></div>
                            </div>
                            <div className="carousel-caption d-none d-md-block top-news-description">
                                <h2>{newstext}</h2>
                                <p>{sentences()}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    {/* <span className="sr-only">Previous</span> */}
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    {/* <span className="sr-only">Next</span> */}
                </a>
            </div>
        </div>
    )
}
