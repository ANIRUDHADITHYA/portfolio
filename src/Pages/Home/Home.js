import Navbar from "../../Components/Navabr/Navbar";
import "./Home.css";
import Typewriter from 'typewriter-effect';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';
const Home = () => {
    return (
        <div>
            <section className="home">
                <div className="home-content">
                    <h1>Hi, I'm Anirudh Adithya</h1>
                    <Typewriter
                        options={{
                            strings: ['Frontend Developer', 'Designer', 'Freelancer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    {/*<Grow in={true} timeout={{
                        appear: 2500,
                        enter: 2500,
                        exit: 3000,
                    }}>
                        <p>
                            Learning new technologies to solve the most complex business problem while fulfilling the objectives and goals of an organization. Independent and Self-Motivated Student skilled in React.js, Next.js, Javascript C and C++. I want to become a key player in challenging and creative environments.
                            I've worked on various projects as a freelancer and mastered multiple web programming languages and coding.
                        </p>
                </Grow>*/}
                    <div className="btn-box">
                        <Zoom in={true} timeout={{
                            appear: 500,
                            enter: 1200,
                            exit: 2000,
                        }}>
                            <a href="#">Hire Me</a>

                        </Zoom>
                        <Zoom in={true} timeout={{
                            appear: 500,
                            enter: 1200,
                            exit: 2000,
                        }}>
                            <a href="#">Download Resume</a>

                        </Zoom>

                        


                    </div>
                </div>
                <Slide direction="up" in={true} timeout={{
                    appear: 300,
                    enter: 1000,
                    exit: 2000,
                }}>
                    <div className="home-sci">
                        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    </div>

                </Slide>

                <span className="home-imgHover">

                </span>
            </section>
        </div>
    )
}


export default Home;