import ReactDom from "react-dom";

const VideoModal = (props) => {
    const {videoUrl, setDisplayVideo} = props;

    return (
        ReactDom.createPortal(
        <div className = "video-modal-container">  
            <div className = "modal-overlay" onClick = {() => setDisplayVideo({display: false, videoUrl: ""})}></div>
            <span className = "close-modal close-video-modal" onClick = {() => setDisplayVideo({display: false, videoUrl: ""})}>&times;</span>
            <div className = "video-modal-wrapper">
                <video className = "video-modal" muted controls>
                    <source src = {videoUrl} type="video/mp4"></source>
                </video>
            </div>
        </div>, document.getElementById("modal-wrapper"))
    );
}

export default VideoModal;