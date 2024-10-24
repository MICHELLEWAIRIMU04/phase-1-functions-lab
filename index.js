function distanceFromHqInBlocks(someValue) {
  if (someValue >= 42) {
    return someValue - 42
  } else {
    return 42 - someValue
  }
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, destination) {
  if (start >= destination) {
    return (start - destination) * 264
  } else {
    return (destination - start) * 264
  }
}

function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination)


  if (distanceInFeet <= 400) {
    return 0
  }

  if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02
  }

  if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25
  }

  if (distanceInFeet > 2500) {
    return 'cannot travel that far'
  }
}

