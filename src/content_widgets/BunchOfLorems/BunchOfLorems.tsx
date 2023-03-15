import {faker} from '@faker-js/faker'
import _ from 'lodash'
import './BunchOfLorems.css'
import {useState} from 'react'

// I generate those with ChatGPT
const funkyTitles = [
    "Odkryto nową planetę pełną masła orzechowego",
    "Naukowcy twierdzą, że raki zaczynają tańczyć na księżycu",
    "Wszyscy ludzie na świecie nagle przestają śnić",
    "Króliki zaczynają gryźć ludzi na ulicach miasta",
    "Ryby w oceanie zaczynają mówić po angielsku",
    "Najnowsze badania wykazują, że krowy są w stanie latać",
    "Eksperci twierdzą, że łabędzie są w rzeczywistości kosmitami",
    "Szokujące odkrycie: drzewa zaczynają chodzić",
    "Wymyśliliśmy maszynę, która zamienia ziemniaki w diamenty",
    "Ogromna inwazja bananów na miasto - mieszkańcy w panice",
    "Odkryto nową planetę, na której woda smakuje jak Coca-Cola",
    "Pies uczy się języka angielskiego i zaczyna nauczać właściciela",
    "Badania wykazują, że jedzenie pizzy może pomóc w nauce matematyki",
    "Lew ucieka z zoo i zaczyna pracować jako ochroniarz w sklepie spożywczym",
    "Naukowcy odkryli sposoby na przyspieszenie wzrostu roślin za pomocą muzyki metalowej",
    "Mężczyzna wygrywa milion dolarów w loterii i przekazuje całą sumę na cele charytatywne - okazuje się, że to był jego kot, który kupił losy",
    "Krowa zaczyna chodzić na tylnych łapach i występuje w tańcu z gwiazdami",
    "Badania wykazują, że posiadanie kota może zwiększać inteligencję",
    "Światło z telewizora pomaga zwalczać bezsenność",
    "Nowy trend w modzie - ubrania zrobione z przeterminowanych produktów spożywczych",
    "Naukowcy zbudowali maszynę, która przekształca wodę w czekoladę",
    "Koty wymyśliły system opieki zdrowotnej dla ludzi",
    "Mężczyzna zjada 100 pączków w ciągu godziny i zostaje nowym mistrzem świata w tej dyscyplinie",
    "Gorączka piłkarska wśród mrówek - zorganizowano pierwsze mistrzostwa w kopaniu kawałka cukru",
    "Naukowcy odkryli, że gęsty warkocz pomaga w ładowaniu baterii",
    "Pies zaczyna udzielać lekcji jogi i zostaje nowym guru tego stylu życia",
    "Badania wykazują, że oglądanie filmów z dinozaurami może zwiększyć poziom szczęścia",
    "Delfin zostaje mianowany nowym dyrektorem zoo i wprowadza szereg nowych zmian w funkcjonowaniu placówki",
    "Księżyc zmienia kolor na fioletowy - naukowcy zaskoczeni tym zjawiskiem",
    "Najnowsze badania wykazują, że jedzenie popcornu pod prysznicem może znacznie poprawić samopoczucie",
]

export default function BunchOfLorems () {
    const [limit, setLimit] = useState(9)
    const [dataToRender,] = useState(
        _(funkyTitles).shuffle().map(v => {
            return {
                title: v
            }
        }).value()
    )

    return (
        <div className="lorem-wall-container">
            {_(dataToRender).take(limit).value().map((data, i) => (
                <div key={i} className='lorem-card ac'>
                    <img src={`https://picsum.photos/seed/${data.title.split('').reduce((prev, curr) => curr.charCodeAt(0) + prev, 0)}/300/200?`}></img>
                    <div className='title'>{data.title}</div>
                </div>
            ))}
            {
                limit < funkyTitles.length && 
                <div className='read-more ac' onClick={() => setLimit(v => v+9)}>
                    Pokaż więcej
                </div>
            }
            
        </div>
    )
}