// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    return(array.slice(0,2))
}

const returnLastTwoDrivers = (array) => array.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (integer) {
    return x => x*integer
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (array, selectorFunction) {
    const result = selectorFunction(array)
    return result
}
