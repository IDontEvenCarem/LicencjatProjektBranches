import {faker} from '@faker-js/faker'
import _ from 'lodash'

export default function BunchOfLorems () {
    const dataToRender = _.range(20).map(v => {
        return {
            title: faker.lorem.words(5 + Math.floor(Math.random() * 15)),
            width: Math.round(Math.random()) + 1,
            height: Math.round(Math.random()) + 1
        }
    })
    return (
        <div className="lorem-wall-container">
            {dataToRender.map(data => (
                <div style={{}}>

                </div>
            ))}
        </div>
    )
}