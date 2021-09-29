import * as React from 'react'
import { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { projects, defaultTagColor, activeTagColor } from "./projects";
import { SkillTag } from "./modal";
import VideoModal from "./videoModal";
import contactMeObj from "./contactMe";
import FooterPopup from './footerPopup';

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
        <div className = "projects-page">
            <ProjectsMenu activeTags = {activeTags} setActiveTags = {setActiveTags} />
            <ProjectsBody activeTags = {activeTags} />
            <ContactMe />
            <BackgroundCircles />
        </div>
    );
}

const BackgroundCircles = () => {
    return (
        <>
            <div id = "circle-one" className = "background-circle"></div>
            <div id = "circle-two" className = "background-circle"></div>
            <div id = "circle-three" className = "background-circle"></div>
            <div id = "circle-four" className = "background-circle"></div>
        </>
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
        <header className = "projects-menu">
            <div className = "title-menu-wrapper">
                <h3 className = "title-menu">VIEW PROJECTS</h3>
            </div>
            <ul className = "checkbox-wrapper">
                <li className = "menu-item">
                    <FormGroup >
                        <FormControlLabel label = "all" control = {<Checkbox checked = {checkedState[0]} onChange = {() => updatePageState(0)} sx={{ color: "rgba(133, 133, 255, 0.55)", '&.Mui-checked': { color: "rgba(133, 133, 255, 0.55)", }, }}/>} />
                    </FormGroup>
                </li>
                {
                    tags.map((tagName, index) => {
                        return (
                            <li key = {index} className = "menu-item">
                                <FormGroup>
                                    <FormControlLabel label = {tagName} control = {<Checkbox checked = {checkedState[index + 1]} onChange = {() => updatePageState(index + 1)} sx={{ color: "rgba(163, 22, 33, 0.65)", '&.Mui-checked': { color: "rgba(163, 22, 33, 0.65)", }, }} />} />
                                </FormGroup>
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
        <main className = "projects-body">
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
            <div className = "project-card">
                <section className = "project-wrapper-title">
                    <h4 className = "project-title">{projectName}</h4>
                </section>
                <section className = "project-description">
                    <p className = "project-text">{projectDescription}</p>
                </section>
                <div className = "skill-tag-wrapper">
                        {projectTags.map((tag, index) => <SkillTag key = {index} name = {tag} color = {colorTags[index]}/>)}
                </div>
                <section className = "projects-links">
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

    return <a className = "projectLink" href = {linkUrl} onClick = {(e) => linkAction(e, linkUrl, linkType, setDisplayVideo)}>{linkText}</a>
}

const EmptyProjectsList = () => {
    return (
        <div className = "empty-projects-alert">
            <h3 className = "empty-projects-text">Sorry, no project meets your search criteria</h3>
        </div>
    );
}

const ContactMe = () => {
    return (
        <footer className = "contact-me-footer">
            <div className = "contact-me-info">
                <AboutMeSection />
                <ContactMeSection />
                <UsefulLinkSection />
            </div>
            <div className = "contact-me-copyright">
                {contactMeObj.getCopyright}
            </div>
        </footer>
    );
}

const AboutMeSection = () => {
    return (
        <div className = "about-me">
            <div className = "footer-title">
                <h3>About Me</h3>
            </div>
            <div className = "footer-content-text">
                <p>{contactMeObj.getAboutMe}</p>
            </div>
        </div>
    );
}

const ContactMeSection = () => {
    const [displayPopup, setPopupDisplay] = useState({display: false, text: ""});

    return (
        <div className = "contact-me">
            <div className = "footer-title">
                <h3>Contact Me</h3>
            </div>
            <ul className = "footer-content-items">
                {contactMeObj.getContactMe(setPopupDisplay)}
            </ul>
            {displayPopup.display && <FooterPopup popupText = {displayPopup.text} />}
        </div>
    );
}

const UsefulLinkSection = () => {
    return (
        <div className = "useful-links">
            <div className = "footer-title">
                <h3>Useful Links</h3>
            </div>
            <ul className = "footer-content-items">
                {contactMeObj.getUsefulLinks}
            </ul>
        </div>
    );
}

export default ProjectsPage;
