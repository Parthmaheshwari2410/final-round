
// A2 — Closures & Lexical Scope

function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        // Check whether result already exists
        if (cache.has(key)) {
            console.log("cache hit");
            return cache.get(key);
        }

        // Calculate result
        const result = fn(...args);

        //  Store result in cache
        cache.set(key, result);

        return result;
    };
}


//Slow calculation from starter
function calcTotal(price, qty) {
    console.log("Calculating...");

    return price * qty;
}


// Wrap calcTotal with memoize
const memoizedCalcTotal = memoize(calcTotal);


// First call calculates
console.log("First:", memoizedCalcTotal(120, 3));

//Second call should use cache
console.log("Second:", memoizedCalcTotal(120, 3));

