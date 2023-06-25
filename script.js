const array0 = [10, 3, 1]
const array1 = [3, 2, 10, 6]

function intersect(arr1, arr2) {
    return arr1.filter(i => arr2.includes(i))
}

console.log(intersect(array0, array1))