import React, { useEffect, useState } from "react";

const RiverComponent = () => {
    const initialStrings = [
        "-      -     -     -       -       -      -   -         -      --   --     -     -      -⛵️-[]-         -     -         -       -          -      - --     -         -    -    ",
        "   ---   -- -   --     --    --    --       --    ---    --         --   ---    ---   -- -        --    --    --       -⛵️-[]-    ---    --         --   -    --    ",
        "    ---       ---   ----     ---      ---       --  -⛵️-[]-  ----   ---     ----    ---       ---   ----     ---      ---       --  ---  ---- -- ---     ---",
        "-----     ----  ----  --⛵️-[]-   ----        ----    ---  ----    ----    ----    ----    -----     ---  ----  ---   ----        ----    ---  ----    -----  ---    ---",
    ];

    function updateString(str) {
        return str.slice(1) + str.slice(0, 1);
    }

    const intervals = [997, 859, 571, 293];

    const [stringsArray, setStringsArray] = useState(initialStrings);

    useEffect(() => {
        const intervalIds = stringsArray.map((string, index) => {
            const intervalId = setInterval(() => {
                setStringsArray((prevStrings) => {
                    const updatedStrings = [...prevStrings];
                    updatedStrings[index] = updateString(updatedStrings[index]);
                    return updatedStrings;
                });
            }, intervals[index]);

            return intervalId;
        });

        return () => {
            intervalIds.forEach(clearInterval);
        };
    }, []);

    function changeSymbolToApproximately(event, char) {
        const approximatedChar = "≈";
        const applicableChars = ["-", " "];
        if (!applicableChars.includes(char)) return;

        const approximatedQueue = [];
        if (approximatedQueue.length >= 4) {
            const leastRecentElement = approximatedQueue.shift();
            leastRecentElement.textContent = leastRecentElement.dataset.originalSymbol;
        }

        event.target.dataset.originalSymbol = char;
        event.target.textContent = approximatedChar;
        approximatedQueue.push(event.target);

        setTimeout(() => {
            event.target.textContent = char;
            const index = approximatedQueue.indexOf(event.target);
            if (index !== -1) {
                approximatedQueue.splice(index, 1);
            }
        }, 400);
    }

    function wrapCharactersInSpan(str) {
        return str.split("").map((char, index) => (
            <span
                key={index}
                className="animated-char"
                onMouseOver={(event) => changeSymbolToApproximately(event, char)}
            >
                {char}
            </span>
        ));
    }

    function getSVG(index) {
        switch (index) {
            case 0:
                return <img className="inline-emoji" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/river/txt.svg" alt="txt" />;
            case 1:
                return <img className="inline-emoji" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/river/psd.svg" alt="psd" />;
            case 2:
                return <img className="inline-emoji" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/river/fig.svg" alt="fig" />;
            case 3:
                return <img className="inline-emoji" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/river/Apple_Music_icon.svg" alt="Apple Music" />;
            default:
                return null;
        }
    }

    function checkAndInsertSvg(string, index) {
        const openBracketIndex = string.indexOf("[");
        if (openBracketIndex !== -1) {
            const closeBracketIndex = string.indexOf("]", openBracketIndex + 1);
            if (closeBracketIndex !== -1) {
                return (
                    <>
                        {wrapCharactersInSpan(string.slice(0, openBracketIndex + 1))}
                        <span className="inline-emoji">{getSVG(index)}</span>
                        {wrapCharactersInSpan(string.slice(closeBracketIndex))}
                    </>
                );
            }
        }
        return wrapCharactersInSpan(string);
    }

    return (
        <main className="skinny">
            <div className="hero-river">
                <div className="riverSketch">
                    {stringsArray.map((string, index) => (
                        <div key={index} className="vertical-text">
                            {checkAndInsertSvg(string, index)}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default RiverComponent;
