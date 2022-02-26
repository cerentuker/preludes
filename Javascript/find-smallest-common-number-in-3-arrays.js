/**
 * 
 * Finds the smallest common number among three ordered arrays (arrays are ordered asc)
 * 
 * Runtime complexity : Linear search, O(n), memory complexity  is constant, so O(1)
 * 
 * input example: 
 * let v1 = [6, 7, 10, 25, 30, 63, 64]; 
 * let v2 = [0, 4, 5, 6, 7, 8, 50];
 * let v3 = [1, 6, 10, 14];
 * console.log("Least Common Number: " + findLeastCommonNumber(v1, v2, v3));
 * 
 * 
 * TODO make this work for n arrays
 * 
 */

const findLeastCommonNumber = function (firstArray, secondArray, thirdArray) {
  try {
    let index1 = 0
    let index2 = 0
    let index3 = 0

    while (index1 < firstArray.length && index2 < secondArray.length && index3 < thirdArray.length) {
      let firstVal = firstArray[index1]
      let secondVal = secondArray[index2]
      let thirdVal = thirdArray[index3]

      //found
      if (firstVal == secondVal && secondVal == thirdVal) {
        return firstVal
      }

      if (firstVal <= thirdVal && firstVal <= secondVal) {
        index1++
      } else if (secondVal <= firstVal && secondVal <= thirdVal) {
        index2++
      } else if (thirdVal <= firstVal && thirdVal <= secondVal) {
        index3++
      }
    }
    return -1
    
  } catch (e) {
    console.log(e)
    return -1
  }
};