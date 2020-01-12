/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let slow=0;  //快慢指针
    for(let fast = 0;fast<nums.length;fast++) {
      if(nums[slow] !== nums[fast]) {
        slow++;
        nums[slow] = nums[fast]
      }
    }
    return ++slow,nums
};
