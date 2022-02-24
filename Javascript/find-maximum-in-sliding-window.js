/**
 *  Given a large array of integers and a window size,
 *  finds the maximum values in each window as the window 
 *  slides through the entire array.
 *      
 *  Runtime Complexity #
 *  The runtime complexity of this solution is linear, O(n) since the array only needs to be traversed one time.
 *
 *  Memory Complexity #
 *  The memory complexity of this solution is linear, O(w), where w is the window size in this case.
 */

let findMaxSlidingWindow = function(arr, window_size) {
    var result = [];
    if (arr.length === 0 || window_size === 0 || arr.length < window_size) {
        return []
    }
      for (let i=0; i<= arr.length-window_size; i++) {
          let current_window = arr.slice(i, i+window_size)
          const max = findMaxInArr(...current_window) // Math.max(...current_window) wasn't sure if this was cheating?
          result.push(max)
      }
  
    return result;
  };
  
  function findMaxInArr(...numbers) { 
      let max = 0
      numbers.map(number => {
          if (number > max) {
              max = number
          }    
      })
  
      return max
  }