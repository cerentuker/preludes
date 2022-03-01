
/**
 * 
 * Given a sorted array of integers, returns the low and high index of the given key. Returns -1 if the indexes are not found.
 * 
*/

// naive 
let findLowIndex = function (arr, key) {
    for (let i = 0; i <= arr.length; i++) {
        if (key == arr[i]) {
            return i;
        }
    }
    return -1;
};

let findHighIndex = function (arr, key) {
    let startIndex = findLowIndex(arr, key)
    if ((arr.length - 1) == startIndex) {
        return startIndex;
    }
    for (let i = startIndex + 1; i < arr.length; i++) {
        if (key !== arr[i]) {
            return i - 1;
        }
    }
    return -1;
};

// binary search