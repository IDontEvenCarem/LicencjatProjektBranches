import Carousel from 'react-bootstrap/Carousel'
import './TopNewsCarousel.css'

export default function TopNewsCarousel () {
    return (
        <div className='top-news-carousel ac'> 
            <Carousel>
                <Carousel.Item>
                    <div style={{minHeight: '200px'}}></div>
                    <Carousel.Caption>
                        <h3>Element A</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum libero fuga reiciendis nemo hic pariatur dolores sunt voluptate natus, consequatur quam repellendus consequuntur fugiat delectus, perspiciatis molestias. Illum, cum harum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{minHeight: '200px'}}></div>
                    <Carousel.Caption>
                        <h3>Element B</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ex, doloribus molestias a commodi non nobis dolorum nihil amet at est facilis adipisci maiores explicabo voluptatem tenetur assumenda, vel aut!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{minHeight: '200px'}}></div>
                    <Carousel.Caption>
                        <h3>Element C</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi pariatur veritatis aliquam temporibus asperiores. Ipsam voluptatem dicta et pariatur distinctio earum explicabo rem eligendi repellendus praesentium dolor quaerat, facilis magni!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
