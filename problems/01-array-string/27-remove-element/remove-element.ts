/**
 * Submission: https://leetcode.com/problems/remove-element/submissions/1498191217
 */

function removeElement(nums: number[], val: number): number {

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }

  return nums.length;
};
