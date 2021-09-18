import ReactDom from "react-dom";

const VideoModal = (props) => {
    const {videoUrl, setDisplayVideo} = props;

    return (
        ReactDom.createPortal(
        <>  
            <div onClick = {() => setDisplayVideo({display: false, videoUrl: ""})}></div>
            <div>
                <video>
                    <source src = {videoUrl} type="video/mp4"></source>
                </video>
            </div>
        </>, document.getElementById("modal-wrapper"))
    );
}

export default VideoModal;