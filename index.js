function difMaxMin(array) {
  /* kodlar buraya */
  let max = array[0];
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max - min;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = difMaxMin;
