//{ Driver Code Starts
//Initial Template for javascript

//Initial Template for javascript

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
        let input1 = readLine().split(' ').map(x=>parseInt(x));
        let intervals = new Array(n);
        for(let i = 0;i < 2*n;i+=2)
        {
            intervals[i/2] = [input1[i],input1[i+1]];
        }
        let obj = new Solution();
        let res = obj.overlappedInterval(intervals);
        let s = "";
        for(let i=0; i<res.length; i++)
        {
            for(let j=0; j<res[i].length; j++)
            {
                s += res[i][j] +" ";
            }
        }
        console.log(s);
    
    }
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[][]} Intervals
 * @returns {number[][]}
*/

class Solution {
    //Function to Merge overlapping intervals.
    overlappedInterval(Intervals)
    {
        //your code here
    Intervals.sort(function(a,b) {
        return a[0] - b[0]
    });

    let ans = [];
    let start = Intervals[0][0], end = Intervals[0][1];

    for(let i=1; i<Intervals.length; i++) {
        if(Intervals[i][0] <= end) {
            end = Math.max(end, Intervals[i][1]);
        }
        else {
            ans.push([start, end]);
            start = Intervals[i][0];
            end = Intervals[i][1];
        }
    }
    ans.push([start, end]);
    return ans;
    }
}



