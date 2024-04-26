//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.binarysearch(arr, n, k);
        console.log(res);
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
 * 1. array is already sorted with size n
 * 2. and an integer K, finnd the position (0-based indexing)
 * 3. at which K is present in the array using binary search
*/

class Solution {
    binarysearch(arr, n, k) {
        // code here
        let start = 0, end = n-1, mid;
        
        let result = -1;
        
        while(start<=end) {
            mid = Math.floor((start+end)/2);
            if(arr[mid]===k){
                return mid;
            }
            else if(arr[mid]<k) {
                start = mid + 1;
            }
            else {
                end = mid-1;
            }
        }
        return -1;
    }
}
