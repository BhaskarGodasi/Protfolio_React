import React from 'react';
import './About.css';
import Image from '../../assets/avatar-4.svg';
import Resume from '../../assets/Bhaskar_MERN_Stack_resume-1.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
              
    <div className="about__info">
        <p className="about__description">
            Hello! I'm Bhaskar Godasi, a Junior Full Stack Developer based in Hyderabad, India. 
            With 2 years of experience in MERN stack development, I have a strong passion for building dynamic, user-friendly, and scalable web applications.<br /><br />
            Currently, I am working at ZeoMinds IT Solutions Pvt. Ltd., where I have contributed to major EdTech projects, improving user engagement through interactive dashboards, real-time analytics, and optimized APIs.<br /><br />
            My focus these days is on expanding my expertise in full-stack development, learning new technologies, and mentoring aspiring developers to help them build real-world projects.<br /><br />
            Here are a few technologies I’ve been working with recently:
        </p>
        <ul className="about__list">
            <li>React.js</li>
            <li>Redux & Context API</li>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript (Basic)</li>
            <li>Node.js & Express.js</li>
            <li>MongoDB</li>
            <li>RESTful APIs</li>
            <li>Chart.js</li>
            <li>Jest & React Testing Library</li>
        </ul>
        <button className="btn" onClick={downloadResume}>Download CV</button>
    </div>



                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About