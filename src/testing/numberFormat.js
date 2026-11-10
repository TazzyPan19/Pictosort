function numberformat(value, target) {
  if (target > 4 || target < 0) {
    return "Exceeded or under target range!";
  }
  const format = "0000";

  for (let i = 0; i <= target; i++) {
    let result = format.slice(0, i) + value;

    if (result.length === target) {
      return result;
    } else if (result.length > target) {
      return "Value has exceeded the required target!";
    }
  }
}

// console.log(numberformat(9, 1));

const imageName = "redmonkey.png";

console.log(imageName.split(".")[0]);
