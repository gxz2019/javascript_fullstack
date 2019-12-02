const threeSum = function(nums) {
  if (!nums || 3 > nums.length) return [];

  nums.sort((a, b) => a - b);

  const res = [];

  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;

    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        while (nums[l] == nums[l + 1]) l++;
        while (nums[r] == nums[r - 1]) r--;
        l++;
        r--;
      }
    }
  }

  return res;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]))