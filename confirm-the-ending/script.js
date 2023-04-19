function confirmEnding(str, target) {
  // convert the given string to the array.
  str = str.split("");

  // determine the number of letters to be checked
  let targetNumofLetter = target.length;
  //grab the last letters of the string with for loop for all:
  let lastLettersOfString = [];
  for (let i = 0; i < target.length; i++) {
    lastLettersOfString = str.pop() + lastLettersOfString;
  }
  // compare lastLettersOfString with target
  if (lastLettersOfString == target) {
    console.log("matches!");
    return true;
  } else {
    console.log("wont match.");
    return false;
  }

  console.log(lastLettersOfString);
}

confirmEnding("Bastian", "n");
confirmEnding("Open sesame", "sage");
confirmEnding("Abstraction", "action");
