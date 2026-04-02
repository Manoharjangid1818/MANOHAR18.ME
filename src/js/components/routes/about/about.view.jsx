import React from 'react';

// about route component
export const AboutView = () => {
    return (
        <div className='ui-about'>

                        {/* bio */}
                        <div className="ui-about__container ui-about__container__bio">
                                <div className="ui-about__block">
                                        <div className="ui-about__bg" />
                                        <div className="ui-about__bg ui-about__bg__2" />
                                        <div className="ui-about__block__content">
                                                <h1 className="page-title"><span>Hi, I'm Manohar Rajotiya</span></h1>
                                                <p>Experienced in software testing with hands-on exposure to manual and automation practices. Designed and executed 500+ test cases across functional, regression, and API testing. Developed Playwright automation scripts and built a QA platform (QA360) with React and Node.js, including deployment and integration. Skilled in API testing using Postman, database validation with SQL, defect tracking, and familiar with Git and CI/CD concepts.</p>

                                                <h2>Technical Skills</h2>

                                                <h3>🧪 Testing Skills</h3>
                                                <ul>
                                                        <li>Manual Testing</li>
                                                        <li>Automation Testing</li>
                                                        <li>SDLC &amp; STLC</li>
                                                        <li>Test Case Design</li>
                                                        <li>Bug Reporting &amp; Defect Tracking</li>
                                                </ul>

                                                <h3>💻 Programming</h3>
                                                <ul>
                                                        <li>C, C++</li>
                                                        <li>Java</li>
                                                        <li>JavaScript</li>
                                                        <li>SQL</li>
                                                </ul>

                                                <h3>🌐 Web Development</h3>
                                                <ul>
                                                        <li>HTML, CSS</li>
                                                        <li>Basic ASP.Net</li>
                                                </ul>

                                                <h3>🛠 Tools &amp; Technologies</h3>
                                                <ul>
                                                        <li>MySQL</li>
                                                        <li>Git &amp; GitHub</li>
                                                        <li>JIRA</li>
                                                        <li>Selenium</li>
                                                        <li>Postman (API Testing)</li>
                                                </ul>

                                                <h2>General Skills</h2>
                                                <ul>
                                                        <li>Leadership</li>
                                                        <li>Effective Communication</li>
                                                        <li>Time Management</li>
                                                        <li>Problem Solving</li>
                                                </ul>

                                                <h2>Experience &amp; Volunteering</h2>

                                                <h3>🧑‍💻 Trainee Software Test Engineer</h3>
                                                <p><em>KiwiQA Services Pvt Ltd | Jan 2026 – Present</em></p>
                                                <ul>
                                                        <li>Performed manual testing on web applications</li>
                                                        <li>Designed and executed test cases &amp; scenarios</li>
                                                        <li>Reported and tracked bugs using tools like JIRA</li>
                                                        <li>Conducted regression and smoke testing</li>
                                                        <li>Worked on API testing using Postman</li>
                                                        <li>Gained hands-on experience with Selenium automation</li>
                                                </ul>

                                                <h3>🎓 Training &amp; Placement Coordinator</h3>
                                                <p><em>LJ University, Ahmedabad | Feb 2025 – Jan 2026</em></p>
                                                <ul>
                                                        <li>Managed student placement data and reports</li>
                                                        <li>Coordinated campus recruitment drives</li>
                                                        <li>Acted as a bridge between students and recruiters</li>
                                                        <li>Guided students in interview preparation</li>
                                                        <li>Collaborated with 100+ companies</li>
                                                </ul>

                                                <h2>Projects</h2>

                                                <h3>🚀 QA360 – SaaS QA Platform</h3>
                                                <ul>
                                                        <li>Built using React &amp; Node.js</li>
                                                        <li>Includes test case management and automation integration</li>
                                                        <li>Focused on scalable QA solutions</li>
                                                </ul>

                                                <h3>🛒 QuickBid – Auction Web App</h3>
                                                <ul>
                                                        <li>Real-time bidding system</li>
                                                        <li>User-friendly UI and backend integration</li>
                                                </ul>

                                                <h3>📝 Note Bank Application</h3>
                                                <ul>
                                                        <li>Manage and store notes efficiently</li>
                                                        <li>Simple and clean interface</li>
                                                </ul>

                                                <h3>🏫 Placement Cell Management System</h3>
                                                <ul>
                                                        <li>Handles student data and recruitment workflows</li>
                                                </ul>
                                        </div>
                                </div>
                        </div>

                        {/* contact */}
                        <div className="ui-about__container ui-about__container__contact">
                                <div className="ui-about__block">
                                        <div className="ui-about__bg" />
                                        <div className="ui-about__bg ui-about__bg__2" />
                                        <div className="ui-about__block__content">
                                                <h1 className="page-title"><span>Get in touch</span></h1>
                                                <p>I'm always open to a good conversation — whether it's about testing, tech, or a problem worth solving together.</p>
                                                <ul>
                                                        <li>Drop me a line anytime at <a href="mailto:manoharjangid1818@gmail.com">manoharjangid1818@gmail.com</a></li>
                                                        <li>Let's stay professionally connected on <a href="https://www.linkedin.com/in/manohar-jangid/" target="_blank">LinkedIn</a></li>
                                                        <li>Catch my thoughts and updates over on <a href="https://twitter.com/" target="_blank">Twitter</a></li>
                                                        <li>Follow me on <a href="https://www.instagram.com/manohar_suthar18?igsh=anA3dzM5a3ljNW9w&utm_source=qr" target="_blank">Instagram</a></li>
                                                </ul>
                                                <h2>Open to opportunities</h2>
                                                <p>Whether it's a role, a collaboration, or just a chat about QA and software — I'm genuinely interested. Don't hesitate to reach out.</p>
                                        </div>
                                </div>
                        </div>

            {/* request CV */}
            <a href='mailto:manoharjangid1818@gmail.com' target="_blank" className='ui-about__request-cv'>
                Request CV
            </a>
        </div>
    );
};

// default props
AboutView.defaultProps = {};

// set display name
AboutView.displayName = 'AboutView';

