//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let arr = new Array(n);
    let input_ar1 = readLine().split(" ").map((x) => parseInt(x));
    for (let i = 0; i < n; i++) arr[i] = input_ar1[i];
    let obj = new Solution();
    let res = obj.maxLen(arr,n);
    console.log(res);
    
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Number[]} arr
 * @param {Number} n
 * @returns {Number}
 */

class Solution {
    maxLen(arr,n){
        //code here
     const prefix = new Map();
        prefix.set(0, -1);

        let sum = 0;
        let maxLength = 0;

        for (let right = 0; right < n; right++) {
            sum += arr[right];

            if (prefix.has(sum)) {
                let left = prefix.get(sum);
                maxLength = Math.max(maxLength, right - left);
            } else {
                prefix.set(sum, right);
            }
        }

        return maxLength;
    }
}