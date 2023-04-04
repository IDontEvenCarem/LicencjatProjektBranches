import { faker } from "@faker-js/faker";
import { imageLinks } from "../../Constants";
import _ from "lodash";

export default function Ad () {
    

    return <div className="add">
        <img width={512} height={384} src={`imgs/${_.sample(imageLinks)}`}></img>
        <div className="add-description c-a">
            <p>{faker.lorem.sentence()}</p>
        </div>
    </div>
}