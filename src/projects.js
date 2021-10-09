import cateringVideo from './video/Catering.mp4';
import algoVideo from './video/Algo.mp4'

export const projects = [
    {
        projectName: "Catering-App",
        projectDescription: "This application was created for a university course called \"Development of Software Applications\" and represents the implementation of two use cases, one developed during the course, and the second assigned as part of the project to be presented at the exam. The implementation is preceded by a study on the analysis of the requirements and by a design phase in a Unified Process perspective.",
        projectTags: ["Java", "JavaFX"],
        links: [
            {linkUrl: cateringVideo, linkType: "video", linkText: "View Demo Video"},
            {linkUrl: "https://github.com/stefaAma/CateringApplication", linkType: "link", linkText: "GitHub Repository"}
        ]
    },
    {
        projectName: "Weather-App",
        projectDescription: "I wrote this application to get familiar with the basics of front-end development. The API I decided to use for creating my weather application is the one provided by OpenWeatherMap.",
        projectTags: ["JavaScript"],
        links: [
            {linkUrl: "#", linkType: "link", linkText: "Visit Page"},
            {linkUrl: "https://github.com/stefaAma/WeatherApp", linkType: "link", linkText: "GitHub Repository"}
        ]
    },
    {
        projectName: "Portfolio",
        projectDescription: "I created this portfolio to show some of the projects I have worked on (in the future I will add more), and also to learn how to work using React.\nDoes this count as a project? :)",
        projectTags: ["JavaScript", "React"],
        links: [
            {linkUrl: "https://github.com/stefaAma/WebPortfolio", linkType: "link", linkText: "GitHub Repository"}
        ]
    },
    {
        projectName: "Algorithms",
        projectDescription: "I have always considered the study of algorithms significant, and in addition to being one of the reasons why I approached the world of computer science, it is objectively helpful to understand them. For this reason, I have decided to implement the ones I study, from time to time, without haste. I chose to use Python for the implementation because of its versatility.",
        projectTags: ["Python"],
        links: [
            {linkUrl: algoVideo, linkType: "video", linkText: "View Demo Video"},
            {linkUrl: "https://github.com/stefaAma/AlgorithmExercises", linkType: "link", linkText: "GitHub Repository"},
        ]
    },
]

export const defaultTagColor = "rgba(133, 133, 255, 0.35)";
export const activeTagColor = "rgba(212, 18, 18, 0.45)";