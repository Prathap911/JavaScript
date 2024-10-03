//1. Analyze a given piece of code for performance issues. Refactor it to improve efficiency. (e.g. memorization)
//2. Benchmark the original and refactored versions to see the performance difference,



// Original Fibonacci
function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Memoized Fibonacci
  function memoizedFibonacci() {
    let cache = {};
    return function fib(n) {
      if (n in cache) {
        return cache[n];
      } else {
        if (n <= 1) {
          return n;
        }
        let result = fib(n - 1) + fib(n - 2);
        cache[n] = result;
        return result;
      }
    };
  }
  
  const fibonacciMemo = memoizedFibonacci();
  
  // Benchmark Original Fibonacci
  console.time('Original Fibonacci (40)');
  fibonacci(40);
  console.timeEnd('Original Fibonacci (40)');
  
  // Benchmark Memoized Fibonacci
  console.time('Memoized Fibonacci (40)');
  fibonacciMemo(40);
  console.timeEnd('Memoized Fibonacci (40)');
  

//Original Fibonacci (40): 5123.45ms
//Memoized Fibonacci (40): 0.052ms
