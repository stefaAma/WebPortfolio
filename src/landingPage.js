import React, {useState} from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
// import { LoremIpsum } from 'react-lorem-ipsum'
import { logoList } from './logoList';

const LOGO_NUM = logoList.length - 1; 
const LOGO_OFFSET = 3;

const LandingPage = () => {
    return (
        <>
            <Title/>
            <Quote/>
            <SkillSet/>
        </>
    );
}

const Title = () => {
    return (
        <header className = "main-title">
            <h1 className = "name">Stefan</h1>
            <h1 className = "surname">Amariei</h1>
        </header>
    );
}

const Quote = () => {
    return (
        <div className = "quote-wrapper">
            <div className = "quote-left">
                <FaQuoteLeft/>
            </div>
            <p className = "quote-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className = "quote-right">
                <FaQuoteRight/>
            </div>
        </div>
    );
}

const SkillSet = () => {
    const [bookmark, setBookmark] = useState(0);

    function find_bookmarks() {
        let bookmarks = {
            prevStart: -1,
            prevEnd: -1,
            displayedElements: []
        };

        /*if (bookmark + LOGO_OFFSET <= LOGO_NUM) 
            bookmarks.bookmarkEnd = bookmark + LOGO_OFFSET;
        else 
            bookmarks.bookmarkEnd = ((bookmark + LOGO_OFFSET) - LOGO_NUM) - 1; */

        if (bookmark - LOGO_OFFSET > 0) 
            bookmarks.prevStart = (bookmark - LOGO_OFFSET) - 1;
        else 
            bookmarks.prevStart = LOGO_NUM + (bookmark - LOGO_OFFSET);
        bookmarks.prevEnd = bookmark - 1;

        let counter = bookmark;

        for (let i = 0; i <= LOGO_OFFSET; i++) {
            if (counter > LOGO_NUM)
                counter = 0;
            bookmarks.displayedElements.push(counter);
            counter++;
        }

        return bookmarks;
    }

    let bookmarks = find_bookmarks();

    return (
        <div className = "skills-wrapper">
            <h3 className = "skill-title"> ~ Skills ~ </h3>
            <div className = "logo-wrapper">
                {
                    logoList.map((item, index) => {
                        let className = "next-element";
                        
                        if (index === bookmarks.displayedElements[0]) 
                            className = "first-element";
                        else if (index === bookmarks.displayedElements[1])
                            className = "second-element";
                        else if (index === bookmarks.displayedElements[2])
                            className = "third-element";
                        else if (index === bookmarks.displayedElements[3])
                            className = "fourth-element";

                        if (bookmarks.prevStart < bookmarks.prevEnd && (index >= bookmarks.prevStart && index <= bookmarks.prevEnd)) 
                            className = "prev-element";
                        else if (index >= bookmarks.prevStart || index <= bookmarks.prevEnd)
                            className = "prev-element";

                        return (
                            <Logo className = {className} src = {item.src} alt = {item.alt} key = {index}/>
                        );
                    })
                }
            </div>
        </div>
    );
}

const Logo = (props) => {
    const {className, src, alt} = props;
    return (
        <img className = {className} src = {src} alt = {alt}></img>
    );
}

export default LandingPage;
