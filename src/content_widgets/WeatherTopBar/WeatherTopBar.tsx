import './WeatherTopBar.css'
import _ from 'lodash'
import { useEffect, useState } from 'react'

enum LoadedState {
    NOT_LOADED,
    LOADED,
    ERROR
};

let globalState = {} as any 

export default function WeatherTopBar () {
    const [loadingState, setLoadingState] = useState(LoadedState.NOT_LOADED)
    const [data, setData] = useState(globalState) 

    useEffect(() => {
        if (navigator.geolocation) {
            if (Object.entries(globalState).length === 0) {
                navigator.geolocation.getCurrentPosition(position => {
                    const locationQS = `latitude=${position.coords.latitude.toFixed(2)}&longitude=${position.coords.longitude.toFixed(2)}`
                    const settingsQS = `current_weather=true&timezone=auto&forecast_days=1&daily=precipitation_probability_mean`
                    fetch(`https://api.open-meteo.com/v1/forecast?${locationQS}&${settingsQS}`)
                        .then(response => response.json())
                        .then(json => {
                            globalState = json
                            setData(json)
                            setLoadingState(LoadedState.LOADED)
                        })
                        .catch(err => {
                            setLoadingState(LoadedState.ERROR)
                        })
                })
            } else {
                setData(globalState)
                setLoadingState(LoadedState.LOADED)
            }
        } else {
            setLoadingState(LoadedState.ERROR)
        }
    }, [])

    // made by chatgpt
    function azimuthToLetter(azimuth : number) {
        let directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];
        let index = Math.round(azimuth / 45);
        return directions[index];
    }
      

    return (
        <div className='weather-bar ac'>
            <div className='fullel'>
                <h3>Pogoda</h3>
            </div>
            {loadingState === LoadedState.LOADED && (<>
                <div className='el'>
                    <div className='text-and-icon'>
                        <div>Temperatura</div>
                        <div className="material-symbols-rounded">thermometer</div>
                    </div>
                    <strong>{data.current_weather.temperature}℃</strong>
                </div>
                <div className='el'>
                    <div className='text-and-icon'>
                        <span>Prędkość wiatru</span>
                        <span className="material-symbols-rounded">air</span>
                    </div>
                    <strong>{azimuthToLetter(data.current_weather.winddirection)} {data.current_weather.windspeed}M/s</strong>
                </div>
                <div className='el'>
                    <div className='text-and-icon'>
                        <span>Szansa opadu</span>
                        <span className="material-symbols-rounded">rainy</span>
                    </div>
                    <strong>{data.daily.precipitation_probability_mean[0]}%</strong>
                </div>
            </>)}

            {loadingState === LoadedState.ERROR && (<>
                <div className='fullel'>
                    <span>Nie udało się wczytać danych pogodowych</span>
                </div>
            </>)}

            <div className='fullel read-more'>
                <a>Zobacz więcej &gt;</a>
            </div>
        </div>
    )
}