// Check if a value is classified as a boolean primitive. Return true or false. Boolean primitives are true and false.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who

function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  } else {
    return false;
  }
}

booWho(null);
