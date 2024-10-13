import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Import necessary hooks
import { animate } from 'framer-motion';

// Function to scroll to a specific section using Framer Motion's animate
const scrollToSection = (targetId, duration = 1) => {
    const target = document.getElementById(targetId);
    if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;

        animate(startPosition, targetPosition, {
            duration: 0.05,  // Scroll duration in seconds
            onUpdate: (latest) => window.scrollTo(0, latest),
            ease: 'easeInOut',
        });
    }
};

// Handle scrolling to top or navigating back to home
const handleScrollToTop = (navigate, location) => {
    // Check if we're not already on the home page
    if (location.pathname !== '/') {
        // Navigate to the home page
        navigate('/');
    } else {
        // Scroll to the top of the page if we're already on the home page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [scrollTarget, setScrollTarget] = useState(null); // Track target section after navigation

    // Scroll to the desired section after navigation
    useEffect(() => {
        if (scrollTarget) {
            scrollToSection(scrollTarget);
            setScrollTarget(null); // Reset the scroll target after scrolling
        }
    }, [location, scrollTarget]);

    // Handle scrolling to the "Work" section
    const handleScrollToWork = (e) => {
        e.preventDefault();

        if (location.pathname !== '/') {
            // If we're not on the home page, navigate to it first
            setScrollTarget('work');
            navigate('/');
        } else {
            // Directly scroll to the "work" section if on the home page
            scrollToSection('work');
        }
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="name">
                    {/* Link to navigate to the home page and scroll to top */}
                    <Link to="/" onClick={() => handleScrollToTop(navigate, location)}>Jason Lee</Link>
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
                    <Link className="navbar-link" onClick={() => window.open("https://hoya-portfolio.s3.us-east-2.amazonaws.com/home/resume-online.pdf", "_blank", "noopener,noreferrer")}>
                        Resume
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
