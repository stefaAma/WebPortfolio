import React, { useState } from "react"; 
import { projects } from "./projects";

const tagList = () => {
    return projects.reduce((list, item) => {
        for (let i = 0; i < item.projectTags.length; i++) {
            const element = item.projectTags[i];
            if(!list.includes(element))
                list.push(element);
        }
        return list;
    }, []);
}

const ProjectsPage = () => {
    const [activeTags, setActiveTags] = useState(["all"]);

    return (
        <div>
            <ProjectsMenu activeTags = {activeTags} setActiveTags = {setActiveTags} />
            <ProjectsBody activeTags = {activeTags} />
            <ContactMe />
        </div>
    );
}

const ProjectsMenu = (prop) => {
    const {activeTags, setActiveTags} = prop;
    const tags = tagList();

    const defaultState = () => {
        const newArray = new Array(tags.length + 1);
        newArray.fill(false);
        newArray[0] = true;
        return newArray;
    }

    const [checkedState, setCheckedState] = useState(defaultState());

    const updatePageState = (checkboxIndex) => {
        const newCheckedState = checkedState.map((item, index) => checkboxIndex === index ? !item : item);
        if(newCheckedState.reduce((isNotEmpty, item) => isNotEmpty || item ? true : false, false)) {
            if (checkboxIndex === 0) {
                setCheckedState(defaultState());
                setActiveTags(["all"]);
            }
            else {
                const newActiveTags = activeTags.map((item) => item);
                if(newCheckedState[0]) {
                    newCheckedState[0] = false;
                    newActiveTags.splice(0, 1);
                }
                setCheckedState(newCheckedState);
                if (newActiveTags.includes(tags[checkboxIndex - 1]))
                    newActiveTags.splice(newActiveTags.indexOf(tags[checkboxIndex - 1]), 1);
                else
                    newActiveTags.push(tags[checkboxIndex - 1]);
                setActiveTags(newActiveTags);
            }
        }
    }

    return (
        <header>
            <h3>VIEW PROJECTS</h3>
            <ul>
                <li>
                    <label htmlFor = "all-tag">all</label>
                    <input type = "checkbox" id = "all-tag" checked = {checkedState[0]} onChange = {() => updatePageState(0)}/>
                </li>
                {
                    tags.map((tagName, index) => {
                        return (
                            <li key = {index}>
                                <label htmlFor = {`${tagName}-tag`}>{tagName}</label>
                                <input type = "checkbox" id = {`${tagName}-tag`} checked = {checkedState[index + 1]} onChange = {() => updatePageState(index + 1)}/>
                            </li>
                        );
                    })
                }
            </ul>
        </header>
    );
}

const ProjectsBody = (prop) => {
    const {activeTags} = prop;

    return (
        <main></main>
    );
}

const ContactMe = () => {
    return (
        <footer></footer>
    );
}

export default ProjectsPage;
