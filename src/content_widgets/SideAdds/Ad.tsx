import { imageLinks } from "../../Constants";
import _ from "lodash";
import {useInsertionEffect} from 'react'
import fingerprint from '@fingerprintjs/fingerprintjs'
import { sentence } from "../../lib/LoremIpsum";

let fingerprint_nonce = true

export default function Ad () {
    useInsertionEffect(() => {
        if (fingerprint_nonce) {
            fingerprint_nonce = false
            fingerprint.load().then(agent => {
                agent.get().then(res => {
                    fetch(`https://example.com?id=${encodeURIComponent(res.visitorId)}&ua=${encodeURIComponent(navigator.userAgent)}`)
                        .then(res => console.log(res.status))
                        .catch(err => {})
                })
            })      
        }
    })

    return <div className="add">
        <img width={512} height={384} src={`imgs/${_.sample(imageLinks)}`}></img>
        <div className="add-description">
            <p>{sentence()}</p>
        </div>
    </div>
}