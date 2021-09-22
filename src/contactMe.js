import { FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { IoSchool } from 'react-icons/io5'
import { CgCopyright } from 'react-icons/cg'

class ContactMe {

    constructor(aboutMe, contactMe, usefulLinks) {
        this.aboutMe = aboutMe;
        this.contactMe = contactMe;
        this.usefulLinks = usefulLinks;
    }

    get getAboutMe() {
        return this.aboutMe;
    }

    get getContactMe() {
        return this.contactMe.map((item, index) => {
            return (
                <li className = "contact-me-item" key = {index}>
                    <h6 className = "contact-me-text">{item.text}</h6>
                    <div className = "contact-me-icon">
                        {item.icon}
                    </div>
                </li>
            );
        })
    }

    get getUsefulLinks() {
        return this.usefulLinks.map((item, index) => {
            return (
                <li className = "useful-links-item" key = {index}>
                    <a className = "useful-links-link" href = {item.linkUrl} rel = "noreferrer" target = "_blank">{item.text}</a>
                    <div className = "useful-links-icon">
                        {item.icon}
                    </div>
                </li>
            );
        })
    }

    get getCopyright() {
        return (
            <div className = "copyright-text-wrapper">
                <div className = "copyright-icon">
                    <CgCopyright />
                </div>
                <h6 className = "copyright-text">Stefan Amariei</h6>
            </div>
        );
    }
}

const aboutMeText = "I'm Stefan Amariei and Software Development is my passion. This portfolio contains some of the projects I have worked on or am working on, so feel free to view them and eventually to contact me."

const contactMe = [
    {
        text: "mail1",
        icon: <HiOutlineMail />
    },
    {
        text: "mail2",
        icon: <IoSchool />
    }
]

const usefulLinks = [
    {
        text: "GitHub Profile",
        linkUrl: "https://github.com/stefaAma",
        icon: <FaGithub />
    }
]

const contactMeObj = new ContactMe(aboutMeText, contactMe, usefulLinks);

export default contactMeObj;
