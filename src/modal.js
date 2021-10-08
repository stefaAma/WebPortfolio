import ReactDom from 'react-dom'
import { hardSkills, softSkills } from './hardSkills';

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
                    <ul className = "hard-skills-container">
                        {hardSkills.map((item, index) => <HardSkill key = {index} skillTitle = {item.skillTitle} skillDescription = {item.skillDescription} />)}
                    </ul>
                    <h4 className = "modal-subtitle">Soft-Skills</h4>
                    <p className = "soft-skills-description">{softSkills}</p>
                </div>
            </div>
        </>, document.getElementById("modal-wrapper"))
    );
}

const HardSkill = (props) => {
    const {key, skillTitle, skillDescription} = props;
    return (
        <li key = {key} className = "hard-skill-item">
            <h5 className = "hard-skill-title">{skillTitle}</h5>
            <p className = "hard-skill-description">{skillDescription}</p>
        </li>
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
