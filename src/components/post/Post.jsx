import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://media.istockphoto.com/photos/road-in-mountains-picture-id491712724?s=612x612"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
        recusandae optio atque temporibus unde excepturi suscipit aliquam,
        deleniti alias dolore. Neque, nam culpa commodi accusamus numquam
        facilis deleniti tempora eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
        recusandae optio atque temporibus unde excepturi suscipit aliquam,
        deleniti alias dolore. Neque, nam culpa commodi accusamus numquam
        facilis deleniti tempora eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
        recusandae optio atque temporibus unde excepturi suscipit aliquam,
        deleniti alias dolore. Neque, nam culpa commodi accusamus numquam
        facilis deleniti tempora eveniet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
        recusandae optio atque temporibus unde excepturi suscipit aliquam,
        deleniti alias dolore. Neque, nam culpa commodi accusamus numquam
        facilis deleniti tempora eveniet?
      </p>
    </div>
  );
}
