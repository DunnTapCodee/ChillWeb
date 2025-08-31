const a = [4, 2, 4, 2, 1];
const nums = [-1, -4, 5, 6, -9, -5, 2];
const a1 = [3, 2, 1, 1, 1];
const a2 = [4, 3, 2];
const a3 = [1, 1, 4, 1];
function Single(a) {
    let sing = a[0]
    for (let i = 1; i < a.length; i++) {
        sing = sing ^ a[i];
    }
    return sing;
}

function Maximum_Subarray(nums) {
    let cur_max = nums[0];
    let max_end = nums[0];
    for (let i = 1; i < nums.length; i++) {
        cur_max = Math.max(nums[i], nums[i] + cur_max);
        max_end = Math.max(cur_max, max_end);
    }
    return max_end;
}

function Left_Rotation(nums, k) {
    k = k % nums.length;
    while (k--) {
        nums.push(nums[0]);
        nums.shift();
    }
    return nums;
}

function makeStack(arr) {
    let res = new Array(); let sum = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        sum += arr[i];
        res.push(sum);
    }
    return res;
}
function Equal_Stacks(a1, a2, a3) {
    let h1 = makeStack(a1);
    let h2 = makeStack(a2);
    let h3 = makeStack(a3);

    while (h1.length && h2.length && h3.length) {
        let l1 = h1.length - 1;
        let l2 = h2.length - 1;
        let l3 = h3.length - 1;
        if (h1[l1] == h2[l2] && h1[l1] == h3[l3]) {
            return h1[l1];
        }
        if (h1[l1] >= h2[l2] && h1[l1] >= h3[l3]) h1.pop();
        else
            if (h2[l2] >= h1[l1] && h2[l2] >= h3[l3]) h2.pop();
            else
                if (h3[l3] >= h2[l2] && h3[l3] >= h1[l1]) h3.pop()
    }
}



console.log("Single non-repeating element in an array (LeetCode 136) ", Single(a));

console.log("Maximum Subarray (LeetCode 53): ", Maximum_Subarray(nums));

console.log("Left Rotation: ", Left_Rotation(nums, 2));

console.log("Equal Stacks: ", Equal_Stacks(a1, a2, a3));
