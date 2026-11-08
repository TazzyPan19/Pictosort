import "./App.css";
// import EXIF from "exif-js";

function App() {
  return (
    <>
      <div className="font-(family-name:--gabarito-font) font-normal max-w-410 h-[100vh] p-6 m-[auto] bg-[#ececec]">
        <p className="p-4 my-5 bg-[#ffe17a] text-[#a27d00] rounded-lg border-2">
          Disclaimer! This app only intended to modify filenames of images
          through it's metadata. Also you will be consenting to the app to
          change and modify files within your local file disk.
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
              placeholder="Enter!"
              type="text"
            />
          </div>
          <div className="flex w-[100%] ml-4 flex-col">
            <div className="flex-1 mb-3">
              <label className="flex-1 mb-3 ml-4">Format</label>
              <label className="flex-1 italic text-[#b8b8b8] mb-3 ml-4">
                Eg."0000" = 4
              </label>
            </div>
            <select className="flex-1 bg-[#ffffff] p-4 rounded-lg border-2">
              <option value="0">1</option>
              <option value="00">2</option>
              <option value="000" selected>
                3
              </option>
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
              value={"IMG"}
            />
          </div>
        </div>
        <div className="flex bg-[#ffffff] w-[100%] border-2 rounded-lg">
          <span className="absolute">Upload Files Here</span>
          <input
            type="file"
            multiple="multiple"
            accept="image/png, image/jpeg, image/jpg"
          />
        </div>
      </div>
    </>
  );
}

export default App;
