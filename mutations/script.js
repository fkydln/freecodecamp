// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations

function mutation(arr) {
  let firstArr = arr[0].toLowerCase().split("");
  let secondArr = arr[1].toLowerCase().split("");

  function arrComparison(firstArr, secondArr) {
    return secondArr.every((element) => firstArr.includes(element));
  }

  console.log(arrComparison(firstArr, secondArr));
  return arrComparison(firstArr, secondArr);
}

// mutation(["hello", "hey"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
// console.log(
//   "element1: " +
//     element1 +
//     "index at: " +
//     index +
//     " First: " +
//     firstKeyword[index] +
//     " versus: " +
//     secondKeyword[index]
// );

// for (let index = 0; index < firstKeyword.length; index++) {
//   const element1 = firstKeyword[index];
//   for (let index = 0; index < secondKeyword.length; index++) {
//     const element2 = secondKeyword[index];
//   }
// }
