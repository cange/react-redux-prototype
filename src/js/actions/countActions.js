export const increaseCount = (count) => {
  return {
    type: 'INC',
    count
  }
}

export const decreaseCount = (count) => {
  return {
    type: 'DEC',
    count
  }
}
