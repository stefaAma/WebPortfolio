import cateringVideo from './video/Catering.mp4';
import algoVideo from './video/Algo.mp4'

export const projects = [
    {
        projectName: "Catering-App",
        projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non accumsan odio. Duis a odio felis. Aliquam interdum enim felis, eu dignissim neque hendrerit non. In ac consectetur metus. Etiam maximus viverra magna non ornare. Proin a quam id lorem sodales tempor.",
        projectTags: ["Java", "JavaFX"],
        links: [
            {linkUrl: cateringVideo, linkType: "video", linkText: "View Demo Video"},
            {linkUrl: "https://github.com/stefaAma/CateringApplication", linkType: "link", linkText: "GitHub Repository"}
        ]
    },
    {
        projectName: "Weather-App",
        projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non accumsan odio. Duis a odio felis. Aliquam interdum enim felis, eu dignissim neque hendrerit non. In ac consectetur metus. Etiam maximus viverra magna non ornare. Proin a quam id lorem sodales tempor. Quisque a ante id diam tincidunt finibus non vel enim. Sed fermentum feugiat dapibus. Donec et diam neque.  Sed fermentum feugiat dapibus. Donec et diam neque.  Sed fermentum feugiat dapibus. Donec et diam neque.",
        projectTags: ["JavaScript"],
        links: [
            {linkUrl: "#", linkType: "link", linkText: "Visit Page"},
            {linkUrl: "https://github.com/stefaAma/WeatherApp", linkType: "link", linkText: "GitHub Repository"}
        ]
    },
    {
        projectName: "Portfolio",
        projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non accumsan odio. Duis a odio felis. Aliquam interdum enim felis, eu dignissim neque hendrerit non. In ac consectetur metus. Etiam maximus viverra magna non ornare. Proin a quam id lorem sodales tempor. Quisque a ante id diam tincidunt finibus non vel enim. Sed fermentum feugiat dapibus. Donec et diam neque.",
        projectTags: ["JavaScript", "React"],
        links: [
            {linkUrl: "https://github.com/stefaAma/WebPortfolio", linkType: "link", linkText: "GitHub Repository"}
        ]
    },
    {
        projectName: "Algorithms",
        projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non accumsan odio. Duis a odio felis. Aliquam interdum enim felis, eu dignissim neque hendrerit non. In ac consectetur metus. Etiam maximus viverra magna non ornare. Proin a quam id lorem sodales tempor. Quisque a ante id diam tincidunt finibus non vel enim. Sed fermentum feugiat dapibus. Donec et diam neque.",
        projectTags: ["Python"],
        links: [
            {linkUrl: algoVideo, linkType: "video", linkText: "View Demo Video"},
            {linkUrl: "https://github.com/stefaAma/AlgorithmExercises", linkType: "link", linkText: "GitHub Repository"},
        ]
    },
]

export const defaultTagColor = "rgba(133, 133, 255, 0.35)";
export const activeTagColor = "rgba(212, 18, 18, 0.45)";