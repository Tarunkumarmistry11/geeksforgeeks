//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
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
    for(;i<t;i++)
    {
        let N,X;
        N = parseInt(readLine());
        let arr = readLine().split(' ').map(x=>parseInt(x));
        X = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.search(arr, N, X));
    }
}


// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} X
 * @return {number}
 * let say intArr
 * let AnotherArr
 * task is to find if the element in array is present or not 
 * if not return -1
 * size=N
 * x = is the input returns the index of firt occurrence.
 * if x does not exit return -1
 */
class Solution {
    search(arr, N, X) {
        // write your code here
        for(let i=0; i<N; i++) {
            if(arr[i] === X) {
                return i;
            }
        }
        return -1;
    }
}