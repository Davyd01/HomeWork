

function check(arr) {
  let sum = 0
  let count = 0

  for (item of arr) {
    if (typeof item === "number") {
      sum += item
      count++
    }
  }
  return count === 0 ? 0 : sum / count

}

console.log(check([1, 2, 3, null, undefined, "string'"]))