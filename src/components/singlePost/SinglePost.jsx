import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg w-100"
          src="https://media.istockphoto.com/photos/road-in-mountains-picture-id491712724?s=612x612"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Name</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure facere
          animi, fugiat dicta ab maiores distinctio, corrupti fugit repudiandae
          harum, mollitia nulla esse? Assumenda maiores, voluptas reiciendis
          vero ab commodi?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure facere
          animi, fugiat dicta ab maiores distinctio, corrupti fugit repudiandae
          harum, mollitia nulla esse? Assumenda maiores, voluptas reiciendis
          vero ab commodi?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure facere
          animi, fugiat dicta ab maiores distinctio, corrupti fugit repudiandae
          harum, mollitia nulla esse? Assumenda maiores, voluptas reiciendis
          vero ab commodi?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure facere
          animi, fugiat dicta ab maiores distinctio, corrupti fugit repudiandae
          harum, mollitia nulla esse? Assumenda maiores, voluptas reiciendis
          vero ab commodi?
        </p>
      </div>
    </div>
  );
}
