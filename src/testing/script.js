// NOTE Constants and Variables

const formatTypes = ["0", "00", "000", "0000"];
const fileTypes = [".png", ".jpg"];
const imageStore = ["image001", "image002", "image003", "image004"];

const selectedImage = document.getElementById("image-view");
const displayImages = document.getElementById("display-images");
const prefixField = document.getElementById("input-prefix-type");
const formatField = document.getElementById("format-type");
const fileTypeField = document.getElementById("file-type");
const jpgButton = document.getElementById("jpg-file-type-btn");
const pngButton = document.getElementById("png-file-type-btn");
const imageNameOutput = document.getElementById("image-name-output");
const submit = document.getElementById("submit-download");

let prefix = "";
let format = "";
let filetype = "";

// NOTE Functionality for user to display the naming style they want to rename images.

imageNameOutput.innerText = "...";

prefixField.addEventListener("change", (e) => {
  prefix = e.target.value;
  imageNameOutput.innerText = prefix + format + filetype;
});

formatField.addEventListener("change", (e) => {
  format = e.target.value;
  imageNameOutput.innerText = prefix + format + filetype;
});

fileTypeField.addEventListener("click", (e) => {
  const hexcode = ["#ededed", "#ffffff", "#949494", "#000000"];

  filetype = e.target.value;
  imageNameOutput.innerText = prefix + format + filetype;

  if (filetype === fileTypes[0]) {
    pngButton.style.backgroundColor = hexcode[0];
    jpgButton.style.backgroundColor = hexcode[1];
    pngButton.style.color = hexcode[3];
    jpgButton.style.color = hexcode[2];
  }
  if (filetype === fileTypes[1]) {
    jpgButton.style.backgroundColor = hexcode[0];
    pngButton.style.backgroundColor = hexcode[1];
    jpgButton.style.color = hexcode[3];
    pngButton.style.color = hexcode[4];
  }
});

function submitNameChange() {
  if (prefix.length === 0 || format.length === 0 || filetype.length === 0) {
    console.log(
      "Please update the prefix, format or filetype field with the correct values!",
    );
  } else {
    console.log("Prefix:", prefix, "Format:", format, "Filetype:", filetype);
    console.log(imageNameOutput.innerText);
  }
}

// NOTE Functionality for uploading images from a users file

let image;
let numberList = 1;

document.getElementById("file-input").onchange = function (e) {
  displayImages.style.display = "block";
  var files = e.target.files;

  for (const [key, file] of Object.entries(files)) {
    if (file && file.name) {
      EXIF.getData(file, function () {
        displayImages.innerHTML += `
          <li class="image-list">
              <div class="column-width image-number"><span style="width: 100%;">${
                numberList + "."
              }</span>
              </div>
              <div style="object-fit: cover;">
                  <img src="${URL.createObjectURL(file)}" alt="${file.name}">
              </div>
              <div style="width: unset;" class="image-name">
                  <span>${file.name}</span>
              </div>
          </li>`;
        numberList++;
      });
    }
  }
};

// const files = document.getElementById("file-input").files;

//   for (const [key, value] of Object.entries(files)) {
//     console.log(`${key}: ${value.name}`);
//   }
