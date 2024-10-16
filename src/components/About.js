import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function About() {
    return (
        <div className="portfolio">

            <main className="skinny">
                <div class="about-container">
                    <div class="about-text">
                        <h3>Hello! I’m Jason, I'm a master’s student at Cornell University studying Information Science. </h3>
                            
                            <h3>By nature, I am full of curiosity. Whether it's jumping around different majors (Economics → Architecture → Information Science),
                            hiking along unexplored routes, or tinkering with design tools,
                            my approach to design is also the same way. I enjoy exploring the intersections of creativity and logic,
                            always seeking the unexpected. I’m here to learn, explore, and constantly look for the next challenge to take on or space to discover—in UX/UI and beyond.</h3>
                        <br />
                        <h3>In my free time, I like stay active and curate playlists for my day to day. </h3>
                        <br />
                        <h3> Thanks for stopping by. If anything catches your eye, feel free to reach out and say hello. </h3>
                    </div>
                    <div class="about-profile mobile-gone">
                        <img class="about-headshot" src="https://hoya-portfolio.s3.us-east-2.amazonaws.com/about/about-headshot5.jpg"></img>
                    </div>
                </div>
            </main>

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
        </div>
    );
}

export default About;