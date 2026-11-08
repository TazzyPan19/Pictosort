// TODO Add a interate for the amount of images the user uploads and spitout the value into string pairs

const imageStore = [
  "image001",
  "image002",
  "image003",
  "image004",
  "image001",
  "image002",
  "image003",
  "image004",
  "image001",
  "image002",
  "image003",
  "image004",
];
const formatTypes = ["0", "00", "000", "0000"];
const debugTest = 30;

function countImages(array, max, min) {
  let num = 0;

  for (let i = 0; i < debugTest; i++) {
    if (num >= max && num <= max) {
      throw new Error("Incorrect format used for current operation!");
    }
    num++;
  }
  return num;
}

function getFormat(input) {
  switch (input) {
    case formatTypes[0]:
      console.log(`000${countImages(imageStore, 9)}`);
      break;
    case formatTypes[1]:
      console.log(`00${countImages(imageStore, 99)}`);
      break;
    case formatTypes[2]:
      console.log(`0${countImages(imageStore, 999)}`);
      break;
    case formatTypes[3]:
      console.log(`${countImages(imageStore, 9999)}`);
      break;
    default:
      console.log("No vaild input");
      break;
  }
}

try {
  getFormat("0000");
  getFormat("000");
  getFormat("00");
  getFormat("0");
} catch {
  console.log("A unit has failed!");
}
