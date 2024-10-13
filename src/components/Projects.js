// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import ProjectCard from './ProjectCard'


// const Projects = () => {
//     const [buttonStyle, setButtonStyle] = useState({ backgroundColor: '#ffffff', color: '#000000' })

//     return (

//         <main className="skinny">
//             <section className="work" id="work">
//                 <h2 className="section-title">Selected product work... </h2>
//                 <motion.div
//                     className="project-wrapper fade-in appear backgroundOut"
//                     style={{ backgroundColor: 'rgba(216, 216, 216, 0)' }}
//                     whileHover={{ backgroundColor: 'rgba(240, 240, 240, 1)' }} // Change background color on hover
//                     transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth transition for the div
//                     onHoverStart={() => {
//                         setButtonStyle({ backgroundColor: '#000000', color: '#ffffff' });
//                     }}
//                     onHoverEnd={() => {
//                         setButtonStyle({ backgroundColor: '#ffffff', color: '#000000' });
//                     }}
//                 >
//                     <a className="project-content" href="/dflkjfdlfjk">
//                         <div className="project-image">
//                             <img className="image" src="img/snapsave_thumbnail.png" alt="Project Thumbnail" />
//                         </div>
//                         <div className="project-text">
//                             <div>
//                                 <div className="project-title">Order-Tracking for a Cannabis Delivery Platform</div>
//                                 <div className="project-subtitle">Firebird Delivery, 2022</div>
//                             </div>
//                             <div>
//                                 <div className="project-description module line-clamp">
//                                     Designing the order-tracking interface for Canada's first online cannabis delivery service.
//                                 </div>
//                                 <div className="project-skills mobile-gone">user research, wireframing...</div>
//                                 <motion.button
//                                     className="project-button mobile-gone button-exit"
//                                     style={buttonStyle}
//                                 >
//                                     View Project
//                                 </motion.button>
//                             </div>
//                         </div>
//                     </a>
//                 </motion.div>

//                 <motion.div
//                     className="project-wrapper fade-in appear backgroundOut"
//                     style={{ backgroundColor: 'rgba(216, 216, 216, 0)' }}
//                     whileHover={{ backgroundColor: 'rgba(240, 240, 240, 1)' }} // Change background color on hover
//                     transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth transition for the div
//                     onHoverStart={() => {
//                         setButtonStyle({ backgroundColor: '#000000', color: '#ffffff' });
//                     }}
//                     onHoverEnd={() => {
//                         setButtonStyle({ backgroundColor: '#ffffff', color: '#000000' });
//                     }}
//                 >
//                     <a className="project-content" href="/dflkjfdlfjk">
//                         <div className="project-image">
//                             <img className="image" src="img/snapsave_thumbnail.png" alt="Project Thumbnail" />
//                         </div>
//                         <div className="project-text">
//                             <div>
//                                 <div className="project-title">Order-Tracking for a Cannabis Delivery Platform</div>
//                                 <div className="project-subtitle">Firebird Delivery, 2022</div>
//                             </div>
//                             <div>
//                                 <div className="project-description module line-clamp">
//                                     Designing the order-tracking interface for Canada's first online cannabis delivery service.
//                                 </div>
//                                 <div className="project-skills mobile-gone">user research, wireframing...</div>
//                                 <motion.button
//                                     className="project-button mobile-gone button-exit"
//                                     style={buttonStyle}
//                                 >
//                                     View Project
//                                 </motion.button>
//                             </div>
//                         </div>
//                     </a>
//                 </motion.div>

