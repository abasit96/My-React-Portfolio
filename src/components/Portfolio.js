import React from 'react';
import Project from './Project';

function Portfolio(props) {

    const projectArr = [
        {
            title: "Title 1",
            image: "https://via.placeholder.com/350x150",
            github: "http://github.com",
            deployed: "http://google.com"
        },
        {
            title: "Title 2",
            image: "https://via.placeholder.com/350x150",
            github: "http://github.com",
            deployed: "http://google.com"
        },
        {
            title: "Title 3",
            image: "https://via.placeholder.com/350x150",
            github: "http://github.com",
            deployed: "http://google.com"
        }
    ]

    return (
        <>
            <h1>This is the Portfolio Page</h1>
            {
                projectArr.map(project => {
                    return <Project project={project}/>
                })
            }
        </>

    );
}

export default Portfolio;