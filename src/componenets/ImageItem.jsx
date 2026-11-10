import "../App.css";

export function ImageItem({ numID, imgsrc, imgname, newimgname }) {
  return (
    <>
      <li className="flex py-2 px-4 items-center">
        <span className="w-[80px]">{numID + 1 + "."}</span>
        <img
          className="w-[40px] h-[40px] object-cover"
          src={URL.createObjectURL(imgsrc)}
          alt={imgname}
        />
        <span className="w-[180px] ml-[60px]">{imgname}</span>
        <span className="w-[180px]">{newimgname}</span>
      </li>
    </>
  );
}

export default ImageItem;
