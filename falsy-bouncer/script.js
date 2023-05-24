// Falsy Bouncer Remove all falsy values from an array. Return a new array; do not mutate the original array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. Hint: Try converting each value to a Boolean.

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer

function bouncer(arr) {
  let resultArr = [...arr];
  console.log("stock: " + resultArr);

  for (let index = resultArr.length - 1; index >= 0; index--) {
    const element = arr[index];
    console.log("Here's the current element " + element);

    if (!element) {
      console.log("to be removed " + element);
      resultArr.splice(index, 1);
    }
  }
  console.log("result: " + resultArr);

  console.log(resultArr);

  return resultArr;
}

bouncer([7, "ate", "", false, 9]);

// function bouncer(arr) {
//   let resultArr = [...arr];
//   console.log(resultArr);

//   for (let i = resultArr.length - 1; i >= 0; i--) {
//     const element = resultArr[i];
//     console.log("Here's the current element " + element);
//     if (!element) {
//       console.log("to be removed " + element);
//       resultArr.splice(i, 1);
//     }
//   }

//   console.log(resultArr);
//   return resultArr;
// }

// bouncer([7, "ate", "", false, 9]);
