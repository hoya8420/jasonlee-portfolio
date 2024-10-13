import React from 'react';

const Hero = () => {
    return (

        <main className="skinny">
            <section className="hero">
                <div className="intro1">
                    <div id="bump">Hi, I'm Jason.</div>
                    {/* <div>I like to create things, shape things, and help others discover and further their things.</div> */}
                    <div>I like to help discover and shape ideas into great looking products.</div> 
                    
                    {/* <div>I bring human-centered design to emerging technologies & industries. </div> */}
                </div>
                <div className="intro2">
                    I am currently a student @ <span className="underline"><a href="https://www.cornell.edu/" target="_blank" id="school">Cornell University</a></span>.
                </div>
            </section>
        </main>
    );
}
export default Hero;