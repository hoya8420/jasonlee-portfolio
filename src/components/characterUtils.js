import React, { useEffect, useState, useRef } from "react";

// Helper functions
const randomValFromList = (list) =>
    list[Math.floor(Math.random() * list.length)];

const randomValFromRange = ({ min, max }) => Math.random() * (max - min) + min;

function map(value, low1, high1, low2, high2) {
    return low2 + ((high2 - low2) / (high1 - low1)) * (value - low1);
}


// Generates animation styles dynamically
export const createCharacterAnimation = () => {
    const palette = [
         "#9FC3A7", "#7296B3", "#C9D8A8", "#A7B8A0", "#355D48",  
"#EAD7A0", "#91B7A3", "#93A8A2", "#B7C9A3", "#4F7268", "#E3B891"

    ];

    return (element) => {
        // Select two random colors for the gradient
        const color1 = randomValFromList(palette);
        const color2 = randomValFromList(palette);

        // Generate a gradient between the two colors
        const gradient = `linear-gradient(45deg, ${color1}, ${color2})`;
        const borderRadius = randomValFromList([0,100]);
        const rotation = randomValFromList(["normal", "reverse"]);
        const rotationTime = randomValFromRange({ min: 2000, max: 5500 });
        const animationDuration = randomValFromRange({ min: 2000, max: 3000 });
        const scale = randomValFromRange({ min: 0.6, max: 2.1 });
        const left = randomValFromRange({ min: -2, max: 3 });
        const top = randomValFromRange({ min: -2, max: 2});
        const mixBlendMode = "hard-light";

        const zOrder = Math.round(Math.random() * 10);
        const blurRadius = zOrder < 5 ? map(zOrder, 0, 5, 0, 3) : 0;

        Object.assign(element.style, {
            display: "inline-block",
            color: "transparent",
            pointerEvents: "none",
            textAlign: "center",
            transform: "translate3d(0, 0, 0)", // GPU acceleration
            background: `linear-gradient(${color1}, ${color2})`,
            borderRadius: `${borderRadius}%`,
            filter: `blur(${blurRadius}px)`,
            animation: `linear infinite rotate ${rotationTime}ms`,
            animationDirection: rotation,
            scale: `${scale}`,
            top: `${top * element.offsetHeight}px`,
            left: `${left * element.offsetHeight}px`,
            mixBlendMode,
        });

        setTimeout(() => element.removeAttribute("style"), animationDuration);
    };
};

export const wrapCharsInSpans = (element, shapeAnimation) => {
    if (typeof element === "string") {
        return [...element].map((char, index) => {
            if (char === " ") {
                return " "; // Leave spaces unchanged
            } else {
                return (
                    <span
                        key={index}
                        className={"blooms"}
                        onMouseOver={(e) => shapeAnimation(e.target)}
                    >
                        {char}
                    </span>
                );
            }
        });
    }

    if (React.isValidElement(element)) {
        const children = React.Children.map(element.props.children, (child) =>
            wrapCharsInSpans(child, shapeAnimation)
        );

        return React.cloneElement(
            element,
            {
                style: {
                    ...element.props.style,
                    isolation: "inherit",
                },
            },
            children
        );
    }

    return element;
};

export const useTouchAnimation = (wrapperRef, animationFunction) => {
    const [currentTouchTarget, setCurrentTouchTarget] = useState(null);

    useEffect(() => {
        if (!wrapperRef.current) return;
        const wrapper = wrapperRef.current;

        const handleTouchEvent = (e, isMove = false) => {
            const touch = e.touches[0];
            const elementUnderTouch = document.elementFromPoint(
                touch.clientX,
                touch.clientY
            );

            const isValidTarget =
                elementUnderTouch &&
                wrapper.contains(elementUnderTouch) &&
                elementUnderTouch.tagName === "SPAN" &&
                elementUnderTouch.classList.contains("blooms");

            if (isValidTarget) {
                if (isMove) {
                    e.preventDefault();
                    if (elementUnderTouch !== currentTouchTarget) {
                        setCurrentTouchTarget(elementUnderTouch);
                        animationFunction(elementUnderTouch);
                    }
                } else {
                    setCurrentTouchTarget(elementUnderTouch);
                    animationFunction(elementUnderTouch);
                }
            } else if (isMove) {
                setCurrentTouchTarget(null);
            }
        };

        const handleTouchMove = (e) => handleTouchEvent(e, true);
        const handleTouchStart = (e) => handleTouchEvent(e);
        const handleTouchEnd = () => setCurrentTouchTarget(null);

        document.addEventListener("touchmove", handleTouchMove);
        document.addEventListener("touchstart", handleTouchStart);
        document.addEventListener("touchend", handleTouchEnd);

        return () => {
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchend", handleTouchEnd);
        };
    }, [currentTouchTarget, animationFunction, wrapperRef]);
};
