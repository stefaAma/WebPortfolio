import React, { useState } from "react"; 
import { projects, defaultTagColor, activeTagColor } from "./projects";
import { SkillTag } from "./modal";
import VideoModal from "./videoModal";

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

const filterProjects = (activeTags) => {
    return projects.reduce((list, item) => {
        let filter = true;
        let i = 0;
        while (filter && i < activeTags.length) {
            if (!item.projectTags.includes(activeTags[i]))
                filter = false;
            i++;
        }
        if (filter)
            list.push(item);
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
    let filteredProjects;
    let empty = false;

    if (activeTags[0] === "all")
        filteredProjects = projects;
    else {
        filteredProjects = filterProjects(activeTags);
        if (filteredProjects.length === 0)
            empty = true;
    }

    let projectsJSX = filteredProjects.map((item, index) => {
        const colorTags = item.projectTags.map((tag) => activeTags.includes(tag) ? activeTagColor : defaultTagColor);

        return <ProjectCard key = {index} projectName = {item.projectName} projectDescription = {item.projectDescription}
        projectTags = {item.projectTags} links = {item.links} colorTags = {colorTags}/>
    });

    return (
        <main>
            {empty ? <EmptyProjectsList /> : projectsJSX}
        </main>
    );
}

const ProjectCard = (prop) => {
    const {projectName, projectDescription, projectTags, links, colorTags} = prop;
    const [displayVideo, setDisplayVideo] = useState({display: false, videoUrl: ""});

    const linkAction = (e, linkUrl, linkType, setDisplayVideo) => {
        e.preventDefault();
        if (linkType === "video") 
            setDisplayVideo({display: true, videoUrl: linkUrl});
        else 
            window.open(linkUrl, "_blank");
    }

    return (
        <>
            <div>
                <section>
                    <h4>{projectName}</h4>
                </section>
                <section>
                    <p>{projectDescription}</p>
                    <div>
                        {projectTags.map((tag, index) => <SkillTag key = {index} name = {tag} color = {colorTags[index]}/>)}
                    </div>
                </section>
                <section>
                    {links.map((item, index) => <LinkCard key = {index} linkUrl = {item.linkUrl} linkType = {item.linkType}
                    linkText = {item.linkText} linkAction = {linkAction} setDisplayVideo = {setDisplayVideo}/>)}
                </section>
            </div>
            {displayVideo.display && <VideoModal videoUrl = {displayVideo.videoUrl} setDisplayVideo = {setDisplayVideo}/>}
        </>
    );
}

const LinkCard = (prop) => {
    const {linkUrl, linkType, linkText, linkAction, setDisplayVideo} = prop;

    return <a href = {linkUrl} onClick = {(e) => linkAction(e, linkUrl, linkType, setDisplayVideo)}>{linkText}</a>
}

const EmptyProjectsList = () => {
    return (
        <h3>Sorry, no project meets your search criteria</h3>
    );
}

const ContactMe = () => {
    return (
        <footer></footer>
    );
}

export default ProjectsPage;
