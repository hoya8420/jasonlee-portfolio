import Header from './components/Header';  // Import Header component
import Footer from './components/Footer';  // Import Footer component
import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import './App.css';

function Arena() {

    const FIRST_IMAGE = {
        imageUrl: 'https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/Group+13440.png'
    };
    const SECOND_IMAGE = {
        imageUrl: 'https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/Group+13439.png'
    };

    const delimiterIconStyles = {
        width: '0px',
        height: '0px',
        backgroundSize: 'cover',
        borderRadius: '50%', // Makes it a circular icon
        backgroundColor: '#fff', // Optional: sets a background color
    };
    return (
        <main >
            <div className="project-writeup broad">
                <div className="project-intro">
                    <h1>Are.na Redesign</h1>
                    <h2>Rethinking Are.na for Effortless Flow</h2>
                </div>
                <div className="image-container2">
                    <img id="image-header" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/arena_hero.png">
                    </img>
                </div>
                <div className="content--block--arena">
                    <div className="content--main--arena">
                        <div className="content--subdivide">
                            <div className="content--subdivision--big">
                                <p className='bolld'><b>Team</b></p>
                                <p>Independent Project</p>
                            </div>
                            <div id="intro" className="content--subdivision-medium">
                                <p className='bolld'><b>Skills</b></p>
                                <p>User Research, Wireframing, Prototyping, Interface Design, SwiftUI</p>
                            </div>
                            <div className="content--subdivision-small">
                                <p className='bolld'><b>Duration</b></p>

                                <p>3 months</p>
                            </div>
                        </div>
                        <p className='bold'><b>Background</b></p>
                        <p className="project-writeup-description-arena">

                            Are.na is a place to save content, connect ideas, and create collections over time.

                            <br /><br />
                            Users primarily interact with blocks, which are pieces of content containing images, videos, pdfs and more. These blocks can be added to various collections, which are known as channels. This process is called “connecting”.

                            <br /><br />
                            This model of building webs of knowledge over time has led the community to describe it as “a garden of ideas”, or “playlists, but for ideas”. For me, it acts as my digital notebook of inspiration and ideas, and I use it almost everyday.</p>

                    </div>
                    <div className="arena-container arena-media-div">
                        <video className=" arena-media-id" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/scrolling+(2).mp4"
                            loading="lazy" playsInline autoPlay loop></video>
                    </div>
                </div>
                <div className="content--block--arena">
                    <div className="content--main--arena inbetween">
                        <p>In May 2024, I was in the process of learning SwiftUI &#40;still am unfortunately&#41; and brainstorming project ideas to practice my skills. The Are.na mobile app came to mind, as it felt just slightly under-realized in certain aspects.</p>
                    </div>
                    <div className="arena-container arena-media-div ">
                        <img className=" arena-media" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/current-feedback+(2).webp"></img>
                    </div>
                    <div className="content--main--arena">
                        <p className="inbetween-media">It's built with React Native, which is known to be less performant than native solutions, with more compatibility issues as well. So I found myself thinking that this could be a good opportunity to build a new iOS app for Are.na with SwiftUI.
                        </p>
                    </div>
                </div>
                <div className="content--block--arena  ">
                    <div className="content--main--arena--inbetween">
                        <p className="bold"><b>The Current Are.na Mobile App</b></p>
                        <div className="content--main--arena inbetween" >
                            <p className>
                                In terms of feature parity, the current Are.na app is more or less on par with the web client. It's serviceable, but I found myself only using it to check my feed and notifications, and occasionally connecting things.
                            </p>
                        </div>

                        <div className="arena-container arena-media-div" id="arena-media-div">
                            <video className=" arena-media-id" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/current+(1).mp4"
                                loading="lazy" playsInline autoPlay loop></video>
                        </div>
                    </div>
                    <div className="content--main-arena">
                        <p> I'm not inclined to do anything outside of that because of the aforementioned performance issues and bugs. There's also friction involved with the workflows I'm most interested in, namely diving into rabbit holes, connecting things quickly, browsing blocks, and saving images.


                            With those in mind, I began hashing out some ideas, bug fixes and quality-of-life improvements that I wanted to work on. </p>
                    </div>
                </div>
                <div className="content--block--arena  ">
                    <div className="content--main--arena">
                        <p className="bold"><b>Feedback and Feature Requests</b></p>
                        <div className="content--main--arena inbetween" >
                            <p className="content--main--arena inbetween">
                                There is a public channel set up by Are.na for feedback and feature requests, which acts as a forum for users to express what they want to see fixed and/or implemented. I kept it close by as a reference throughout development:
                            </p>
                        </div>
                        <div className="arena-container arena-media-div">
                            <img className=" arena-media" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/ffr+(1).webp"></img>
                        </div>
                        <div className="content--main--arena inbetween" >
                            <p className="content--main--arena--inbetween">
                                After looking through significant amount of suggestions  &#40;there was a lot&#41;, some topics appeared more frequently than others:
                            </p>

                            <ul id="arena-ul">
                                <li> Speed and reliability</li>
                                <li> Better navigation</li>
                                <li> More viewing options</li>
                                <li> Homescreen widget</li>

                            </ul>
                        </div>
                        <div className="arena-container arena-media-div">
                            <img className=" arena-media" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/Screenshot+2024-11-07+at+12.00.41%E2%80%AFAM.png"></img>
                        </div>
                        <div className="content--main--arena inbetween" >
                            <p className="content--main--arena--inbetween">
                                And with that, it was time to start building.
                                <br /><br /> <b>*Disclaimer*</b><br />Due to my lack of knowledge in SwiftUI at the moment, I've only developed snippets of the redesign to provide a feel for what it would be like. Once I further deepen my knowledge in the near future, I hope to be able to fully code the redesign.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="content--block--arena  ">
                    <div className="content--main--arena--inbetween">
                        <p className="bold"><b>Are.na Redesigned</b></p>

                        <div className="arena-container arena-media-div" id="arena-media-div2" style={{ backgroundImage: 'url(https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/cloud-bg.webp)' }}>
                            <video className=" arena-media-id2" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/edited1.mp4"
                                loading="lazy" playsInline autoPlay loop></video>

                        </div>
                    </div>
                    <div className="content--main-arena">
                        <p className="bold"><b>Speed and Stability</b></p>
                        <div className="content--main--arena inbetween" >
                            <p>
                                Building with SwiftUI would mean leveraging Apple's native framework for the platform, ensuring maximum performance. This approach woud eliminate the overhead associated with cross-platform solutions like React Native. </p>
                        </div>
                        <div className="arena-container arena-media-div2"  >
                            <video className=" arena-media-id2" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/speed+(1)_3.mp4"
                                loading="lazy" playsInline autoPlay loop></video>
                        </div>
                        {/* What that ultimately means is a fast and smooth app. Helped along by native fluid animations and lazy loading techniques, it's a polished experience that feels right at home. </p> */}
                    </div>
                    <div className="content--main-arena">
                        <p className="bold"><b>Greater Viewing Options</b></p>
                        <div className="content--main--arena inbetween" >
                            <p>
                                In channel view, you can switch between various viewing formats, such as the normal 2-column grid, but also a more condensed 3-column grid, a more focused single-column view, and a table view that contains block titles and original authors.


                                You can also customize the sort order within a channel, allowing you to view blocks from oldest to newest, or vice versa.


                                Also new are the ability to swipe between blocks in a channel, enabling a slideshow-like viewing experience, as well as zooming functionality for blocks that contain media to examine finer details. </p>
                        </div>
                        <div className="arena-container arena-media-div2" >
                            <video className=" arena-media-id2" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/views+(1).mp4"
                                loading="lazy" playsInline autoPlay loop></video>
                        </div>
                    </div>
                    <div className="content--main-arena">
                        <p className="bold"><b>Bookmark Channels</b></p>

                        <div className="content--main--arena inbetween" >

                            <p>
                                The app also allows you to bookmark any channel for quicker access. This is especially useful if you have a handful of channels that you are constantly referencing for ideas or inspiration. Think of it as your personal stream of reliable content.

                            </p>
                        </div>
                        <div className="arena-container arena-media-div2" >
                            <video className=" arena-media-id2" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/context-menus+(1)_1.mp4"
                                loading="lazy" playsInline autoPlay loop></video>
                        </div>
                    </div>



                </div>

                <div className="content--block--arena  ">
                    <div className="content--main--arena--inbetween">
                        <p className="bold"><b>Encouraging Getting Lost</b></p>
                        <p>Using Are.na is an intuitive journey driven by curiosity, where you explore connections and stumble upon unexpected discoveries. Over time, you craft pathways to return to and shape contexts that deepen your understanding and ideas.</p>
                    </div>
                    <div className="arena-container arena-media-div">
                        <video className=" arena-media-id2" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/rabbit-hole+(1).mp4"
                            loading="lazy" playsInline autoPlay loop></video>
                    </div>
                    <div className="content--main--arena--inbetween">
                        <p>However, the app currently doesn’t give you a good way of keeping track of those paths, apart from connecting blocks. Say you start with a channel, and after some time going down a rabbit hole, your path looks like this:
                        </p>
                    </div>
                    <div className="arena-container arena-media-div">
                        <img className=" arena-media" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/rabbit-hole-2+(1).webp"></img>
                    </div>

                    <div className="content--main--arena--inbetween">
                        <p>Now, what if you wanted to go back to a previous channel you visited, but not lose your current trail?</p>
                    </div>

                    <div className="arena-container arena-media-div">
                        <img className=" arena-media" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/rabbit-hole-3+(1).webp"></img>
                    </div>
                    <div className="content--main--arena--inbetween">
                        <p>Now, what if you wanted to go back to a previous channel you visited, but not lose your current trail?</p>
                    </div>
                    <div className="arena-container arena-media-div2">
                        <video className=" arena-media-id2" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/history-view+(1).mp4" loading="lazy" playsInline autoPlay loop></video>
                    </div>
                    <div className="content--main--arena--inbetween">
                        <p>
                            The history view is designed to be simple in both appearance and functionality, providing a straightforward, single-column list of previously visited channels, users, and blocks. This layout was chosen for its ease of design, implementation, and, most importantly, for being clear and intuitive for users to navigate. <br /><br />

                            I would imagine an extended version of this feature could allow users more granular control over what type of content is recorded. For example, choosing to record only channels but not users and blocks visited, or only URL blocks, etc.</p>
                    </div>
                    <div className="arena-container arena-media-div">
                        <img className=" arena-media" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/Group+13438.png"></img>
                    </div>
                    <div className="content--main--arena--inbetween">
                        <p>I also thought it would also be nice if the app could automatically detect the start and end of a path, and bundle it as one rabbit hole to display in the history view. Then, it would record multiple browse piles over time like so:
                        </p>
                    </div>
                    <div className="arena-container arena-media-div">
                        <img className=" arena-media" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/Group+13437.png"></img>
                    </div>

                    <div className="content--main--arena--inbetween">
                        <p>These explorations were scrapped due to time and technical constraints, but I plan to revisit them in the future.</p>
                    </div>
                </div>
                <div className="content--block--arena  ">
                    <div className="content--main--arena--inbetween">
                        <p className="bold"><b>Staying True to Are.na’s Design</b></p>
                        <p>I stuck closely to Are.na’s understated and almost skeletal interface. Following their restrained approach to design, I stripped back color and ornamentation to let the content shine.

                            <br /><br />
                            Though, to distinguish my app from Are.na’s, I softened most corners of the user interface.</p>
                    </div>
                    <div className="arena-container arena-media-div">
                        <ReactBeforeSliderComponent
                            firstImage={FIRST_IMAGE}
                            secondImage={SECOND_IMAGE}
                            delimiterIconStyles={delimiterIconStyles} // Apply custom delimiter icon styles
                            delimiterColor="#f0f0f0" // Optional: customize delimiter color
                        />      </div>
                    <p>Sticking closely to Are.na's design also meant being very deliberate about some feature requests, one of which was showing follower / following count on a user’s profile. I personally wanted it as well, but didn’t want it to be prominently displayed, because Are.na is not a social media platform.


                        The counts are accessible within the followers/following tab but remain tucked beyond the initial scroll view—there if you’re curious, but unobtrusive. This choice ensures the information is available without pulling focus from Are.na’s core purpose</p>

                    <div className="arena-container arena-media-div2">
                        <video className=" arena-media-id2" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/followers_final.mp4" loading="lazy" playsInline autoPlay loop></video>
                    </div>

                    <p>
                        I also experimented with Rive to create playful animations that not only give character to the app, but also act as guides on how to use the various new features.
                    </p>

                    <div className="arena-container arena-media-div2" id="three-screens">
                        <video className=" arena-media-id2" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/history-animation.mp4" loading="lazy" playsInline autoPlay loop></video>
                        <video className=" arena-media-id2" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/bookmark-animation.mp4" loading="lazy" playsInline autoPlay loop></video>
                        <video className=" arena-media-id2" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/arena/connect-animation.mp4" loading="lazy" playsInline autoPlay loop></video>

                    </div>


                </div>


            </div>










            <footer>
                <div>
                    ©2024 Jason Lee
                    <br />
                    Site designed and coded by me ㋡
                </div>
                <div className="social-links">
                    <a href="sdlfjddflkdjfkdfjl" target="_blank">
                        <img className="social-links--icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODUwIiBoZWlnaHQ9Ijg1MCIgdmlld0JveD0iMCAwIDEyNiAxMzUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDQuMDM1NCAwLjYwNzMzMkwxMTIuNDA3IDE4LjkyNzRDMTIxLjg0NyAyMS40NTY5IDEyNy40NDkgMzEuMTYwMiAxMjQuOTIgNDAuNjAwM0wxMDMuMTY1IDEyMS43OTJDMTAwLjYzNSAxMzEuMjMyIDkwLjkzMTkgMTM2LjgzNCA4MS40OTE5IDEzNC4zMDVMMTMuMTIwMiAxMTUuOTg0QzMuNjgwMDcgMTEzLjQ1NSAtMS45MjIxMyAxMDMuNzUyIDAuNjA3MzczIDk0LjMxMDlMMjIuMzYyNSAxMy4xMjAyQzI0Ljg5MiAzLjY4MDEzIDM0LjU5NTMgLTEuOTIyMDcgNDQuMDM1NCAwLjYwNzMzMlpNNDEuNzQ1NCA5LjE1MzgzQzM3LjAyNTMgNy44ODkwMyAzMi4xNzM3IDEwLjY5MDEgMzAuOTA4OSAxNS40MTAyTDkuMTUzNzggOTYuNjAxOUM3Ljg4OTA4IDEwMS4zMjIgMTAuNjkwMiAxMDYuMTczIDE1LjQxMDMgMTA3LjQzOEw4My43ODE5IDEyNS43NThDODguNTAxOSAxMjcuMDIzIDkzLjM1MzkgMTI0LjIyMiA5NC42MTc5IDExOS41MDJMMTE2LjM3MyAzOC4zMTAzQzExNy42MzggMzMuNTkwMyAxMTQuODM3IDI4LjczODYgMTEwLjExNyAyNy40NzM5TDQxLjc0NTQgOS4xNTM4M1oiIGZpbGw9IiMxMTExMTEiLz4KPHBhdGggZD0iTTQwLjI5NDQgMzEuNjY0OEM0MC45MjY4IDI5LjMwNDggNDMuMzUyNiAyNy45MDQyIDQ1LjcxMjcgMjguNTM2Nkw5Ni45OTE0IDQyLjI3NjdDOTkuMzUxNCA0Mi45MDkgMTAwLjc1MiA0NS4zMzQ4IDEwMC4xMTkgNDcuNjk0OUM5OS40ODc0IDUwLjA1NDkgOTcuMDYxNCA1MS40NTU1IDk0LjcwMTQgNTAuODIzMUw0My40MjI3IDM3LjA4M0M0MS4wNjI2IDM2LjQ1MDcgMzkuNjYyMSAzNC4wMjQ4IDQwLjI5NDQgMzEuNjY0OFoiIGZpbGw9IiMxMTExMTEiLz4KPHBhdGggZD0iTTM0LjU2NzkgNTMuMDMwMUMzNS4yMDAzIDUwLjY3MDEgMzcuNjI2MSA0OS4yNjk0IDM5Ljk4NjEgNDkuOTAxOEw5MS4yNjQ5IDYzLjY0MkM5My42MjQ5IDY0LjI3NDMgOTUuMDI0OSA2Ni43MDAyIDk0LjM5MjkgNjkuMDYwMkM5My43NjA5IDcxLjQyMDIgOTEuMzM0OSA3Mi44MjA3IDg4Ljk3NDkgNzIuMTg4M0wzNy42OTYxIDU4LjQ0ODNDMzUuMzM2MSA1Ny44MTYgMzMuOTM1NSA1NS4zOTAxIDM0LjU2NzkgNTMuMDMwMVoiIGZpbGw9IiMxMTExMTEiLz4KPHBhdGggZD0iTTI4Ljg0MzMgNzQuMzk3MkMyOS40NzU2IDcyLjAzNzIgMzEuOTAxNSA3MC42MzY2IDM0LjI2MTUgNzEuMjY5TDY0LjE3NDEgNzkuMjgzOEM2Ni41MzQxIDc5LjkxNjggNjcuOTM0NiA4Mi4zNDE4IDY3LjMwMjMgODQuNzAxOEM2Ni42Njk5IDg3LjA2MjggNjQuMjQ0MSA4OC40NjI4IDYxLjg4NCA4Ny44MzA4TDMxLjk3MTUgNzkuODE1OEMyOS42MTE1IDc5LjE4MjggMjguMjEwOSA3Ni43NTcyIDI4Ljg0MzMgNzQuMzk3MloiIGZpbGw9IiMxMTExMTEiLz4KPC9zdmc+Cg=="></img>
                    </a>
                    <a href="https://www.linkedin.com/in/shl235" target="_blank">
                        <img className="social-links--icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMDYuNjI4IDAuNTYyMjU2QzQ3Ljg3NzIgMC41NjIyNTYgMC4wNDMwMTY0IDQ4LjM4NzIgMCAxMDcuMTg0QzAgMTY1Ljk4MiA0Ny44MzQyIDIxMy44MTYgMTA2LjYyOCAyMTMuODE2QzE2NS40MDEgMjEzLjgxNiAyMTMuMjExIDE2NS45ODIgMjEzLjIxMSAxMDcuMTg0QzIxMy4yMTEgNDguMzkzNCAxNjUuMzk4IDAuNTYyMjU2IDEwNi42MjggMC41NjIyNTZaIiBmaWxsPSIjMjQyMDIwIi8+CjxwYXRoIGQ9Ik0xODYuNjU1IDI1Ni42NTdIMjYuNTkwNkMxOC45NzY3IDI1Ni42NTcgMTIuODAwOCAyNjIuODMgMTIuODAwOCAyNzAuNDVWNzg1LjY0OEMxMi44MDA4IDc5My4yNjUgMTguOTc2NyA3OTkuNDM4IDI2LjU5MDYgNzk5LjQzOEgxODYuNjUxQzE5NC4yNjggNzk5LjQzOCAyMDAuNDQ0IDc5My4yNjIgMjAwLjQ0NCA3ODUuNjQ4VjI3MC40NUMyMDAuNDQ3IDI2Mi44MjcgMTk0LjI3MSAyNTYuNjU3IDE4Ni42NTUgMjU2LjY1N1oiIGZpbGw9IiMyNDIwMjAiLz4KPHBhdGggZD0iTTU5NS44NTEgMjUwLjU5MkM1MzcuMjc1IDI1MC41OTIgNDg1Ljc5OSAyNjguNDI4IDQ1NC4zODggMjk3LjUxM1YyNzAuNDVDNDU0LjM4OCAyNjIuODMgNDQ4LjIxMiAyNTYuNjU3IDQ0MC41OTUgMjU2LjY1N0gyODcuMDU1QzI3OS40MzggMjU2LjY1NyAyNzMuMjYyIDI2Mi44MyAyNzMuMjYyIDI3MC40NVY3ODUuNjQ4QzI3My4yNjIgNzkzLjI2NSAyNzkuNDM4IDc5OS40MzggMjg3LjA1NSA3OTkuNDM4SDQ0Ni45NjVDNDU0LjU4MiA3OTkuNDM4IDQ2MC43NTggNzkzLjI2MiA0NjAuNzU4IDc4NS42NDhWNTMwLjc1NEM0NjAuNzU4IDQ1Ny42MiA0NzQuMjEgNDEyLjI5IDU0MS4zNDMgNDEyLjI5QzYwNy40ODQgNDEyLjM3IDYxMi40MzMgNDYwLjk3OSA2MTIuNDMzIDUzNS4xMjRWNzg1LjY0OEM2MTIuNDMzIDc5My4yNjUgNjE4LjYwOSA3OTkuNDM4IDYyNi4yMjkgNzk5LjQzOEg3ODYuMjEzQzc5My44MjcgNzk5LjQzOCA4MDAuMDAzIDc5My4yNjIgODAwLjAwMyA3ODUuNjQ4VjUwMy4wNEM4MDAgMzg1LjUwMyA3NzYuNzk2IDI1MC41OTIgNTk1Ljg1MSAyNTAuNTkyWiIgZmlsbD0iIzI0MjAyMCIvPgo8L3N2Zz4K" />
                    </a>
                    <a href="https://www.instagram.com/2000ghdi/" target="_blank">
                        <img className="social-links--icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xMl8yKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjM0Ljc4NiA0LjkwOTE3QzE2OS42NzEgNy44NDcxNyAxMTMuMjMzIDIzLjc2NyA2Ny42NTk3IDY5LjE0NzRDMjEuOTI3OCAxMTQuNzY2IDYuMjA1NjYgMTcxLjQyOCAzLjI2MDM0IDIzNS44NjZDMS40Mjk0NiAyNzYuMDg1IC05LjI3NjU2IDU3OS45MzIgMjEuNzY4NiA2NTkuNjE2QzQyLjcwNDIgNzEzLjM3NCA4My45Mzc2IDc1NC43MDcgMTM4LjE4NyA3NzUuNzFDMTYzLjUwMSA3ODUuNTU2IDE5Mi4zOTggNzkyLjIyMSAyMzQuNzg2IDc5NC4xNjdDNTg5LjIxOSA4MTAuMjA3IDcyMC42MDMgODAxLjQ3NSA3NzYuMDA3IDY1OS42MTZDNzg1LjgzOCA2MzQuMzY1IDc5Mi42MDQgNjA1LjQ5NCA3OTQuNDc1IDU2My4yMUM4MTAuNjc0IDIwNy44NjggNzkxLjg0OSAxMzAuODQ2IDczMC4wNzcgNjkuMTQ3NEM2ODEuMDgxIDIwLjI3MyA2MjMuNDQ4IC0xMi45OTY4IDIzNC43ODYgNC45MDkxN1pNMjM4LjA0OSA3MjIuNzAyQzE5OS4yNDMgNzIwLjk1NSAxNzguMTg4IDcxNC40ODkgMTY0LjEzOCA3MDkuMDVDMTI4Ljc5NCA2OTUuMzEzIDEwMi4yNDcgNjY4Ljg3NCA4OC41OTQ4IDYzMy43MzdDNjQuOTUyNyA1NzMuMTkgNzIuNzkzOSAyODUuNjIxIDc0LjkwMzQgMjM5LjA4OUM3Ni45NzMxIDE5My41MSA4Ni4yMDY5IDE1MS44NTQgMTE4LjM2NyAxMTkuNjk0QzE1OC4xNjggNzkuOTkxMSAyMDkuNTkxIDYwLjUzMjkgNTU5LjcyNSA3Ni4zMzQ5QzYwNS40MTcgNzguMzk5MyA2NDcuMTcgODcuNjE0MyA2NzkuNDA5IDExOS42OTRDNzE5LjIxMSAxNTkuMzk3IDczOC45NTIgMjExLjIxNiA3MjIuODcyIDU2MC4wMDdDNzIxLjEyMSA1OTguNzE3IDcxNC42MzQgNjE5LjcyMiA3MDkuMTgxIDYzMy43MzdDNjczLjE2IDcyNi4wNDYgNTkwLjI5MyA3MzguODYxIDIzOC4wNDkgNzIyLjcwMlpNNTYzLjU4NiAxODcuNTg1QzU2My41ODYgMjEzLjg2OSA1ODQuOTYgMjM1LjI0MSA2MTEuMzQ5IDIzNS4yNDFDNjM3LjczNyAyMzUuMjQxIDY1OS4xNSAyMTMuODY5IDY1OS4xNSAxODcuNTg1QzY1OS4xNSAxNjEuMzAyIDYzNy43MzcgMTM5Ljk0OCA2MTEuMzQ5IDEzOS45NDhDNTg0Ljk2IDEzOS45NDggNTYzLjU4NiAxNjEuMzAyIDU2My41ODYgMTg3LjU4NVpNMTk0LjUwNyAzOTkuNTE5QzE5NC41MDcgNTEyLjExNiAyODYuMDExIDYwMy40MDUgMzk4Ljg4OCA2MDMuNDA1QzUxMS43NjUgNjAzLjQwNSA2MDMuMjY5IDUxMi4xMTYgNjAzLjI2OSAzOTkuNTE5QzYwMy4yNjkgMjg2LjkyMSA1MTEuNzY1IDE5NS42OSAzOTguODg4IDE5NS42OUMyODYuMDExIDE5NS42OSAxOTQuNTA3IDI4Ni45MjEgMTk0LjUwNyAzOTkuNTE5Wk0yNjYuMjI5IDM5OS41MTlDMjY2LjIyOSAzMjYuNDY1IDMyNS42MTMgMjY3LjE5NCAzOTguODg4IDI2Ny4xOTRDNDcyLjE2MiAyNjcuMTk0IDUzMS41NDYgMzI2LjQ2NSA1MzEuNTQ2IDM5OS41MTlDNTMxLjU0NiA0NzIuNjEyIDQ3Mi4xNjIgNTMxLjkwMSAzOTguODg4IDUzMS45MDFDMzI1LjYxMyA1MzEuOTAxIDI2Ni4yMjkgNDcyLjYxMiAyNjYuMjI5IDM5OS41MTlaIiBmaWxsPSIjMjQyMDIwIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTJfMiI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="></img>
                    </a>
                </div>
            </footer>
        </main >
    )
}

export default Arena;