import React from 'react';

const Hero = () => {
    return (

        <main className="skinny" id="skinny-hero">
                <div className="div-hero">
                    <section className="hero">
                        <div className="hero-div">
                            <div className="intro-text">
                                <div className="intro1">
                                    <div id="bump">Hello! I'm Jason.</div>

                                    <div>I really enjoy discovering and shaping good ideas into great looking products.</div>
                                    {/* <div>I really enjoy helping others create things, shape things, and help others discover and further their things.</div> */}
                                    {/* <div>I really enjoy helping to discover and shape ideas into great looking products.</div> */}

                                    {/* <div>I bring human-centered design to emerging technologies & industries. </div> */}
                                </div>
                                <div className="intro2">
                                    I am currently a student @ <span className="underline"><a href="https://www.cornell.edu/" target="_blank" id="school">Cornell University</a></span>.
                                </div>
                            </div>
                            {/* <div className="intro-image">
                        <img src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/home/Screenshot+2024-10-21+at+10.08.53%E2%80%AFPM.png"></img>
                    </div> */}
                        </div>
                    </section>
                </div>
        </main>
    );
}
export default Hero;