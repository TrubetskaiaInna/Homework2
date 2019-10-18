function countWater (arr) {
  let resultLeft = 0
  let resultRight = 0
  let indexMaxElement = arr.indexOf(Math.max.apply(null, arr))
  let localMax = arr[0]
  for (let i = 1; i < indexMaxElement; i++) {
    if (localMax < arr[i]) {
      localMax = arr[i]
    } else {
      resultLeft += (localMax - arr[i])
    }
  }
  localMax = arr[arr.length - 1]
  for (let i = arr.length - 2; i > indexMaxElement; i--) {
    if (localMax < arr[i]) {
      localMax = arr[i]
    } else {
      resultRight += (localMax - arr[i])
    }
  }
  return (resultLeft + resultRight)
}

let someArr = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]
let volume = countWater(someArr)
console.log('Volume:', volume)
