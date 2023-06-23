const isTrue = true
const isFalse = false

console.log(isTrue && isTrue)
console.log(isTrue && isFalse)
console.log(isFalse && isTrue)
console.log(isFalse && isFalse)
console.log(isTrue || isTrue)
console.log(isTrue || isFalse)
console.log(isFalse || isTrue)
console.log(isFalse || isFalse)
console.log(!isFalse)
console.log(!isTrue)
console.log(!(isFalse && isTrue))
