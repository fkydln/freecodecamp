// Description Below:
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
// URL below:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey

function chunkArrayInGroups(arr, size) {
  let transArr = [];
  while (arr.length > 0) {
    transArr.push(arr.splice(0, size));
  }

  return transArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// function chunkArrayInGroups(arr, size) {
//   //   console.log(Math.floor(arr.length / size));
//   let resultArr = [];
//   let transArr = [];
//   for (let index = 0; index < Math.floor(arr.length / size); index++) {
//     const element = arr[index];
//     transArr = arr.slice(0, size);
//     arr.splice(0, transArr.length);
//     console.log(transArr);
//     resultArr.push(transArr);
//     console.log(arr);
//   }

//   console.log(resultArr);
//   console.log("left " + arr);
//   console.log(transArr);
//   console.log(resultArr);

//   return arr;
// }

chunkArrayInGroups(["a", "b", "c", "d"], 2);
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