//                 <motion.div
//                     className="project-wrapper fade-in appear backgroundOut"
//                     style={{ backgroundColor: 'rgba(216, 216, 216, 0)' }}
//                     whileHover={{ backgroundColor: 'rgba(240, 240, 240, 1)' }} // Change background color on hover
//                     transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth transition for the div
//                     onHoverStart={() => {
//                         setButtonStyle({ backgroundColor: '#000000', color: '#ffffff' });
//                     }}
//                     onHoverEnd={() => {
//                         setButtonStyle({ backgroundColor: '#ffffff', color: '#000000' });
//                     }}
//                 >
//                     <a className="project-content" href="/dflkjfdlfjk">
//                         <div className="project-image">
//                             <img className="image" src="img/snapsave_thumbnail.png" alt="Project Thumbnail" />
//                         </div>
//                         <div className="project-text">
//                             <div>
//                                 <div className="project-title">Order-Tracking for a Cannabis Delivery Platform</div>
//                                 <div className="project-subtitle">Firebird Delivery, 2022</div>
//                             </div>
//                             <div>
//                                 <div className="project-description module line-clamp">
//                                     Designing the order-tracking interface for Canada's first online cannabis delivery service.
//                                 </div>
//                                 <div className="project-skills mobile-gone">user research, wireframing...</div>
//                                 <motion.button
//                                     className="project-button mobile-gone button-exit"
//                                     style={buttonStyle}
//                                 >
//                                     View Project
//                                 </motion.button>
//                             </div>
//                         </div>
//                     </a>
//                 </motion.div>
//             </section>
//         </main >

//     );
// }

