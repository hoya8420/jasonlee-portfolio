// import React from 'react';
// import { Link } from 'react-router-dom';  // Import Link from react-router-dom
// import { animate } from "framer-motion";


// const scrollToSection = (targetId, duration = 1) => {
//     const target = document.getElementById(targetId);
//     const targetPosition = target.getBoundingClientRect().top + window.scrollY;
//     const startPosition = window.scrollY;

//     // Use Framer Motion's animate to smoothly scroll at a constant speed
//     animate(startPosition, targetPosition, {
//         duration: duration,  // Set the duration of the scroll (in seconds)
//         onUpdate: (latest) => window.scrollTo(0, latest),
//         ease: "easeOut",      // Constant speed throughout the transition
//     });
// };


// const Header = () => {
//     return (
//         <header className="header">
//             <div className="header-content">
//                 <div className="name">
//                     {/* Use Link for internal navigation to the home page */}
//                     <Link to="/">Jason Lee</Link>
//                 </div>
//                 <nav className="nav">
//                     {/* Use Link for smooth internal navigation */}
//                     <Link
//                         className="navbar-link bump-left mobile-gone"
//                         id="pointer"
//                         to="#work"
//                         onClick={(e) => {
//                             e.preventDefault(); // Prevent default behavior of the anchor link
//                             scrollToSection("work", .08); // Scroll to 'work' section with a 2-second duration
//                         }}
//                     >
//                         Work
//                     </Link>
//                     <Link className="navbar-link bump-left" to="/about">About</Link>
//                     <Link className="navbar-link" to="/#resume">Resume</Link>
//                 </nav>
//             </div>
//         </header>
//     );
// }

// export default Header;


import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';  // Import necessary hooks
import { animate } from 'framer-motion';

const scrollToSection = (targetId, duration = 1) => {
    const target = document.getElementById(targetId);
    if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;

        // Use Framer Motion's animate to smoothly scroll to the target
        animate(startPosition, targetPosition, {
            duration: .01,  // Scroll duration in seconds
            onUpdate: (latest) => window.scrollTo(0, latest),
            ease: 'easeIn',
        });
    }
};
const handleScrollToTop = (event) => {
    event.preventDefault(); // Prevent the default link behavior

    // Check if the window is already at the top
    if (window.scrollY === 0) {
        // If at the top, navigate to /#home
        window.location.href = '/#home';
    } else {
        // If not at the top, set scroll-behavior to auto for instant scrolling
        document.documentElement.style.scrollBehavior = 'auto';
        
        // Scroll to the top instantly
        window.scrollTo(0, 0);
        
        // Optionally reset scroll behavior back to smooth
        setTimeout(() => {
            document.documentElement.style.scrollBehavior = 'smooth';
        }, 0);
    }
};


const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [scrollTarget, setScrollTarget] = useState(null); // State to track target section after navigation

    // Detect page changes and scroll to section when needed
    useEffect(() => {
        if (scrollTarget) {
            scrollToSection(scrollTarget);
            setScrollTarget(null); // Reset the scroll target after scrolling
        }
    }, [location, scrollTarget]);

    const handleScrollToWork = (e) => {
        e.preventDefault(); // Prevent default link behavior

        if (location.pathname !== '/') {
            // If not on the home page, navigate to home and set the target section
            setScrollTarget('work');
            navigate('/'); // Navigate to home page
        } else {
            // If already on the home page, directly scroll to the "work" section
            scrollToSection('work');
        }
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="name">
                    <Link to="/#home" onClick={handleScrollToTop}>Jason Lee</Link>
                </div>
                <nav className="nav">
                    {/* Scroll to "Work" section when clicked */}
                    <Link
                        className="navbar-link bump-left mobile-gone"
                        to="/#work"
                        onClick={handleScrollToWork}
                    >
                        Work
                    </Link>
                    <Link className="navbar-link bump-left" to="/about">About</Link>
                    <Link className="navbar-link"  onClick={() => window.open("https://hoya-portfolio.s3.us-east-2.amazonaws.com/home/resume-online.pdf", "_blank", "noopener,noreferrer")}>Resume</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
