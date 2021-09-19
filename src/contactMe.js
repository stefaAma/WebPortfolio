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
                <li key = {index}>
                    <h6>{item.text}</h6>
                    <div>
                        {item.icon}
                    </div>
                </li>
            );
        })
    }

    get getUsefulLinks() {
        return this.usefulLinks.map((item, index) => {
            return (
                <li key = {index}>
                    <a href = {item.linkUrl} rel = "noreferrer" target = "_blank">{item.text}</a>
                    <div>
                        {item.icon}
                    </div>
                </li>
            );
        })
    }

    get getCopyright() {
        return (
            <div>
                <div>
                    <CgCopyright />
                </div>
                <h6>Stefan Amariei</h6>
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
