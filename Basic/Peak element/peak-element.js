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
        let n = parseInt(readLine());
        let a = new Array(n);
        let tmp = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            a[i] = input_ar1[i];
            tmp[i] = a[i];
        }
        let obj = new Solution();
        let A = obj.peakElement(tmp, n);
        let f=0;
        if(n==1)
		    f=1;
		else if(A==0 && a[0]>=a[1])
		    f=1;
		else if(A==n-1 && a[n-1]>=a[n-2])
		    f=1;
		else if(a[A] >=a[A+1] && a[A]>= a[A-1])
		    f=1;
		else
		    f=0;
		console.log(f);
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 * O indexed array- arr[] of size n 
 * peak element - if it's value >=value of its adjacent elements(if they exist)
 * 1>=2 => 1will print
 * 
 * adjacent elements - side by side
 * the output will be 1 if the index returned by your function is correct, otherwise it will be 0
 * 
 * 
 * 
*/

class Solution {
    
    peakElement(arr, n)
    {
        // code here//
        let start = 0, end = n - 1;

        while (start < end) {
            let mid = Math.floor((start + end) / 2);
            
            if ((mid === 0 || arr[mid - 1] <= arr[mid]) && (mid === n - 1 || arr[mid + 1] <= arr[mid])) {
                return mid;
            } else if (mid < n - 1 && arr[mid + 1] > arr[mid]) {
                start = mid + 1;
            } else {
                end = mid;
            }
        }
        return start;
        }
}