import React, { useEffect, useState, useRef } from "react";
import { createCharacterAnimation, wrapCharsInSpans, useTouchAnimation } from "./characterUtils";

const CharacterWrapper = ({ children }) => {
  const animationFunction = createCharacterAnimation();
  const wrapperRef = useRef();

  // Apply touch event handling using custom hook
  useTouchAnimation(wrapperRef, animationFunction);

  return (
    <>
      {/* Component with split characters for animation */}
      <span
        ref={wrapperRef}
        aria-hidden="true"
        style={{ isolation: "isolate" }} // Prevents blending from background
      >
        {wrapCharsInSpans(children, animationFunction)}
      </span>
      {/* Copy of original component for screen readers */}
      <span className="sr-only"></span>
    </>
  );
};

export default CharacterWrapper;
