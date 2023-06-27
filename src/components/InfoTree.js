import React from 'react';
import { Tree } from './';
import { useSpring, animated, config } from '@react-spring/web';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import Chip from '@mui/material/Chip';
import PersonIcon from '@mui/icons-material/Person';
import DateRangeIcon from '@mui/icons-material/DateRange';

const InfoTree = ({ aniRef }) => {
    // const [tabValue, setTabValue] = React.useState({ snswTech: '1' });

    // const handleChange = (key, newValue) => {
    //     setTabValue({ ...tabValue, [key]: newValue });
    // };

    const { ...styles } = useSpring({
        // ref: springApi,
        delay: 500,
        config: { ...config.gentle, friction: 25 },
        from: { opacity: '0' },
        to: { opacity: '1' },
        ref: aniRef || null
    });

    const blue = { color: '#008DD5' };
    const white = { color: '#F4FFFD' };
    const orange = { color: '#FFA400' };
    const red = { color: '#EF476F' };
    const yellow = { color: '#FFFF00' };
    const black = { color: '#0E131F' };
    // const lightBlack = { color: '#1E1E24' };
    const green = { color: '#D1F0B1' };

    const buttonStyles = { mr: 1, fontWeight: 900, mt: 1, minWidth: 120 };

    const generateSkills = data => <>
        {data.languages &&
            <Tree name="languages" defaultOpen style={{ ...blue }}>
                <Box sx={{ p: 1 }}>
                    {data.languages}
                </Box>
            </Tree>
        }

        {data.frameworks &&
            <Tree name="frameworks & libraries" defaultOpen style={{ ...orange }}>
                <Box sx={{ p: 1 }}>
                    {data.frameworks}
                </Box>
            </Tree>
        }

        {data.tools &&
            <Tree name="tools" defaultOpen style={{ ...red }}>
                <Box sx={{ p: 1 }}>
                    {data.tools}
                </Box>
            </Tree>
        }

        {data.other &&
            <Tree name="other" style={{ ...green }}>
                <Box sx={{ p: 1 }}>
                    {data.other}
                </Box>
            </Tree>
        }
    </>;

    const generateHistory = data =>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 2 }}>
            {data.map(i =>
                <Box key={i.job + i.date}>
                    <Chip
                        label={i.job}
                        variant="filled"
                        sx={{ ...black, bgcolor: orange.color, fontFamily: 'Roboto Mono', fontSize: 15, fontWeight: 500, mr: 1, mb: { xs: 1, sm: 0 } }}
                        icon={<PersonIcon style={{ ...black }} />}
                    />
                    <Chip
                        label={i.date}
                        variant="filled"
                        sx={{ ...black, bgcolor: blue.color, fontFamily: 'Roboto Mono', fontSize: 15, fontWeight: 500, mb: { xs: 1, sm: 0 } }}
                        icon={<DateRangeIcon style={{ ...black }} />}
                    />
                </Box>
            )}
        </Box>

    return (
        <animated.div style={{ ...styles }}>
            <Tree name="info" defaultOpen>
                <Box sx={{ p: 1 }}>
                    Lets keep it short and sweet. I am an Australian software engineer and you can click below to find out more about my professional life. Enjoy =]
                </Box>

                <Tree name="contact info" style={{ ...orange }}>
                    <Box sx={{ p: 1 }}>
                        Location: Sydney, Australia
                        <p>Email: <a href="mailto:kevin.thach.ngo@gmail.com" style={{ ...blue }}>kevin.thach.ngo@gmail.com</a></p>
                        <p>Mobile: <a href="tel:0423031873" style={{ ...blue }}>0423031873</a></p>

                        <Button sx={{ ...buttonStyles, backgroundColor: '#008DD5' }} href="https://github.com/kngo5553" target="_blank" variant="contained">
                            Github&nbsp;<GitHubIcon />
                        </Button>

                        <Button sx={{ ...buttonStyles, backgroundColor: '#FFA400', ...black }} href="https://www.linkedin.com/in/kevinthachngo/" target="_blank" variant="contained">
                            Linkedin&nbsp;<LinkedInIcon />
                        </Button>

                        <Button sx={{ ...buttonStyles, backgroundColor: '#EF476F' }} href='./kevin_ngo_resume_v2-1.pdf' target="_blank" variant="contained">
                            Resume&nbsp;<ArticleIcon />
                        </Button>
                    </Box>
                </Tree>
            </Tree>

            <Tree name="skills">
                {generateSkills({
                    languages: 'JavaScript/TypeScript, HTML/CSS, Java/Kotlin, SQL, C#, Python',
                    frameworks: 'React, Redux, Jest, React Testing Library, TestCafe, Spring Boot, Apigee, reCAPTCHA Enterprise, Phaser.io, ASP.NET, Unity, SQL Server, Electron, PostgreSQL, MongoDB',
                    tools: 'Git, Gitlab CI/CD, Cloud Foundry, Jira, Confluence, Miro, IntelliJ IDEA, Visual Studio Code, Maven/Gradle, SwaggerHub, Postman, Slack, Microsoft Office + Teams, Abstract',
                    other: 'Agile Development, Scrum, Kanban, Test Driven Development, Pair Programming'
                })}
            </Tree>

            <Tree name="experience">
                <Tree name="service nsw" style={{ ...blue }}>
                    <Box sx={{ p: 1 }}>
                        {generateHistory([{ job: "SOFTWARE ENGINEER", date: "DEC 2020 - APR 2022" }])}

                        <p>
                            Service NSW is a cutting edge government agency adopting the latest industry trends to deliver an <strong style={{ ...orange }}>amazing and consistent UX to millions of NSW citizens</strong> everyday.
                            My team, Crisis Response, was responsible for rapid delivering solutions to crises such as COVID-19, bushfires, and floodings. My projects have numbered above a dozen and impacted millions of users.
                        </p>

                        <p>
                            <strong style={{ ...red }}>This trial by fire matured me immensely as a software engineer. </strong>
                            My projects provided exposure to diverse technologies across multiple disciplines, opportunities to mentor junior engineers, become a subject matter expert, and even win awards.
                        </p>

                        Please explore my experience and achievements below!
                    </Box>

                    <Tree name="technologies" style={{ ...yellow }}>
                        <Box sx={{ p: 1 }} >
                            {generateSkills({
                                languages: 'JavaScript/TypeScript, HTML/CSS, Java/Kotlin',
                                frameworks: 'React, Redux, Jest, React Testing Library, TestCafe, Spring Boot, Apigee, reCAPTCHA Enterprise, Splunk, New Relic, PostgreSQL, MongoDB',
                                tools: 'Git, Gitlab CI/CD, Cloud Foundry, Jira, Confluence, Miro, IntelliJ IDEA, Visual Studio Code, SwaggerHub, Postman, Slack, Microsoft Office + Teams, Abstract',
                                other: 'Agile Development, Scrum, Test Driven Development, Pair Programming'
                            })}
                        </Box>
                    </Tree>

                    <Tree name="awards" style={{ ...yellow }}>
                        <Box sx={{ p: 1 }}>
                            <ul style={{ marginTop: '0', marginBottom: '0' }}>
                                <li><strong style={orange}>Winner</strong> for project team - Make It Happen – Team award for Covid Safe Check in</li>
                                <li><strong style={orange}>Winner</strong> for COVID Safe Check-in project - Secretary's Award in the category of Excellence in Digital Innovation</li>
                                <li><strong style={blue}>Finalist</strong> for COVID Safe Check-in project - Secretary's Award in the category of Excellence in Customer Innovation Award</li>
                                <li><strong style={red}>Nomination</strong> for Customer Care - Digital Innovation and Delivery – Team Award</li>
                                <li><strong style={red}>Nomination</strong> for Border Dec project - Secretary's Award in the category of Excellence in Digital Innovation</li>
                            </ul>
                        </Box>
                    </Tree>

                    <Tree name="projects" style={{ ...yellow }}>
                        <Box sx={{ p: 1 }}>
                            <strong style={{ ...orange }}>COVID-19</strong>
                            <ul style={{ marginTop: '0.25rem' }}>
                                <li>COVID-19 Check-in - Statewide</li>
                                <li>COVID-19 Check-in - Schools</li>
                                <li>COVID-19 QR Check-in</li>
                                <li>COVID-19 Check-in Card - Generating a physical card with QR code containing profile data</li>
                                <li>COVID-19 Spotcheck - Internal app to COVID-19 query check-in for contact tracers</li>
                                <li>Register Positive Rapid Antigen Test Result</li>
                                <li>COVID-19 Grant Fraud Form - Reporting form for COVID-19 grant abuse</li>
                            </ul>

                            <strong style={{ ...blue }}>Other disasters</strong>
                            <ul style={{ marginTop: '0.25rem' }}>
                                <li>Disaster and Assistance Finder - Bushfires, floods, and COVID-19</li>
                                <li>Agnostic Assistance Finder</li>
                                <li>SES Request for Assistance - Flooding assistance and grocery deliveries by the SES</li>
                                <li>Cost of Living Form - A savings finder</li>
                            </ul>

                            <strong style={{ ...red }}>Travel</strong>
                            <ul style={{ marginTop: '0.25rem' }}>
                                <li>Border Declaration - All states</li>
                                <li>Border Declaration - New Zealand</li>
                                <li>Generic Border Declaration</li>
                                <li>Travel Permit - All states</li>
                            </ul>
                        </Box>
                    </Tree>

                    <Tree name="more" style={{ ...yellow }}>
                        <Box sx={{ p: 1 }}>
                            to include: mentored juniors, cd/ci optimisations, contribution to ts-services, testing, rapid delivery, sme on recaptcha, etc.
                        </Box>
                        <Tree name="images" style={{ ...green }}></Tree>
                    </Tree>
                </Tree>

                <Tree name="star maths online" style={{ ...orange }}>
                    <Box sx={{ p: 1 }}>
                        {generateHistory([
                            { job: "FULL STACK DEVELOPER", date: "AUG 2019 - SEP 2020" },
                            { job: "GAME DEVELOPER", date: "JUL 2018 - AUG 2019" },
                            { job: "DEVELOPER INTERN", date: "JAN 2018 - JUL 2018" },
                        ])}

                        S.T.A.R. Maths Online (SMO) is an exciting startup located in the EduTech space. It aims to provide a gamification of the learning experience aimed at grades 1 to 6.
                        This <strong style={red}>gamification developed great user engagement and an average of 45% improvement</strong> in class results.

                        <p>
                            But that's not all. SMO also contains a powerful management and analysis system aimed at parents, teachers, and schools.
                            Combined with an internal content authoring tool, SMO is fast, scalable, and captures the vertical EduTech market.
                        </p>

                        <p>
                            SMO was the <strong style={orange}>start of my profession career and exposed me to industry standards across both web development and video game development.</strong>
                            &nbsp;During my time at SMO, I was responsible for dynamic content creation, QA, user engagement features inside the game, and web development on the parent portal.
                        </p>

                        Please delve into my time at SMO in detail below!
                    </Box>

                    <Tree name="technologies" style={{ ...yellow }}>
                        <Box sx={{ p: 1 }}>
                            LIST
                        </Box>
                    </Tree>

                    <Tree name="achievements" style={{ ...yellow }}>
                        <Box sx={{ p: 1 }}>
                            LIST
                        </Box>
                    </Tree>

                    <Tree name="more" style={{ ...yellow }}>
                        <Box sx={{ p: 1 }}>
                            LIST
                        </Box>
                    </Tree>
                </Tree>

                <Tree name="NCCORP" style={{ ...red }}>
                    <Box sx={{ p: 1 }}>
                        DESCRIPTION
                    </Box>

                    <Tree name="technologies" style={{ ...yellow }}>
                        <Box sx={{ p: 1 }}>
                            LIST
                        </Box>
                    </Tree>

                    <Tree name="achievements" style={{ ...yellow }}>
                        <Box sx={{ p: 1 }}>
                            LIST
                        </Box>
                    </Tree>

                    <Tree name="more" style={{ ...yellow }}>
                        <Box sx={{ p: 1 }}>
                            LIST
                        </Box>
                    </Tree>
                </Tree>

                <Tree name="other" style={{ ...green }}>
                    <Tree name="freelance" style={{ ...yellow }}>
                        <Box sx={{ p: 1 }}>
                            {generateHistory([{ job: 'DATA ENTRY PROJECT', date: 'JUL 2016 - AUG 2016' }])}

                            Used <strong style={orange}>Electron</strong> to create a proof-of-concept data entry software tailored specifically to the requirements of a physiotherapy business.
                        </Box>
                    </Tree>

                    <Tree name="non tech" style={{ ...yellow }}>
                        <Box sx={{ p: 1 }}>
                            {generateHistory([{ job: 'FOOD & BEVERAGE ATTENDANT', date: 'JAN 2018 - JUL 2018' }])}

                            <p>A standard hospitality job. I worked as a bartender and covered gaming shifts too.</p>

                            <hr style={{ borderColor: white.color, borderStyle: 'dashed', maxWidth: '75rem', marginLeft: 0, marginBottom: '1rem' }} />

                            {generateHistory([{ job: 'PRIVATE HSC TUTOR', date: '2016 - 2017' }])}

                            Tutored some family friends for HSC.
                        </Box>
                    </Tree>
                </Tree>
            </Tree>
        </animated.div >
    )
}

export default React.memo(InfoTree);