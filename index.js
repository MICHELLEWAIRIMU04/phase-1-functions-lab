
const HQ_STREET = 42
const FEET_PER_BLOCK = 264


function distanceFromHqInBlocks(43) {
  return Math.abs(street - HQ_STREET);
}


function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * FEET_PER_BLOCK;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * FEET_PER_BLOCK;
}


function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0
  }
  else if (distance > 400 && distance <= 2000) {
    return ((distance - 400) * 0.02).toFixed(2)
  }
  else if (distance > 2000 && distance <= 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}
