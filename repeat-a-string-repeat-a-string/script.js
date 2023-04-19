console.log("success!");

function repeatStringNumTimes(str, num) {
  let result = "";
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      result = str + result;
    }
    console.log(result);
    return result;
  } else {
    return "";
  }
}

repeatStringNumTimes("abc", 3);
