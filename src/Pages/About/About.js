import "./About.css";

const About = () => {
    return (
            <div className="about-container">
                <h2>About <span className="about-me-me">Me</span></h2>
                <div className="about-img">
                    <img src={`https://media.licdn.com/dms/image/C5603AQEU3JGz_n9tKw/profile-displayphoto-shrink_800_800/0/1659232534856?e=1688601600&v=beta&t=oyYVSf-2_3owz6eYv4mnLoenJ2bPf9eDpnlpJ5UfrP4`} alt=""></img>
                    <span className="circle-span"></span>
                </div>
                <div className="about-content">
                    <h1>Hi there, I'm <span>Anirudh Adithya</span></h1>
                    <p>I am an independent and self-motivated student skilled in React.js, Next.js, Javascript, C, and C++. Through my work as a freelancer and intern, I have gained valuable experience in tackling diverse projects. My aim is to contribute my expertise to challenging and innovative environments.</p>
                </div>
            </div>
    )
}


export default About;