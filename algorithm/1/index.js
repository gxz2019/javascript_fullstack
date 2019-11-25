//冒泡排序
var sortArray = function(nums) {
  let k
  for(let i = 0;i<nums.length;i++){
    for(let j = i+1; j < nums.length;j++ ){
      if(nums[i] > nums[j]) {
        // let k
        k = nums[i];
        nums[i] = nums[j];
        nums[j] = k

      }
    }

  }
  return nums
}
