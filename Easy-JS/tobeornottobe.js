/*
Problem - To be or not to be
platfrm - Leetcode
Difficulty - Easy
Link - https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript
*/



var expect = function(val) {
    return {
        toBe: function(ov){
            if (val === ov) {return true}
            else throw new Error("Not Equal")
        },

        notToBe: function(ov){
            if (val !== ov) return true;
            else throw new Error("Equal");
        }
    };
};
