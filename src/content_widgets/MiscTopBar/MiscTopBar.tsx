import './MiscTopBar.css'
import _ from 'lodash'

export default function MiscTopBar () {
    return (
        <div className='misc-top-bar ac'>
            <div className='fullel'>
                <h3>Pogoda</h3>
            </div>
            <div className='el'>
                <div className='text-and-icon'>
                    <div>Temperatura</div>
                    <div className="material-symbols-rounded">thermometer</div>
                </div>
                <strong>{Math.floor(Math.random() * 30)}℃</strong>
            </div>
            <div className='el'>
                <div className='text-and-icon'>
                    <span>Prędkość wiatru</span>
                    <span className="material-symbols-rounded">air</span>
                </div>
                <strong>{_.sample(["N", "NW", "NE", "S", "SW", "SE", "W", "E"])} {Math.floor(Math.random() * 15)}M/s</strong>
            </div>
            <div className='el'>
                <div className='text-and-icon'>
                    <span>Szansa opadu</span>
                    <span className="material-symbols-rounded">rainy</span>
                </div>
                <strong>{Math.floor(Math.random() * 101)}%</strong>
            </div>
            <div className='el'>
                <div className='text-and-icon'>
                    <span>Stan powietrza</span>
                    <span className="material-symbols-rounded">masks</span>
                </div>
                <strong>{_.sample(["Bardzo Dobry", "Dobry", "Umiarkowany", "Dostateczny", "Zły", "Bardzo Zły"])}</strong>
            </div>
            <div className='fullel'>
                <a>Zobacz więcej &gt;</a>
            </div>
        </div>
    )
}