import "./Post.css";
import { useState } from "react";
import { GrMoreVertical } from "react-icons/gr";
import { AiTwotoneHeart, AiFillLike } from "react-icons/ai";
import { users } from "../../dummyData";

const Post = ({ post }) => {
  const { id, desc, photo, like, comment, date, img } = post;
  const [likes, setLikes] = useState(like);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLikes(isLiked ? parseInt(likes - 1) : parseInt(likes + 1));
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={photo} alt="" />
            <span className="postUserName">
              {users.filter((u) => u.id === id)[0].name}
            </span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <GrMoreVertical />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img className="postImg" src={img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <AiFillLike className="likeIcon like" onClick={likeHandler} />
            <AiTwotoneHeart className="likeIcon love" onClick={likeHandler} />
            <span className="postlikeCounter">{likes} People Like It</span>
          </div>

          <div className="postBottomRight">
            <span className="postCommentText">{comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
