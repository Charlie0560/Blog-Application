import "./header.css"
export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg w-100" src="https://media.istockphoto.com/photos/road-in-mountains-picture-id491712724?s=612x612" alt="" />
        </div>
    )
}
