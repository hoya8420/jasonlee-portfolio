import Header from './components/Header';  // Import Header component
import Footer from './components/Footer';  // Import Footer component
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components
import './App.css';




function SnapSave() {

    const SS_Solution1 = 'https://hoya-portfolio.s3.us-east-2.amazonaws.com/snapsave/SS_Solution1.mov';
    const SS_Solution2 = "https://hoya-portfolio.s3.us-east-2.amazonaws.com/snapsave/SS_Solution2.mov";
    const SS_Solution3 = "https://hoya-portfolio.s3.us-east-2.amazonaws.com/snapsave/SS_Solution3.png";
    const StickyNotes = "https://hoya-portfolio.s3.us-east-2.amazonaws.com/snapsave/stickynotes.gif";
    const findings1 = "https://hoya-portfolio.s3.us-east-2.amazonaws.com/snapsave/finding_1.svg";
    const findings2 = "https://hoya-portfolio.s3.us-east-2.amazonaws.com/snapsave/finding_2.svg";
    const findings3 = "https://hoya-portfolio.s3.us-east-2.amazonaws.com/snapsave/finding_3.svg";
    const sorting = "https://hoya-portfolio.s3.us-east-2.amazonaws.com/snapsave/Wireframe+of+sorting+mechanism.mov";
    const spending = "https://hoya-portfolio.s3.us-east-2.amazonaws.com/snapsave/Wireframe+of+spending+visualization.mov";
    const onboarding = "https://hoya-portfolio.s3.us-east-2.amazonaws.com/snapsave/Wireframe+of+platform+onboarding.mov";
    const purchase = "https://hoya-portfolio.s3.us-east-2.amazonaws.com/snapsave/Wireframe+of+purchase+cards.mov";
    const streak = "https://hoya-portfolio.s3.us-east-2.amazonaws.com/snapsave/Wireframe+of+streak+system+functionality.mov";
    const trophy = "https://hoya-portfolio.s3.us-east-2.amazonaws.com/snapsave/Wireframe+of+trophy+system+functionality.mov";

    return (
        <main>
            <div className="project-writeup broad">
                <div className="project-intro">
                    <h1>SnapSave</h1>
                    <h2>A Spending Tracker For College Students</h2>
                </div>
                <div className="image-container2">
                    <img id="image-header" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/home/snapsave_home1.png">
                    </img>
                </div>

                <div className="content--block">
                    <div className="content--main">
                        <div className="content--subdivide">
                            <div className="content--subdivision--big">
                                <p className="bold"><b>Team</b></p>
                                <p>Independent Project</p>
                            </div>
                            <div id="intro" className="content--subdivision-medium">
                                <p className="bold"><b>Skills</b></p>
                                <p>User Research, Wireframing, Usability Testing, Prototyping, Interface Design</p>
                            </div>
                            <div className="content--subdivision-small">
                                <p className="bold"><b>Duration</b></p>
                                <p>2 months</p>
                            </div>
                        </div>
                        <p className="bold"><b>Background</b></p>
                        <p className="project-writeup-description">

                            As college students, my peers and I are managing our finances for the very first time, which
                            comes with a learning curve. One of the biggest issues we face in this pursuit is an unawareness of our spending patterns.
                            To solve this, I designed a mobile app that makes sorting your past purchases simple and painless, which helps to remind students of their purchases,
                            and foster long-term insights about their spending patterns.
                        </p>

                    </div>
                </div>
            </div>

            <div className="mobile-gone broad">
                <div className="content--block">
                    <div className="fade-in content--main content--two-columns content--text-and-image appear">
                        <div className="content--half-text-2">
                            <h2 className="snapsave-h2-style">
                                <span>A Painless Way to Review Transactions</span>
                            </h2>
                            <ul className="big-bullet-points">
                                <li>
                                    Sort your purchases in 3 quick taps
                                </li>
                                <li>
                                    Improve spending by identifying problem areas
                                </li>
                                <li>
                                    Create custom categories that reflect your spending habits
                                </li>
                            </ul>
                        </div>
                        <div className="content--half-2">
                            <video className="content--image-wrapper-full content--iphone-video" loading="lazy" src={SS_Solution1} playsInline autoPlay loop></video>
                        </div>

                    </div>
                </div>
                <div className="content--block addition">
                    <div className="fade-in content--main content--two-columns content--text-and-image appear">
                        <div className="content--half-2">
                            <video className="content--image-wrapper-full content--iphone-video"
                                loading="lazy" src={SS_Solution2} playsInline autoPlay loop></video>
                        </div>
                        <div className="content--half-text-2">
                            <h2 className="snapsave-h2-style">
                                <span>Clearly Visualize Your Spending</span>
                            </h2>
                            <ul className="big-bullet-points">
                                <li>

                                    View categories as % of total spending
                                </li>
                                <li>

                                    See how spending breaks down over weeks, months, years
                                </li>
                                <li>

                                    Develop intuitive insight about spending habits
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content--block ">
                    <div className="fade-in content--main content--two-columns content--text-and-image appear">
                        <div className="content--half-text-2">
                            <h2 className="snapsave-h2-style">
                                <span>Track Purchases Across All Platforms</span>
                            </h2>
                            <ul className="big-bullet-points">
                                <li>
                                    Connect multiple payment platforms, including Venmo and Cash App
                                </li>
                                <li>
                                    Stay accountable for money in wallets outside your bank account
                                </li>
                            </ul>
                        </div>
                        <div className="content--half-2">
                            <div className="image-container">
                                <img className="content--image-wrapper-full content--iphone-video2" src={SS_Solution3} loading="lazy"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="content--block">
                        <div className="content--section-title">DEFINING THE PROBLEM</div>

                        <div className="content--main ">
                            <h2>Students Don't Like To Be Reminded Of Their Spending</h2>
                            <div className="image-container">
                                <img className=" content--image-wrapper-full bump-2point5" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/snapsave/tiktok1.png" loading="lazy" ></img>
                            </div>
                            <p className="bump-2point5">My interest in this problem stems from a situation i've been in more times than
                                I'd like to admit- my friends and I spend without hesitation all day,
                                and surprise ourselves when checking the damange to our balances.
                                Based on this anecdotal evidence, my initial hypothesis was that students
                                spend too much because we forget about past purchases.
                                While doing research however, I stumbled across an interesting psychological effect
                                that may better explain the problem:</p>
                            <div className="big-quote">
                                <h3><strong><a className="explicit-link" href="https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/cognitive-overload" target="_blank">Cognitive Overload</a><br /></strong></h3>
                                <i>As problems become more complex, they require greater cognitive resources to analyze and solve. This overload can lead to decision paralysis or avoidance of the problem altogether.</i>
                            </div>
                            <p>This insight led me to consider that students may be <strong>willfully avoiding</strong> their transaction histories, ignoring the facts to allow themselves to spend more. There was the issue- how can students improve their spending patterns if they aren't aware of them to begin with?</p>
                        </div>
                    </div>
                </div>

                <div className="content--block" id="grey">
                    <div className="content--section-title">PROBLEM</div>
                    <div className="content--main">
                        <h2 className="  no-padding">How might we help college students better understand their spending patterns?</h2>
                    </div>
                </div>

                <div className="content--block">
                    <div className="content--section-title">INTERVIEWS</div>
                    <div className="content--main">

                        <p className>
                            To learn more about student spending habits, I conducted interviews with 8 college students actively trying to limit their spending. I asked them the questions below to identify other roadblocks they’ve encountered while trying to budget.
                        </p>
                        <div className="image-container">
                            <img className="content--image-wrapper-full" src={StickyNotes} loading="lazy"></img>
                        </div>
                        <ol start="1">
                            <li>
                                Tell me about a time you tried to budget or limit your spending. What steps did you take? What worked and what didn’t?
                            </li>
                            <li>
                                What kind of spending has been the toughest to limit?
                            </li>
                            <li>
                                What motivated you to budget in the first place?
                            </li>
                            <li>
                                What methods do you use to pay for things? (card, cash, digital wallet, etc.) Does the method of payment you use affect the feeling of spending?
                            </li>
                            <li>
                                What apps do you use that involve your spending? In what ways do they influence your spending?
                            </li>
                        </ol>

                    </div>
                </div>
                <div className="content--block" id="grey">
                    <div className="content--section-title">FINDINGS</div>
                    <div className="content--main">
                        <h2 className=" ">Students are AFRAID of their Transaction History</h2>
                        <p className=" ">My main takeaway from the student interviews was that technology plays a huge role in incentivizing students to spend, and obscuring student’s true spending patterns. My findings can be summarized in three key points:</p>
                        <div className="  content--point-section">
                            <img className="content--point-icon" src={findings1} loading="lazy">
                            </img>
                            <div className="content--point">
                                <h3 className="content--point-title">Fear of Transaction History</h3>
                                <p className="snapsave-p">An overwhelming majority of students confessed that they<strong> don’t review their purchases,</strong>  or even know exactly how much they’ve spent in a given month, citing anxiety as a disuasive factor. Instead, they mostly use their overall balance to gauge whether they’re in a good or bad place financially.</p>

                            </div>
                        </div>
                        <div className="  content--point-section">
                            <img className="content--point-icon" src={findings2} loading="lazy">
                            </img>
                            <div className="content--point">
                                <h3 className="content--point-title">Frictionless Payment Services</h3>
                                <p className="snapsave-p">Students primarily made purchases via Apple Pay or tap-based payments, which they say diminishes the psychological imprint of each purchase, making it easier to <strong>spend impulsively.</strong></p>

                            </div>
                        </div>
                        <div className="  content--point-section">
                            <img className="content--point-icon" src={findings3} loading="lazy">
                            </img>
                            <div className="content--point">
                                <h3 className="content--point-title">Alternative Balances </h3>
                                <p className="snapsave-p">Students possess multiple alternative balances, sources of money outside their main bank account (e.g. Venmo balance). Since these accounts don’t affect their primary balance, students see this as <strong>'free money'</strong> to spend without consequence. </p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="content--block  ">
                    <div className="content--section-title">COMPETITOR ANALYSIS</div>
                    <div className="content--main">
                        <h2 className="bump-2point5">Existing Platforms Don't Account For Student Needs</h2>
                        <div className="image-container">
                            <img className="  content--image-wrapper-full bump-2point5" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/snapsave/competitors.png" loading="lazy"></img>
                        </div>
                        <p className>
                            My interviewees also indicated a frustration with other mobile saving platforms. I analyzed the most popular budgeting apps to understand where they were falling short.
                        </p>
                        <p>
                            In the process, I realized these platforms were<strong> automating user’s spending breakdown,</strong> sorting user purchases into predefined categories without the user ever having to review them. This allows students to continue avoiding their transactions, and in turn, valuable insight.
                        </p>
                    </div>
                </div>


                    <div id="grey3" className="content--block">
                        <div className="content--section-title" id="design-goals">
                            DESIGN GOALS
                        </div>
                        <div className="content--main">
                            <h2 className="bump-2point5">
                                I set 3 main design goals for my project, based on my research (and limited timeframe)
                            </h2>
                            <div className="  content--main ">
                                <h3>#1: Make sorting purchases<strong> easy and painless.</strong></h3>
                                <div className="content--two-columns">
                                    <div className="content--half">
                                        <video className="content--image-wrapper-full" loading="lazy" src={sorting} playsInline autoPlay loop></video>
                                        <h4>
                                            Users can sort ‘purchase cards’ , transactions pulled in from your bank account’s API.
                                        </h4>
                                    </div>
                                    <div className="content--half">
                                        <video className="content--image-wrapper-full " loading="lazy" src={spending} playsInline autoPlay loop>

                                        </video>
                                        <h4>
                                            Weekly, monthly and yearly visualization of transactions and spending categories.
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="  content--main ">
                                <h3>
                                    #2: Account for <strong>every</strong> payment platform
                                </h3>
                                <div className="content--two-columns">
                                    <div className="content--half">
                                        <video className="content--image-wrapper-full " loading="lazy" src={onboarding} playsInline autoPlay loop>

                                        </video>
                                        <h4>Onboarding will prompt the connecting of multiple payment platforms.</h4>
                                    </div>
                                    <div className="content--half">
                                        <video className="content--image-wrapper-full " loading="lazy" src={purchase} playsInline autoPlay loop>

                                        </video>
                                        <h4>Purchase cards support incoming funds and display the source of transaction details.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="  content--main ">
                                <h3>
                                    #3:Encourage long-term, <strong>habitual</strong> usage
                                </h3>
                                <div className="content--two-columns">
                                    <div className="content--half">
                                        <video className="content--image-wrapper-full " loading="lazy" src={streak} playsInline autoPlay loop>

                                        </video>
                                        <h4>Streak based system that rewards users based on continual usage.</h4>
                                    </div>
                                    <div className="content--half">
                                        <video className="content--image-wrapper-full " loading="lazy" src={trophy} playsInline autoPlay loop>

                                        </video>
                                        <h4>Trophy-based system that game-ifies engagement through intermittent rewards.</h4>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
        

                <div className="content--block">
                    <div className="content--section-title">TESTING + IMPROVEMENTS</div>
                    <div className="content--main">
                        <h2 className=" ">3 Major Improvements to My Design </h2>
                        <p>I conducted a few usability testing sessions with my initial wireframes, including an A/B test of the habitual-use feature, and one round of usability testing for the entire platform with four students as participants. These tests led me to a number of significant improvements to my design:</p>
                    </div>
                </div>


                <div className="content--block addition">
                    <div className="fade-in content--main content--two-columns content--text-and-image appear">
                        <div className="content--half-text">
                            <h3 className="snapsave-header-style">
                                Users Control the <br />Spending Breakdown
                            </h3>
                            <ul>
                                <li>
                                    Usability testing revealed a desire to focus only on relevant purchases, control which transactions are sorted
                                </li>
                                <li>
                                    Sorting page was updated to let users both exclude transactions and log custom ones
                                </li>
                            </ul>
                        </div>
                        <div className="content--half">
                            <div className="image-container">
                                <img className="content--image-wrapper-full" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/snapsave/SS_improvement1.png" loading="lazy"></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content--block addition">
                    <div className="fade-in content--main content--two-columns content--text-and-image appear">
                        <div className="content--half">
                            <div className="image-container">
                                <img className="content--image-wrapper-full" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/snapsave/SS_improvement2.png" loading="lazy"></img>
                            </div>
                        </div>
                        <div className="content--half-text">
                            <h3 className="snapsave-header-style">
                                A Gameified Approach
                            </h3>
                            <ul>
                                <li>
                                    Users responded better to a rewards system than a streak-based feature
                                </li>
                                <li>
                                    ‘Trophies’ added to reward users based on money saved, encourage long-term usage
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="content--block addition">
                    <div className="fade-in content--main content--two-columns content--text-and-image appear">
                        <div className="content--half-text">
                            <h3 className="snapsave-header-style">Suggested Labels</h3>
                            <ul>
                                <li>
                                    Suggested purchase labels now appear as buttons when re-naming a purchase
                                </li>
                                <li>
                                    Simplifies the most tedious aspect of the primary user flow
                                </li>
                            </ul>
                        </div>
                        <div className="content--half">
                            <div className="image-container">
                                <img className="content--image-wrapper-full" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/snapsave/SS_improvement3.png" loading="lazy"></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="grey" className="content--block">
                    <div className="content--section-title bump-2point5">FINAL DESIGN</div>
                    <div className="content--main">
                        <div className="image-container">
                            <img className="content--image-wrapper-full" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/snapsave/finalProto.png" loading="lazy"></img>
                        </div>
                        <div className="figma-iframe">
                            <iframe className="iframe" src="https://embed.figma.com/proto/O8kmfEke4igt0frBbKcCzR/Snapsave?page-id=0%3A1&node-id=1-3228&node-type=canvas&viewport=1261%2C844%2C0.16&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3228&embed-host=share" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="content--section-title bump-2point5">STYLE GUIDE</div>
                    <div className="content--main">
                        <div className="image-container">
                            <img className="content--image-wrapper-full black-border" loading="lazy" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/snapsave/SS_style-guide.png">
                            </img>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="content--block">
                        <div className="content--section-title">CONCLUSION</div>
                        <div className="content--main">
                            <h2 className="bump-2point5">Takeaways + What I'd Do Differently</h2>

                            <div className="   content--point-section">
                                <div className="content--point">
                                    <h3 className="content--point-title">🧩&nbsp;&nbsp;Simple Doesn't Mean Boring</h3>
                                    <p>
                                        During the ideation process, I realized how easy it is to get distracted by exciting features that may not truly address the user’s needs. Moving forward, I want to stay grounded in focusing on features that directly enhance usability and align with the core problem.
                                    </p>
                                </div>
                            </div>
                            <div className="   content--point-section">
                                <div className="content--point">
                                    <h3 className="content--point-title">♻️&nbsp;&nbsp;User Feedback Is A Continuous Process</h3>
                                    <p>
                                        I gained a lot of insight on the benefits of continuous user feedback. Each round of feedback, no matter how small or limited, offered new insights that led to tangible improvements in the design, which made me realize the importance of iterative feedback in shaping the user experience  </p>
                                </div>
                            </div> <div className="   content--point-section">
                                <div className="content--point">
                                    <h3 className="content--point-title">🤸‍♀️&nbsp;&nbsp;Be Flexible</h3>
                                    <p>
                                        In future projects, I’d like to invest more time exploring various approaches to solving the problem, not just within the scope of my initial idea.  Early ideas often evolve, and being open to change—whether through user feedback or new insights—leads to stronger outcomes. This includes analyzing how my solution fits into the larger landscape of existing products, understanding their strengths and weaknesses, and identifying unique opportunities where my design could offer more value.                             </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div id="grey2">
                <div className="content--block content--next-project fade-in appear">
                    <div className="content--main footer">
                        <h3 id="nextProject">
                            Next Project →
                            <a className="explicit-link" href="">
                                <u>Next Project</u>
                            </a>
                        </h3>
                    </div>
                </div>
            </div> */}
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

    );
};

export default SnapSave;
