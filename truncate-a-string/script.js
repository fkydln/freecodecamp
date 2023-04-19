// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string

function truncateString(str, num) {
  let result = [];
  console.log(num);
  for (let i = 0; i < num; i++) {
    result.push(str.charAt(i));
  }
  console.log(result.join("") + "...");

  if (str.length == num || str.length < num) {
    return result.join("");
  } else {
    return result.join("") + "...";
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length
);
