import ReactDom from 'react-dom'
import { LoremIpsum } from 'react-lorem-ipsum'

const Modal = (props) => {
    const {logoList, setDisplayModal} = props;

    return (
        ReactDom.createPortal(
        <>
            <div className = "modal-overlay" onClick = {() => setDisplayModal(false)}></div>
            <div className = "modal">
                <header className = "modal-header">
                    <h3 className = "modal-title">Skills</h3>
                    <span className = "close-modal" onClick = {() => setDisplayModal(false)}>&times;</span>                
                </header>
                <hr className = "modal-line"/>
                <div className = "modal-body">
                    <div className = "skill-tag-wrapper">
                        {
                            logoList.map((item, index) => {
                                return <SkillTag key = {index} name = {item.name} color = {item.color} />
                            })
                        }
                    </div>
                    <h4 className = "modal-subtitle">Hard-Skills</h4>
                    <LoremIpsum></LoremIpsum>
                    <h4 className = "modal-subtitle">Soft-Skills</h4>
                    <LoremIpsum></LoremIpsum>
                </div>
            </div>
        </>, document.getElementById("modal-wrapper"))
    );
}

export const SkillTag = (props) => {
    const {name, color} = props;

    return (
        <div className = "skill-tag" style = {{backgroundColor: color}}>
            <h6 className = "skill-name">{name}</h6>
        </div>
    );
}

export default Modal;
