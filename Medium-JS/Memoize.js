// problem - Memoize
// Platform - Leetcode 
// Difficulty - Medium
// Link - https://leetcode.com/problems/memoize/?envType=study-plan-v2&envId=30-days-of-javascript



function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = (args.join(','))
        if (key in cache){
            return cache[key]
        }
        let result = fn(...args)
        cache[key]=result
        return result;
    };
}
