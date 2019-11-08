var merge = function(nums1, m, nums2, n) {
nums1.splice(nums1.length-m,nums1.length-m)
  return nums1.concat(nums2).sort((a, b) => a - b);
   
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
