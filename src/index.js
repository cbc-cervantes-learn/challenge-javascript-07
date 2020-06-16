/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

const hammingDistance = (a, b) => {
  let distance = 0;
  if (a.length === b.length){
    let length = a.length - 1;
    while(length >= 0){
      if (a[length] !== b[length]){
        distance++;
      }
     length--;
    }
  }else{
    throw new Error("Strings must have the same length")
  }
  return distance;
}
  module.exports = hammingDistance;