// export default Projects;


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const Projects = () => {
//     const [buttonStyles, setButtonStyles] = useState([
//         { backgroundColor: '#ffffff', color: '#000000' },
//         { backgroundColor: '#ffffff', color: '#000000' },
//         { backgroundColor: '#ffffff', color: '#000000' },
//     ]);

//     const handleHoverStart = (index) => {
//         const newButtonStyles = [...buttonStyles];
//         newButtonStyles[index] = { backgroundColor: '#000000', color: '#ffffff' };
//         setButtonStyles(newButtonStyles);
//     };

//     const handleHoverEnd = (index) => {
//         const newButtonStyles = [...buttonStyles];
//         newButtonStyles[index] = { backgroundColor: '#ffffff', color: '#000000' };
//         setButtonStyles(newButtonStyles);
//     };

//     return (
//         <main className="skinny">
//             <section className="work" id="work">
//                 <h2 className="section-title">Selected product work... </h2>
//                 {[0, 1, 2].map((projectIndex) => (
//                     <motion.div
//                         key={projectIndex}
//                         className="project-wrapper fade-in appear backgroundOut"
//                         style={{ backgroundColor: 'rgba(216, 216, 216, 0)' }}
//                         whileHover={{ backgroundColor: 'rgba(240, 240, 240, 1)' }} // Change background color on hover
//                         transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth transition for the div
//                         onHoverStart={() => handleHoverStart(projectIndex)}
//                         onHoverEnd={() => handleHoverEnd(projectIndex)}
//                     >
//                         <a className="project-content" href="/dflkjfdlfjk">
//                             <div className="project-image">
//                                 <img className="image" src="img/snapsave_thumbnail.png" alt="Project Thumbnail" />
//                             </div>
//                             <div className="project-text">
//                                 <div>
//                                     <div className="project-title">SnapSave</div>
//                                     <div className="project-subtitle">A Spending Tool Designed For College Students</div>
//                                 </div>
//                                 <div>
//                                     <div className="project-description module line-clamp">
//                                         Designing the order-tracking interface for Canada's first online cannabis delivery service.
//                                     </div>
//                                     <div className="project-skills mobile-gone">user research, wireframing...</div>
//                                     <motion.button
//                                         className="project-button mobile-gone button-exit"
//                                         style={buttonStyles[projectIndex]}
//                                     >
//                                         View Project
//                                     </motion.button>
//                                 </div>
//                             </div>
//                         </a>
//                     </motion.div>
//                 ))}
//             </section>
//         </main>
//     );
// };

// export default Projects;
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom for navigation

const Projects = () => {
    const [buttonStyles, setButtonStyles] = useState([
        { backgroundColor: '#ffffff', color: '#000000' },
        { backgroundColor: '#ffffff', color: '#000000' },
        { backgroundColor: '#ffffff', color: '#000000' },
    ]);

    // Create an array for your projects
    const projects = [
        {
            title: 'Snap Save',
            subtitle: '2024',
            description: 'Mobile app designed to transform everyday spending into smarter financial decisions for students.',
            skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Interactive Design"],
            imageSrc: 'https://hoya-portfolio.s3.us-east-2.amazonaws.com/home/snapsave_thumbnail.png',
            link: '/snapsave',  // Use Link for navigation without #
        },
        {
            title: 'Cornell CIS PhD Visit Day',
            subtitle: '2023',
            description: 'Assisting prospective PhD students with their Cornell University campus visit day experience.',
            skills: ["User Research", "User Interview", "Wireframing", "Prototyping"],
            imageSrc: 'https://hoya-portfolio.s3.us-east-2.amazonaws.com/home/phd_cover2.png',
            link: '/phd',  // Use Link for navigation without #
        },
        {
            title: '[WIP] \nCampaign Weathervane Redesign',
            subtitle: 'Roper Center, 2024',
            description: 'Currently collaborating with my peers to bring new life to the user experience and the visuals of the educational game.',
            skills: ["User Research", "User Interview", "Wireframing", "Usability Testing", "Prototyping", "Branding"],
            imageSrc: 'https://hoya-portfolio.s3.us-east-2.amazonaws.com/home/roper_cover2.png',
            link: '',  // No link for this upcoming project
        },
    ];

    const handleHoverStart = (index) => {
        const newButtonStyles = [...buttonStyles];
        newButtonStyles[index] = { backgroundColor: '#000000', color: '#ffffff' };
        setButtonStyles(newButtonStyles);
    };

    const handleHoverEnd = (index) => {
        const newButtonStyles = [...buttonStyles];
        newButtonStyles[index] = { backgroundColor: '#ffffff', color: '#000000' };
        setButtonStyles(newButtonStyles);
    };

    return (
        <main className="skinny">
            <section className="work" id="work">
                <h2 className="section-title">Selected/Upcoming Work... </h2>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-wrapper fade-in appear backgroundOut"
                        style={{ backgroundColor: '#ffffff' }}
                        whileHover={{ backgroundColor: '#F3F3F3' }}
                        transition={{ duration: 0.4, ease: 'easeIn' }}
                        onHoverStart={() => handleHoverStart(index)}
                        onHoverEnd={() => handleHoverEnd(index)}
                    >
                        {/* Use the Link component from react-router-dom for navigation */}
                        {project.link ? (
                            <Link
                                to={project.link}  // Use to for navigation
                                className="project-content"
                            >
                                <div className="project-image">
                                    <img className="image" src={project.imageSrc} alt="Project Thumbnail" />
                                </div>
                                <div className="project-text">
                                    <div>
                                        <div className="project-title">{project.title}</div>
                                        <div className="project-subtitle">{project.subtitle}</div>
                                    </div>
                                    <div>
                                        <div className="project-description module line-clamp">
                                            {project.description}
                                        </div>
                                        <div className="project-skills mobile-gone">
                                            {project.skills.map((skill, idx) => (
                                                <span key={idx} className="skill-badge">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                        <motion.button
                                            className="project-button mobile-gone button-exit"
                                            style={buttonStyles[index]}
                                        >
                                            View Project
                                        </motion.button>
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            <div className="project-content">
                                <div className="project-image">
                                    <img className="image" src={project.imageSrc} alt="Project Thumbnail" />
                                </div>
                                <div className="project-text">
                                    <div>
                                        <div className="project-title">{project.title}</div>
                                        <div className="project-subtitle">{project.subtitle}</div>
                                    </div>
                                    <div>
                                        <div className="project-description module line-clamp">
                                            {project.description}
                                        </div>
                                        <div className="project-skills mobile-gone">
                                            {project.skills.map((skill, idx) => (
                                                <span key={idx} className="skill-badge">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </section>
        </main>
    );
}

export default Projects;
