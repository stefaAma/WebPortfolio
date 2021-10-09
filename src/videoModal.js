import ReactDom from "react-dom";

const VideoModal = (props) => {
    const {videoUrl, unfixVideoModal} = props;

    return (
        ReactDom.createPortal(
        <div className = "video-modal-container">  
            <div className = "modal-overlay" onClick = {() => unfixVideoModal()}></div>
            <span className = "close-modal close-video-modal" onClick = {() => unfixVideoModal()}>&times;</span>
            <div className = "video-modal-wrapper">
                <video className = "video-modal" muted controls>
                    <source src = {videoUrl} type="video/mp4"></source>
                </video>
            </div>
        </div>, document.getElementById("modal-wrapper"))
    );
}

export default VideoModal;