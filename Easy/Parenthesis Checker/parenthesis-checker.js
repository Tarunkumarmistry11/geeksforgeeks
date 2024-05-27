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
        let str = readLine();
        let obj = new Solution();
        if(obj.ispar(str)){
            console.log("balanced");
        }
        else{
            console.log("not balanced");
        }
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} x
 * @returns {boolean}
*/

class Solution
{
    //Function to check if brackets are balanced or not.
    ispar(x)
    {
        //your code here
        const stack = [];
        const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of x) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== brackets[char]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
    }
}