let newArray = []
function mapToNegativize(sourceArray) {
  newArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i] * -1)
  }
  return newArray
}
function mapToNoChange(sourceArray) {
  return sourceArray
}

function mapToDouble(sourceArray) {
  newArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i] * 2)
  }
  return newArray
}

function mapToSquare(sourceArray) {
  newArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i] **2)
  }
  return newArray
}

function reduceToTotal(sourceArray, startingPoint) {
  let num = 0
  if (startingPoint != undefined) {
    num = startingPoint
  }

  for (let i = 0; i < sourceArray.length; i++) {
    num += sourceArray[i]
  }
  return num
}
function reduceToAllTrue(sourceArray) {
  let response
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] == false) {
      response = false
      break
    } else {
      response = true
    }
  }
  return response
}

function reduceToAnyTrue(sourceArray) {
  let ret
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] == true) {
      ret = true
      break
    } else {
      ret = false
    }
  }
  return ret
}
