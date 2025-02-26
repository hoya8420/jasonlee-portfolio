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
            duration, // Scroll duration in seconds
            onUpdate: (latest) => window.scrollTo(0, latest),
            ease: 'easeInOut',
        });
    }
};

// Handle scrolling to top or navigating back to home
const handleScrollToTop = (navigate, location) => {
    if (location.pathname !== '/') {
        navigate('/');
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [scrollTarget, setScrollTarget] = useState(null); // Track target section after navigation

    // State for managing header visibility on scroll
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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
            setScrollTarget('work'); // If not on home, set target for scroll after navigating
            navigate('/');
        } else {
            scrollToSection('work'); // Scroll to "Work" section directly if on home page
        }
    };

    // Handle scroll behavior to hide/show header based on scroll direction
    const handleScroll = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 20) {
            setShowHeader(false); // Hide header when scrolling down
        } else {
            setShowHeader(true); // Show header when scrolling up
        }
        setLastScrollY(window.scrollY); // Update last scroll position
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`header ${showHeader ? 'visible' : 'hidden'}`}>
            <div className="header-content">
                <div className="name">
                    {/* Link to navigate to the home page and scroll to top */}
                    <Link to="/" onClick={() => handleScrollToTop(navigate, location)}>
                        Jason Lee
                    </Link>
                </div>
                <nav className="nav">
                    {/* Apply underline class conditionally based on the current location */}
                    <Link
                        className={`navbar-link bump-left mobile-gone ${location.pathname === '/#work' ? 'active' : ''}`}
                        to="/#work"
                        onClick={handleScrollToWork}
                    >
                        Work
                    </Link>

                    <Link
                        className={`navbar-link bump-left ${location.pathname === '/about' ? 'active' : ''}`}
                        to="/about"
                    >
                        About
                    </Link>

                    <Link
                        className={`navbar-link ${location.pathname === '/resume' ? 'active' : ''}`}
                        onClick={() =>
                            window.open(
                                "https://hoya-portfolio.s3.us-east-2.amazonaws.com/home/website_resume.pdf",
                                "_blank",
                                "noopener,noreferrer"
                            )
                        }
                    >
                        Resume
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
