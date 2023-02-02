import "./share.css";
import { TiMediaRewind } from "react-icons/ti";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";
import { MdLabelImportant, MdPhotoLibrary } from "react-icons/md";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={require("../../assets/woman-7731608_960_720.jpg")}
            alt=""
          />
          <input placeholder="What's In Your Mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="sharebottom">
          <div className="shareOptions">
            <div className="shareOption">
              <MdPhotoLibrary className="shareIcon one" />
              <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption ">
              <MdLabelImportant className="shareIcon two" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption three">
              <BsFillEmojiSmileFill className="shareIcon three" />
              <span className="shareOptionText">Feelings</span>
            </div>
            <div className="shareOption">
              <VscLocation className="shareIcon four" />
              <span className="shareOptionText">Location</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
