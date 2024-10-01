// 1. Write a function that creates a counter using closures. It should hava methods to increment, decrement and reset the counter.
//2. Extend the counter to maintain a history of values and allow retrival of the last n values.

function createCounter() {
    let count = 0; // Initial counter value
    let history = []; // History to track the changes in counter
  
    return {
      increment: function() {
        count += 1;
        history.push(count); // Store the current count in history
        return count;
      },
      decrement: function() {
        count -= 1;
        history.push(count); // Store the current count in history
        return count;
      },
      reset: function() {
        count = 0;
        history.push(count); // Store the reset count in history
        return count;
      },
      getValue: function() {
        return count;
      },
      getHistory: function() {
        return history; // Return full history of counter values
      },
      getLastNValues: function(n) {
        return history.slice(-n); // Return the last 'n' values from history
      }
    };
  }
  
  // Usage
  const counter = createCounter();
  
  counter.increment();  // 1
  counter.increment();  // 2
  counter.decrement();  // 1
  counter.increment();  // 2
  counter.reset();      // 0
  
  console.log('Current Value:', counter.getValue()); // 0
  console.log('History:', counter.getHistory());     // [1, 2, 1, 2, 0]
  console.log('Last 3 Values:', counter.getLastNValues(3)); // [1, 2, 0]
  