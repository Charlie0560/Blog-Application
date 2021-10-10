import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src="https://media.istockphoto.com/photos/road-in-mountains-picture-id491712724?s=612x612" alt="" />
            <form className="writeForm" action="">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>

                </div>
                <button className="writeSubmit">Publish</button>
            </form>
            
        </div>
    )
}
