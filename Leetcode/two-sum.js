/**
 * Leetcode - Two Sum 
 * https://leetcode.com/problems/two-sum/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * Runtime: 80 ms, faster than 86.32% of JavaScript online submissions for Two Sum.
 * Memory Usage: 42.6 MB, less than 39.14% of JavaScript online submissions for Two Sum.
 */
 var twoSum = function(nums, target) {
    let candidates = {}
    
    for (let i = 0; i < nums.length; i++) {
    const flipKey = target - nums[i];

    if (flipKey in candidates) {
      return [candidates[flipKey], i];
    }

    candidates[nums[i]] = i;
  }
    
    return result   
};