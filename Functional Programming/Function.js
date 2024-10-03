// 1. Implement a function that composes multiple functions together. Use it to apply a series of transformations to an input value.
//2. Create a curried function that takes a string returns a function to match it against a list of strings.

// Function to compose multiple functions
function compose(...fns) {
    return (value) => {
      return fns.reduceRight((acc, fn) => fn(acc), value);
    };
  }
  
  // Example functions
  const double = (x) => x * 2;
  const square = (x) => x * x;
  const increment = (x) => x + 1;
  
  // Using compose to apply transformations in sequence
  const composedFunction = compose(increment, square, double);
  
  const result = composedFunction(5);  // First doubles, then squares, then increments
  console.log(result); // ((5 * 2) ** 2) + 1 = 101

  
  // Curried function to match a string against a list of strings
const matchString = (searchString) => (listOfStrings) => {
    return listOfStrings.filter((str) => str.includes(searchString));
  };
  
  // Using the curried function
  const matchAgainstList = matchString('cat');
  
  const strings = ['dog', 'catalog', 'caterpillar', 'car', 'bat'];
  const matchedStrings = matchAgainstList(strings); // ['catalog', 'caterpillar']
  
  console.log(matchedStrings);
  