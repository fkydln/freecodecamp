// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong

function getIndexToIns(arr, num) {
  // add num to the array.
  arr.push(num);
  // Sort altogether
  arr.sort((a, b) => a - b);
  console.log("sorted " + arr);

  // find the index of the num
  console.log(arr.indexOf(num));
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);
