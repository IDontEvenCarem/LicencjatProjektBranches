import _ from "lodash"

export function arrayElement<T>(arr: T[]) {
    return _.sample(arr)
}

export function arrayElements<T>(arr: T[], num: number) {
    return _.sampleSize(arr, num)
}