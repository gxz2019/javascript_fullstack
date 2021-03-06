from typing import List
class Solution:
  def maxSunArray(self,nums:List[int]) -> int:
    
    maxNum = float("-inf")
    sum = 0
    for num in nums:
      if sum < 0:
        sum = 0
      sum += num
      maxNum = max(sum,maxNum)
    return maxNum
solution = Solution()
print(solution.maxSunArray([-2,1,-3,4,-1,2,1,-5,4]))
      

