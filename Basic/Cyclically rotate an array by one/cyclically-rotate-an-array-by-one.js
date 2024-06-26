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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.rotate(arr, n);
        printList(res,res.length);
        
    }
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript



/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
*/

class Solution{
    rotate(arr,n){
        //code here
        let last_element = arr[n-1];
        
        for(let i = n-1; i>0; i--) {
            arr[i] = arr[i-1];
        }
        arr[0] = last_element;
        return arr;
    }

}
