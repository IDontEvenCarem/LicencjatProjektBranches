import { faker, CompanyModule } from '@faker-js/faker'
import './AudioPlayer.css'

export default function AudioPlayer () {
    return (
        <div className="audio-player">
            <div className='audio-player-background'>
                <div className='audio-player-play-button'></div>
                <div className='audio-player-center'>
                    {faker.company.catchPhrase()}
                </div>
                <div className='audio-player-stats'></div>
            </div>
        </div>
    )
}