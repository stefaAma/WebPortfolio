import codingVideo from './video/coding_video.mp4';

export const projects = [
    {
        projectName: "Project-1",
        projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non accumsan odio. Duis a odio felis. Aliquam interdum enim felis, eu dignissim neque hendrerit non. In ac consectetur metus. Etiam maximus viverra magna non ornare. Proin a quam id lorem sodales tempor.",
        projectTags: ["tag1", "tag2"],
        links: [
            {linkUrl: codingVideo, linkType: "video", linkText: "link1"},
            {linkUrl: "#", linkType: "", linkText: "link2"}
        ]
    },
    {
        projectName: "Project-2",
        projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non accumsan odio. Duis a odio felis. Aliquam interdum enim felis, eu dignissim neque hendrerit non. In ac consectetur metus. Etiam maximus viverra magna non ornare. Proin a quam id lorem sodales tempor. Quisque a ante id diam tincidunt finibus non vel enim. Sed fermentum feugiat dapibus. Donec et diam neque.  Sed fermentum feugiat dapibus. Donec et diam neque.  Sed fermentum feugiat dapibus. Donec et diam neque.",
        projectTags: ["tag1"],
        links: [
            {linkUrl: "#", linkType: "", linkText: "link1"},
            {linkUrl: "#", linkType: "", linkText: "link2"}
        ]
    },
    {
        projectName: "Project-3",
        projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non accumsan odio. Duis a odio felis. Aliquam interdum enim felis, eu dignissim neque hendrerit non. In ac consectetur metus. Etiam maximus viverra magna non ornare. Proin a quam id lorem sodales tempor. Quisque a ante id diam tincidunt finibus non vel enim. Sed fermentum feugiat dapibus. Donec et diam neque.",
        projectTags: ["tag2"],
        links: [
            {linkUrl: "#", linkType: "", linkText: "link1"},
            {linkUrl: "#", linkType: "", linkText: "link2"}
        ]
    },
    {
        projectName: "Project-4",
        projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non accumsan odio. Duis a odio felis. Aliquam interdum enim felis, eu dignissim neque hendrerit non. In ac consectetur metus. Etiam maximus viverra magna non ornare. Proin a quam id lorem sodales tempor. Quisque a ante id diam tincidunt finibus non vel enim. Sed fermentum feugiat dapibus. Donec et diam neque.",
        projectTags: ["tag3"],
        links: [
            {linkUrl: "#", linkType: "", linkText: "link1"},
            {linkUrl: "#", linkType: "", linkText: "link2"},
            {linkUrl: "#", linkType: "", linkText: "link3"}
        ]
    },
]

export const defaultTagColor = "rgba(133, 133, 255, 0.35)";
export const activeTagColor = "rgba(212, 18, 18, 0.45)";