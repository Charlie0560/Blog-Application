import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img, post }) {
  const PF = "http://localhost:5000/images/"
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.music}</span>
          ))}
          <Link to={`/post/${post._id}`}>
            <span className="postTitle">{post.title}</span>
          </Link>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>

        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
