/**
 * 
 * Search for a given number in a sorted array that has been rotated by some arbitrary number.
 * Both the runtime & memory complexity of this solution is logarithmic, O(log n).
 * 
 * An example to a rotated array is [4,5,6,1,2,3]
 * 
 */
let binarySearch = (arr, key, f, l) => {
    try {
      let midIndex = Math.floor((l + f) / 2)
      let midVal = arr[midIndex]
      let lastVal = arr[l]
      let firstVal = arr[f]
      
      //found
      if (midVal == key) {
        return midIndex
      }
      //not found
      if (arr.length == 1) {
        return -1
      }
  
      if (firstVal <= midVal) { //first half ordered
        if (key >= firstVal && key <= midVal) {
          return binarySearch(arr, key, f, midIndex) // must be in first half
        } else {
          return binarySearch(arr, key, midIndex +1, l)// must be in second half
        }
      } else { //second half ordered
        if (key >= midVal && key <= lastVal) {
          return binarySearch(arr, key, midIndex + 1, l) // must be in second half
        } else {
          return binarySearch(arr, key, f, midIndex) // must be in first half
        }
      }
    } catch (e) {
      console.log(e)
    }
  }
  
  let binarySearchRotated = function (arr, key) {
    result = binarySearch(arr, key, 0, arr.length - 1)
    return result
  };
  