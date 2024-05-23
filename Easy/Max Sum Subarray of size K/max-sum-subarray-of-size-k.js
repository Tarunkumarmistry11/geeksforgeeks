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

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let [N, K] = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let Arr = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    let res = obj.maximumSumSubarray(K, Arr, N);
    console.log(res);
  }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} K
 * @param {number[]} Arr
 * @param {number} N
 * @return {number}
 */
class Solution {
  maximumSumSubarray(K, Arr, N) {
    //code here
    let currentSum=0, ansSum = 0;
    
    for(let i=0; i<K; i++) {
        currentSum += Arr[i];
    }
    ansSum = currentSum;
    
    for(let i=K; i<N; i++) {
        currentSum = currentSum + Arr[i] - Arr[i-K];
        if(currentSum >ansSum) {
            ansSum = currentSum;
        }
    }
    return ansSum;
  }
}
