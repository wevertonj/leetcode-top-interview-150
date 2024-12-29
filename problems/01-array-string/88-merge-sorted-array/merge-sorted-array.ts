/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (n > 0) {
        for (let i = 0; i < m + n; i++) {
            if (i >= m) {
                nums1[i] = nums2[i - m];
            }
        }
    }

    nums1.sort((a, b) => a - b);
};
