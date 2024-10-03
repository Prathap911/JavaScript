//1. Use reduce to implment your own version of map and filter
//2. Create a functon that takes an array of objects and group them by a specific property using reduce.


// Implementing filter with reduce.

const array=[1,-20,30,-10,70,-50,60];

const PositiveArray= array
    .filter((num)=> num>0)
    .reduce((acc,cur)=> acc+cur,0);

console.log(PositiveArray);

// Implementing map with reduce:

function mapWithReduce(arr, callback) {
    return arr.reduce((accumulator, currentValue, index, array) => {
      // Apply the callback to each element and push the result to the accumulator
      accumulator.push(callback(currentValue, index, array));
      return accumulator;
    }, []);
  }
  
  // Usage example
  const numbers = [1, 2, 3, 4];
  const doubled = mapWithReduce(numbers, (num) => num * 2);
  console.log(doubled); // Output: [2, 4, 6, 8]

  
  // Implementing filter with reduce
  function filterWithReduce(arr, callback) {
    return arr.reduce((accumulator, currentValue, index, array) => {
      // If the callback returns true, add the current element to the accumulator
      if (callback(currentValue, index, array)) {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []);
  }
  
  // Usage example
  const numbers2 = [1, 2, 3, 4, 5];
  const evenNumbers = filterWithReduce(numbers2, (num) => num % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4]

  
  //Grouping Objects by a Property Using reduce

  function groupBy(arr, property) {
    return arr.reduce((accumulator, currentValue) => {
      // Get the value of the property to group by
      const key = currentValue[property];
  
      // If the key doesn't exist in the accumulator, create an empty array for it
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
  
      // Push the current object to the array associated with this key
      accumulator[key].push(currentValue);
  
      return accumulator;
    }, {});
  }
  
  // Usage example
  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 30 },
    { name: "Edward", age: 35 }
  ];
  
  const groupedByAge = groupBy(people, "age");
  console.log(groupedByAge);
  
  /* Output:
  {
    25: [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 25 }
    ],
    30: [
      { name: "Charlie", age: 30 },
      { name: "David", age: 30 }
    ],
    35: [
      { name: "Edward", age: 35 }
    ]
  }
  */
  