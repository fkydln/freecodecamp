// Title Case a Sentence Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case. For the purpose of this exercise, you should also capitalize connecting words like the and of.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence

function titleCase(str) {
  let arrayOfString = str.toLowerCase().split(" ");

  let upperCased = [];

  for (let i = 0; i < arrayOfString.length; i++) {
    let element = arrayOfString[i];

    upperCased.push(
      element.charAt(0).toUpperCase() + arrayOfString[i].slice(1)
    );
  }
  console.log(upperCased.join(" "));
  return upperCased.join(" ");
}

titleCase("I'm a little tea pot");
