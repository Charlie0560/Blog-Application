import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About me</span>
        <br/>
        <img
        className="w-50"
          src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga omnis
          facilis delectus? Magnam sit facilis cum earum! Odit, minima iusto!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <div className="i sidebarListItem">Life</div>
          <div className="i sidebarListItem">Music</div>
          <div className="i sidebarListItem">Style</div>
          <div className="i sidebarListItem">Sport</div>
          <div className="i sidebarListItem">Tech</div>
          <div className="i sidebarListItem">Cinema</div>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidbarTitle">Follow us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-linkedin"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
