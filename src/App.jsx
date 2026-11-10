import { useState } from "react";

import "./App.css";
import EXIF from "exif-js";

import ImageItem from "./componenets/ImageItem";

function App() {
  const [prefix, setPrefix] = useState("");
  const [format, setFormat] = useState("");
  const [fileType, setFileType] = useState("");
  const [numListing, setNumListing] = useState(null);
  const [namePreview, setNamePreview] = useState("");
  const [isImagesUploaded, setIsImagesUploaded] = useState(false);
  const [imageList, setImageList] = useState([]);

  const updatePreview = () => {
    setNamePreview(prefix + format);
  };

  const handleFormat = (e) => {
    setFormat(e.target.value);
  };

  const handlePrefix = (e) => {
    setPrefix(e.target.value);
  };

  const getImageFileData = (e) => {
    const files = e.target.files;

    let inter = 1;

    for (const [key, file] of Object.entries(files)) {
      if (file && file.name) {
        EXIF.getData(file, function () {
          if (key === "0") {
            setFileType(getImageExtType(file.name));
          }

          const numbering = numberFormat(inter, format.length);
          inter += 1;

          setImageList((prev) => [
            ...prev,
            {
              fileData: file,
              imgName: file.name,
              newImgName: prefix + numbering + "." + getImageExtType(file.name),
            },
          ]);
        });
      }
    }
  };

  const displayImages = () => {
    return isImagesUploaded ? (
      imageList.map((item, index) => (
        <ImageItem
          key={index}
          numID={index}
          imgsrc={item.fileData}
          imgname={item.imgName}
          newimgname={item.newImgName}
        />
      ))
    ) : (
      <li className="px-4 my-10 text-center">No Images Preview Yet</li>
    );
  };

  function numberFormat(value, target) {
    console.log(target);
    if (target > 4 || target < 0) {
      return "Exceeded or under target range!";
    }
    const format = "0000";

    for (let i = 0; i <= target; i++) {
      let formattedNum = format.slice(0, i) + value;

      if (formattedNum.length === target) {
        return formattedNum;
      } else if (formattedNum.length > target) {
        return "Value has exceeded the required target!";
      }
    }
  }

  const getImageExtType = (filename) => {
    const filetypes = ["png", "jpg"];
    const currName = filename.slice(-3);

    const isAccepted = filetypes.includes(currName.toLowerCase());

    if (isAccepted) {
      return currName.toLowerCase();
    } else {
      throw new Error("An image file extension is not currently supported!");
    }
  };

  const vaildateData = () => {
    if (prefix.length === 0 || format.length === 0) {
      console.log(
        "Please update the prefix or format with the correct values!",
      );
    } else {
      console.log("Prefix:", prefix, "Format:", format);
    }
  };

  return (
    <>
      <div className="font-(family-name:--gabarito-font) font-normal max-w-250 h-[100vh] p-6 m-[auto]">
        <p className="p-4 my-5 bg-[#ffe17a] text-[#6c5300] rounded-lg border-2">
          Disclaimer! This app only intended to modify filenames of images
          through it's metadata. Also you will be consenting to the app to
          change and modify files within your local file disk.
        </p>
        <p className="p-4 my-5 bg-[#ffe17a] text-[#6c5300] rounded-lg border-2">
          Caution! You currently using Mozzila Firefox 1.02 some features will
          not be supported and updating images are disabled! Use a Chromium
          browser instead.
        </p>
        <div className="flex justify-between">
          <div className="flex w-[100%] mr-4 flex-col">
            <div className="flex-1 mb-3">
              <label className="flex-1 mb-3 ml-3">Prefix</label>
              <label className="flex-1 italic text-[#b8b8b8] mb-3 ml-4">
                Eg."IMG_"
              </label>
            </div>
            <input
              className="flex-1 bg-[#ffffff] p-4 rounded-lg border-2"
              type="text"
              onChange={handlePrefix}
              onMouseLeave={updatePreview}
            />
          </div>
          <div className="flex w-[100%] ml-4 flex-col">
            <div className="flex-1 mb-3">
              <label className="flex-1 mb-3 ml-4">Format</label>
              <label className="flex-1 italic text-[#b8b8b8] mb-3 ml-4">
                Eg. 4="0000"
              </label>
            </div>
            <select
              onChange={handleFormat}
              onMouseLeave={updatePreview}
              className="flex-1 bg-[#ffffff] p-4 rounded-lg border-2"
            >
              <option value="0" selected>
                1
              </option>
              <option value="00">2</option>
              <option value="000">3</option>
              <option value="0000">4</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex w-[100%] flex-col">
            <label className="flex-1 ml-3 my-3">Name Preview</label>
            <input
              className="flex-1 bg-[#ffffff] text-[#b8b8b8] border-[#000000] p-4 rounded-lg border-2"
              type="text"
              readOnly
              value={namePreview}
            />
          </div>
        </div>
        <div className="flex justify-center items-center bg-[#ffffff] h-50 my-10 border-2 border-dashed rounded-lg relative">
          <span className="flex-1 absolute">Upload Files Here</span>
          <input
            type="file"
            multiple="multiple"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => {
              getImageFileData(e);
              setIsImagesUploaded(true);
            }}
          />
        </div>
        <div className="flex bg-[#ffffff] my-10 border-2 rounded-lg relative">
          <div className="flex flex-col w-[100%]">
            <div className="flex py-2 px-4 bg-[#eee]">
              <span className="w-[80px]">Num</span>
              <span className="w-[100px]">Image</span>
              <span className="w-[180px]">Image Name</span>
              <span className="w-[180px]">New Image Name</span>
            </div>
            <ul className="flex flex-col">{displayImages()}</ul>
          </div>
        </div>
        <button
          type="button"
          onClick={vaildateData}
          className="bg-[#c9ff7a] text-[#197300] w-[100%] p-4 rounded-lg border-2 cursor-pointer"
        >
          Update
        </button>
      </div>
    </>
  );
}

export default App;
