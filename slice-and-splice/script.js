// Slice and Splice You are given two arrays and an index. Copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice

// Optional solution below:
// function frankenSplice(arr1, arr2, n) {
//   let resultingArr = [...arr2];

//   // injection
//   resultingArr.splice(n, 0, ...arr1);
//   console.log(arr2);
//   return resultingArr;
// }
// frankenSplice([1, 2, 3], [4, 5, 6], 1);

function frankenSplice(arr1, arr2, n) {
  let resultingArr = arr2.slice();

  // injection
  resultingArr.splice(n, 0, ...arr1);
  console.log(arr2);
  return resultingArr;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);
