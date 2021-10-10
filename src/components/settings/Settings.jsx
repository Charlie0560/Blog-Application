import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"


export default function Settings() {
    return (
        <div className="settings">
            <div className="settingWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>

                </div>
                <form className="settingsForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Name`" />
                    <label>Email</label>
                    <input type="email" placeholder="abc@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
