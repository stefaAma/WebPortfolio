import ReactDom from 'react-dom'
import { LoremIpsum } from 'react-lorem-ipsum'

const Modal = (props) => {
    const {logoList, setDisplayModal} = props;

    return (
        ReactDom.createPortal(
        <>
            <div onClick = {() => setDisplayModal(false)}></div>
            <div>
                <header>
                    <h3>Skills</h3>
                    <span onClick = {() => setDisplayModal(false)}>&times</span>                
                </header>
                <hr/>
                <div>
                    <div>
                        {
                            logoList.map((item, index) => {
                                return <SkillTag key = {index} name = {item.name} color = {item.color} />
                            })
                        }
                    </div>
                    <h4>Hard-Skills</h4>
                    <LoremIpsum></LoremIpsum>
                    <h4>Soft-Skills</h4>
                    <LoremIpsum></LoremIpsum>
                </div>
            </div>
        </>, document.getElementById("modal-wrapper"))
    );
}

const SkillTag = (props) => {
    const {name, color} = props;

    return (
        <div style = {{backgroundColor: color}}>
            <h6>{name}</h6>
        </div>
    );
}

export default Modal;
