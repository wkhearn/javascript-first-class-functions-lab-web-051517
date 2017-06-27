function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
  return (value) => multiplierValue * value
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(first, second) {
  first * second
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
