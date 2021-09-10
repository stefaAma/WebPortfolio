import React, {useState, useEffect} from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { logoList } from './logoList';
import codingVideo from './video/coding_video.mp4'
import Modal from './modal';

const LOGO_NUM = logoList.length - 1; 
const LOGO_OFFSET = 2;

const LandingPage = () => {
    const [displayModal, setDisplayModal] = useState(false);

    return (
        <div className = "landingPage">
            <Title setDisplayModal = {setDisplayModal}/>
            <Quote setDisplayModal = {setDisplayModal}/>
            <SkillSet setDisplayModal = {setDisplayModal}/>
            <div className = "video-wrapper">
                <video className = "background-video" autoPlay loop muted>
                    <source src = {codingVideo} type = "video/mp4" />
                </video>
            </div>
            {displayModal && <Modal logoList = {logoList} setDisplayModal = {setDisplayModal}/>}
        </div>
    );
}

const Title = (props) => {
    const {setDisplayModal} = props;

    return (
        <header className = "main-title" onClick = {() => setDisplayModal(true)}>
            <h1 className = "name">Stefan</h1>
            <h1 className = "surname">Amariei</h1>
        </header>
    );
}

const Quote = (props) => {
    const {setDisplayModal} = props;

    return (
        <div className = "quote-wrapper" onClick = {() => setDisplayModal(true)}>
            <div className = "quote-body">
                <div className = "quote-left">
                    <FaQuoteLeft/>
                </div>
                <p className = "quote-text">I don't know everything, but I can put a step after another and go even further beyond.</p>
                <div className = "quote-right">
                    <FaQuoteRight/>
                </div>
            </div>
        </div>
    );
}

const SkillSet = (props) => {
    const {setDisplayModal} = props;
    const [bookmark, setBookmark] = useState(0);

    useEffect(() => {
        let id = setInterval(() => {
            setBookmark((prevBookmark) => {
                let newBookmark = prevBookmark + LOGO_OFFSET + 1;
                if (newBookmark > LOGO_NUM)
                    newBookmark = newBookmark - (LOGO_NUM + 1);

                //console.log(newBookmark);

                return newBookmark;
            });
        }, 4000);

        return () => clearInterval(id);
    });

    function find_bookmarks() {
        let bookmarks = {
            prevStart: -1,
            prevEnd: -1,
            displayedElements: []
        };

        if (bookmark - LOGO_OFFSET > 0) 
            bookmarks.prevStart = (bookmark - LOGO_OFFSET) - 1;
        else 
            bookmarks.prevStart = LOGO_NUM + (bookmark - LOGO_OFFSET);
        
        if (bookmark > 0)
            bookmarks.prevEnd = bookmark - 1;
        else
            bookmarks.prevEnd = LOGO_NUM;

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
        <div className = "logo-wrapper" onClick = {() => setDisplayModal(true)}>
            {
                logoList.map((item, index) => {
                    let className = "next-element";
                    
                    if (index === bookmarks.displayedElements[0]) 
                        className = "first-element";
                    else if (index === bookmarks.displayedElements[1])
                        className = "second-element";
                    else if (index === bookmarks.displayedElements[2])
                        className = "third-element";

                    if (bookmarks.prevStart < bookmarks.prevEnd && (index >= bookmarks.prevStart && index <= bookmarks.prevEnd)) 
                        className = "prev-element";
                    else if (bookmarks.prevStart > bookmarks.prevEnd && (index >= bookmarks.prevStart || index <= bookmarks.prevEnd))
                        className = "prev-element";

                    return (
                        <Logo className = {className} src = {item.src} alt = {item.alt} key = {index}/>
                    );
                })
            }
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
