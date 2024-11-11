
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
            title: 'Are:na',
            subtitle: '2024',
            description: 'Reimagining Are.na, a place to save content, connect ideas, and create collections over time.',
            skills: ["User Research", "Wireframing", "Prototyping", "Interaction Design","Branding"],
            imageSrc: 'https://hoya-portfolio.s3.us-east-2.amazonaws.com/home/arena_final_home.png',
            link: '/arena',  // No link for this upcoming project
        },
        {
            title: 'Snap Save',
            subtitle: '2024',
            description: 'Mobile app designed to transform everyday spending into smarter financial decisions for students.',
            skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Interactive Design"],
            imageSrc: 'https://hoya-portfolio.s3.us-east-2.amazonaws.com/home/snapsave1.png',
            link: '/snapsave',  // Use Link for navigation without #
        },
        {
            title: 'Cornell CIS PhD Visit Day',
            subtitle: '2023',
            description: 'Assisting prospective PhD students with their Cornell University campus visit day experience.',
            skills: ["User Research", "User Interview", "Wireframing", "Prototyping"],
            imageSrc: 'https://hoya-portfolio.s3.us-east-2.amazonaws.com/home/phd1.png',
            link: '/phd',  // Use Link for navigation without #
        },
        {
            title: 'WIP | Campaign Weathervane Redesign',
            subtitle: '2024',
            description: 'Currently collaborating with my peers to bring new life to the user experience and the visuals of the educational game.',
            skills: ["User Research", "User Interview", "Wireframing", "Usability Testing", "Prototyping", "Branding"],
            imageSrc: 'https://hoya-portfolio.s3.us-east-2.amazonaws.com/home/roper_final.png',
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
            <section className="work grid-container" id="work">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-wrapper fade-in appear backgroundOut"
                        // style={{ backgroundColor: '#ffffff' }}
                        // whileHover={{ backgroundColor: '#F3F3F3' }}
                        // transition={{ duration: 0.4, ease: 'easeIn' }}
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
                                    <img className="image" loading="lazy" src={project.imageSrc} alt="Project Thumbnail" />
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
                            </Link>
                        ) : (
                            <div className="project-content">
                                <div className="project-image">
                                    <img className="image"  loading="lazy" src={project.imageSrc} alt="Project Thumbnail" />
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
