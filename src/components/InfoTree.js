import React from 'react';
import { Tree } from './';
import { useSpring, animated, config } from '@react-spring/web';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import { Typography } from '@mui/material';

const InfoTree = ({ aniRef }) => {

    const { ...styles } = useSpring({
        // ref: springApi,
        delay: 500,
        config: { ...config.gentle, friction: 25 },
        from: { opacity: '0' },
        to: { opacity: '1' },
        ref: aniRef || null
    });

    const buttonStyles = { mr: 1, fontWeight: 900, mt: 1, minWidth: 120 };
    const blue = { color: '#008DD5' };
    const white = { color: '#F4FFFD' };
    const orange = { color: '#FFA400' };
    const red = { color: '#EF476F' };
    const yellow = { color: '#FFFF00' };

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

                        <Button sx={{ ...buttonStyles, backgroundColor: '#FFA400', color: '#0e131f' }} href="https://www.linkedin.com/in/kevinthachngo/" target="_blank" variant="contained">
                            Linkedin&nbsp;<LinkedInIcon />
                        </Button>

                        <Button sx={{ ...buttonStyles, backgroundColor: '#EF476F' }} href='./kevin_ngo_resume_v2-1.pdf' target="_blank" variant="contained">
                            Resume&nbsp;<ArticleIcon />
                        </Button>
                    </Box>
                </Tree>
            </Tree>

            <Tree name="skills">
                <Tree name="lanugages" defaultOpen style={{ ...blue }}>
                    <Box sx={{ p: 1 }}>
                        JavaScript/TypeScript, HTML/CSS, Java/Kotlin, SQL, C#, Python
                    </Box>
                </Tree>

                <Tree name="frameworks & libraries" defaultOpen style={{ ...orange }}>
                    <Box sx={{ p: 1 }}>
                        React, Redux, React Testing Library, TestCafe, Spring Boot, Apigee, reCAPTCHA Enterprise, Phaser.io, ASP.NET, Unity, SQL Server, Electron
                    </Box>
                </Tree>

                <Tree name="tools" defaultOpen style={{ ...red }}>
                    <Box sx={{ p: 1 }}>
                        Git, Gitlab CI/CD, Cloud Foundry, Jira, Confluence, Miro, IntelliJ IDEA, Visual Studio Code, Maven, Gradle, SwaggerHub, Postman, Slack, Microsoft Office + Teams, Abstract
                    </Box>
                </Tree>
            </Tree>

            <Tree name="experience">
                <Tree name="service nsw" style={{ ...blue }}>
                    <Box sx={{ p: 1 }}>
                        Service NSW is a cutting edge government agency adopting the latest industry trends to deliver an <strong style={{...orange}}>amazing and consistent UX to millions of NSW citizens</strong> everyday.
                        My team, Crisis Response, was responsible for rapid delivering solutions to crises such as COVID-19, bushfires, and floodings. My projects have numbered above a dozen and impacted millions of users.
                        <p>
                            <strong style={{...red}}>This trial by fire matured me immensely as a software engineer. </strong>
                            My projects provided exposure to diverse technologies across multiple disciplines, opportunities to mentor junior engineers, become a subject matter expert, and even win awards.
                        </p>
                        Please explore my experience and achievements below!
                    </Box>

                    <Tree name="tech stacks" style={{ ...yellow }}>
                        <Box sx={{ p: 1 }}>
                            LIST
                        </Box>
                    </Tree>

                    <Tree name="awards" style={{ ...yellow }}>
                        <Box sx={{ p: 1 }}>
                            LIST
                        </Box>
                    </Tree>

                    <Tree name="images" style={{ ...yellow }}>
                        <Box sx={{ p: 1 }}>
                            LIST
                        </Box>
                    </Tree>
                </Tree>

                <Tree name="S.T.A.R. Maths Online" style={{ ...orange }}>
                    <Box sx={{ p: 1 }}>
                        DESCRIPTION
                    </Box>

                    <Tree name="images" style={{ ...yellow }}>
                        <Box sx={{ p: 1 }}>
                            LIST
                        </Box>
                    </Tree>
                </Tree>

                <Tree name="NCCORP" style={{ ...red }}>
                    <Box sx={{ p: 1 }}>
                        DESCRIPTION
                    </Box>

                    <Tree name="images" style={{ ...yellow }}>
                        <Box sx={{ p: 1 }}>
                            LIST
                        </Box>
                    </Tree>
                </Tree>
            </Tree>

            <Tree name="example">
                <Tree name="testing" />
                <Tree name="subtree with children">
                    <Tree name="hello" />
                    <Tree name="sub-subtree with children">
                        <Tree name="child 1" style={{ color: '#37ceff' }} />
                        <Tree name="child 2" style={{ color: '#37ceff' }} />
                        <Tree name="child 3" style={{ color: '#37ceff' }} />
                        <Tree name="custom content">
                            <div
                                style={{ position: 'relative', width: '100%', height: 200, padding: 10 }}>
                                <div
                                    style={{ width: '100%', height: '100%', background: 'black', borderRadius: 5 }}
                                />
                            </div>
                        </Tree>
                    </Tree>
                    <Tree name="hello" />
                </Tree>
                <Tree name="world" />
                <Tree name={<span>🙀 something something</span>} />
            </Tree>
        </animated.div >
    )
}

export default React.memo(InfoTree);