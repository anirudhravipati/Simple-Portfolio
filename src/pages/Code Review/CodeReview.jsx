import {useState, useEffect} from "react";
import {
    Theme,
    Flex,
    Heading,
    IconButton,
    Link, Container, Card, Text, Separator, Callout, Em
} from "@radix-ui/themes";
import {Accordion} from "radix-ui";
import {SiteMenuDropdown} from "../../components/SiteMenuDropdown/SiteMenuDropdown";
import {Sun, MoonStars, Image, Barricade, Lightbulb} from "@phosphor-icons/react";
import Footer from "../../components/Footer/Footer";
import TextHoverCard from "../../components/TextHoverCard/TextHoverCard";
import "./CodeReview.css";
import PortfolioLogo from "../../components/Portfolio Logo/PortfolioLogo";

export default function CodeReview() {
    // Dark Mode Setup
    const [mode, setMode] = useState(() => {
        if (JSON.parse(localStorage.getItem("darkMode") !== undefined)) {
            console.log("Read mode: " + JSON.parse(localStorage.getItem("darkMode")));
            return JSON.parse(localStorage.getItem("darkMode")) ? true : false;
        } else {
            console.log("dark mode read is undefined!");
            localStorage.setItem("darkMode", JSON.stringify(false));
            return false;
        }
    });

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("darkMode") !== undefined)) {
            console.log(
                "First Retriveved mode: " + JSON.parse(localStorage.getItem("darkMode"))
            );
            setMode(JSON.parse(localStorage.getItem("darkMode")) ? true : false);
        } else {
            console.log("dark mode is undefined!");
            localStorage.setItem("darkMode", JSON.stringify(mode));
        }
    }, []);

    useEffect(() => {
        console.log("setting mode! : " + mode);
        localStorage.setItem("darkMode", JSON.stringify(mode));
    }, [mode]);
    // END Dark Mode Setup

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Theme
            appearance={mode ? "light" : "dark"}
            accentColor="jade"
            grayColor="sand"
            panelBackground="solid"
        >
            <SiteMenuDropdown/>
            <IconButton
                onClick={() => setMode(!mode)}
                variant="ghost"
                style={{position: "fixed", right: "1rem", top: "1rem", zIndex: "1"}}
            >
                {mode ? <MoonStars size={"1.5rem"}/> : <Sun size={"1.5rem"}/>}
            </IconButton>

            <CIIDBody/>
            <Footer/>
        </Theme>
    );
}

function CIIDBody() {
    return (
        <Flex
            p={"5"}
            gap={"5"}
            direction={"column"}
            align={"center"}
            style={{minHeight: "100vh"}}
        >
            <PortfolioLogo height={"3rem"}/>
            <Heading align={"center"} size={"9"}>
                Code Review
                <Heading align={"right"} size={"4"}>
                    by CloudAEye
                </Heading>
            </Heading>
            <HeroSection/>
            <ProjectAim/>
            <Research/>
            <DesignProcess/>
            <Challenges/>
            <Outcome/>
        </Flex>
    );
}

function HeroSection() {
    return (
        <Container mt={'2'} size={"3"}>
            <Card>
                <Flex direction={"column"} align={"center"} gap={"3"} width={"100%"}>
                    <img style={{width: "100%"}} src={"/Code Review/page/Hero.png"}/>
                    <Heading color={"jade"} size={"6"}>Accelerating Code Quality and Security Without Slowing Teams
                        Down</Heading>
                    <Text align={"center"}>
                        Code Review streamlines post-coding workflows by automating bug detection, security analysis,
                        and AI-powered fixes directly in GitHub. By integrating seamlessly into developer workflows,
                        it eliminates review bottlenecks and reduces deployment time from days to hours.
                    </Text>
                </Flex>
            </Card>
        </Container>
    )
}

function ProjectAim() {
    return (
        <Container mt={'2'} size={"3"}>
            <Card>
                <Flex direction={"column"} gap={"3"} width={"100%"}>
                    <Heading color={"jade"} align={"left"} size={"6"}>Understanding the Problem</Heading>
                    <Text align={"center"}>
                        Every developer experiences the friction of post-coding workflows—waiting for PR reviews,
                        fixing vulnerabilities flagged by security teams, and ensuring compliance before a feature can
                        go live.<br/>


                    </Text>
                    <Separator size={"4"}/>
                    <img style={{width: "100%"}} src={"/Code Review/page/Aim.png"}/>
                    <Text align={"left"}>
                        CloudAEye wanted to intervene right at this critical point and make the transition from coding
                        to
                        deployment seamless.

                        To achieve this, Code Review needed to: <br/>
                        ✅ Eliminate friction in the review process<br/>
                        ✅ Automate bug detection and security analysis<br/>
                        ✅ Provide AI-generated fixes to speed up development<br/>
                        ✅ Integrate deeply into GitHub to minimize context switching<br/>
                    </Text>
                </Flex>
            </Card>
        </Container>
    )
}

function Research() {
    return (
        <Container mt={'2'} size={"3"}>
            <Card>
                <Flex direction={"column"} gap={"3"} width={"100%"}>
                    <Heading color={"jade"} size={"6"}>Research & UX Insights</Heading>
                    <Text align={"left"}>
                        We approached research in two phases:<br/></Text>
                    <Card>


                        <Text style={{width: '100%'}}>
                            <Heading size={"3"}>1. Competitive Analysis</Heading>
                            We studied existing AI-assisted code review tools, analyzing:<br/>
                            <ul style={{listStylePosition: "inside", listStyleType: "square"}}>
                                <li>How they integrated into GitHub or other version control systems</li>
                                <li>What kind of reports they generated (security vulnerabilities, code quality
                                    insights, etc.)
                                </li>
                                <li>How developers interacted with these tools within their workflow</li>
                            </ul>
                            This led to an Figma prototype - a jumping board from which we could pivot to point of better UX.
                        </Text>
                    </Card>
                    <Card>
                        <Flex mb={"2"} direction={"column"} >
                            <Flex pb={"1"} gap={"3"} direction={"row"} overflowX={"scroll"}>
                                <img className={"generic-mockups"} src={"/Code Review/page/Initial Protoype v1/image 11.png"} style={{width: "100%"}}/>
                                <img className={"generic-mockups"} src={"/Code Review/page/Initial Protoype v1/image 12.png"} style={{width: "100%"}}/>
                            </Flex>
                            <Text align={"center"} size={"2"}>Initial prototype </Text>
                        </Flex>

                        <Text style={{width: '100%'}}>
                            <Heading size={"3"}>2. User Testing & Feedback</Heading>
                            Once we had a working prototype, we conducted hands-on user testing with a startup founder
                            and engineers, asking them to review a Figma prototype. Their key insights shaped the next
                            stage of our design:
                            <ul style={{listStylePosition: "inside", listStyleType: "square"}}>
                                <li>
                                    Developers didn't want a separate UI –
                                    switching between CloudAEye and GitHub was inefficient
                                </li>
                                <li>
                                    Better integration was needed – surfacing
                                    insights directly in GitHub comments was preferable
                                </li>
                                <li>
                                    Report credibility was key – AI-generated
                                    reports needed risk classification to be trusted
                                </li>
                            </ul>
                        </Text>
                    </Card>
                </Flex>
            </Card>
        </Container>
    )
}

function DesignProcess() {
    return (
        <Container className={"mobile-width"} mt={'2'} size={"3"}>
            <Card>
                <Flex direction={"column"} gap={"3"} width={"100%"}>
                    <Heading color={"jade"} size={"6"}>Design & Iteration Process</Heading>
                    <Text>We designed Code Review in three key phases:</Text>
                    <Card>
                        <Flex direction={"column"} gap={"2"}>
                        <Heading size={'3'}>
                            UI in CloudAEye
                        </Heading>
                        <Text>
                            Our initial prototype surfaced

                            AI-generated code review reports
                            Security vulnerability detection
                            PR summaries
                        </Text>
                        <Callout.Root color={"ruby"} size={"2"}>
                            <Callout.Icon>
                                <Barricade size={"1.5rem"} />
                            </Callout.Icon>
                            <Callout.Text>
                                    <Em>Challenge</Em> Developers didn’t want to switch between GitHub and CloudAEye's UI. The developer is already multi-tasking and they didn't want another window open.
                            </Callout.Text>
                        </Callout.Root>
                        <Callout.Root color={"green"} size={"2"}>
                            <Callout.Icon>
                                <Lightbulb size={"1.5rem"} />
                            </Callout.Icon>
                            <Callout.Text>
                                <Em>Solution</Em> It was clear to us, that for the developer to have an integrated experience wherein the context of the report was close to the report itself
                            </Callout.Text>
                        </Callout.Root>
                        </Flex>


                    </Card>
                    <Card>
                        <Flex direction={"column"} gap={"2"}>
                            <Heading size={'3'}>
                                Integrating with GitHub
                            </Heading>
                            <Flex mb={"2"} direction={"column"} >
                                <Flex pb={"1"} gap={"3"} direction={"row"} overflowX={"scroll"}>
                                    <img src={"/Code Review/page/GitHub/1.png"} className={"github-mockups"}  />
                                    <img src={"/Code Review/page/GitHub/2.png"}  className={"github-mockups"}/>
                                    <img src={"/Code Review/page/GitHub/3.png"}  className={"github-mockups"}/>
                                </Flex>
                            </Flex>

                            Based on user feedback, we transformed Code Review into a GitHub integration, featuring:
                            <ul style={{listStylePosition: "inside", listStyleType: "square"}}>
                                <li>AI-generated comments under pull requests</li>
                                <li>Automated security analysis & bug detection</li>
                                <li>A CloudAEye bot that could be invoked on-demand</li>
                            </ul>
                            This ensured developers never had to leave GitHub to access insights.
                        </Flex>


                    </Card>
                    <Card>
                        <Flex direction={"column"} gap={"2"}>
                            <Heading size={'3'}>
                                Enhancing Report Credibility
                            </Heading>
                            <Flex mb={"2"} direction={"column"} >
                                <img src={"/Code Review/page/GitHub/4.png"} className={"single-image"}  />

                                <Flex pb={"1"} gap={"1"} direction={"row"} overflowX={"scroll"}>
                                </Flex>
                            </Flex>

                            To boost trust in AI-generated reports, we added:
                            <ul style={{listStylePosition: "inside", listStyleType: "square"}}>
                                <li>Categorization using OWASP standards</li>
                                <li>Risk levels for security vulnerabilities</li>
                                <li>Priority-based sorting of issues</li>
                            </ul>
                            This made it easier for teams to focus on high-impact issues first.
                        </Flex>


                    </Card>
                </Flex>
            </Card>
        </Container>
    )
}

function Challenges() {
    return(
        <Container mt={'2'} size={"3"}>
            <Card>
                <Flex direction={"column"} gap={"3"} width={"100%"}>
                    <Heading color={"jade"} size={"6"}>Challenges & Solutions</Heading>
                    <Heading size={"3"}>Translating UI Data into GitHub's Markdown</Heading>
                    <Callout.Root color={"ruby"} size={"2"}>
                        <Callout.Icon>
                            <Barricade size={"1.5rem"} />
                        </Callout.Icon>
                        <Callout.Text>
                            <Em>Challenge</Em> Our custom UI was designed to display rich, interactive data,
                            but when integrating into GitHub, we had to translate this into a system of commands and
                            markdown text. This meant stripping down the complex visuals and interactivity into a limited,
                            text-based format that GitHub’s markdown editor supports.
                        </Callout.Text>
                    </Callout.Root>
                    <Callout.Root color={"green"} size={"2"}>
                        <Callout.Icon>
                            <Lightbulb size={"1.5rem"} />
                        </Callout.Icon>
                        <Callout.Text>
                            <Em>Solution</Em> We distilled the wealth of information into concise,
                            targeted insights expressed through markdown. By doing so, developers can still access
                            the critical data they need—requesting specific insights via simple commands—without overwhelming
                            the interface.
                        </Callout.Text>
                    </Callout.Root>
                    <Separator size={"4"}/>
                    <Heading size={"3"}>Enabling In-Context Fixes Within GitHub</Heading>
                    <Callout.Root color={"ruby"} size={"2"}>
                        <Callout.Icon>
                            <Barricade size={"1.5rem"} />
                        </Callout.Icon>
                        <Callout.Text>
                            <Em>Challenge</Em> Fixing issues directly within GitHub required converting detailed UI
                            data into actionable markdown commands. This translation risked losing context,
                            as developers traditionally had to switch between our custom interface and GitHub to address
                            bugs and vulnerabilities.
                        </Callout.Text>
                    </Callout.Root>
                    <Callout.Root color={"green"} size={"2"}>
                        <Callout.Icon>
                            <Lightbulb size={"1.5rem"} />
                        </Callout.Icon>
                        <Callout.Text>
                            <Em>Solution</Em> We embedded AI-generated fixes directly into GitHub’s comment threads.
                            By converting detailed reports into succinct markdown annotations and commands, developers
                            could review and apply fixes without ever leaving GitHub,
                            maintaining workflow continuity and context.
                        </Callout.Text>
                    </Callout.Root>

                </Flex>
            </Card>
        </Container>)
}

function Outcome() {
    return(
        <Container mt={'2'} size={"3"}>
            <Card>
                <Flex direction={"column"} gap={"3"} width={"100%"}>
                    <Heading color={"jade"} size={"6"}>Outcomes & Impact</Heading>
                    <Text>
                        We successfully built a GitHub-integrated AI code reviewer that:<br/>
                        🚀 Reduced post-coding workflow time from 4 days to under 1 day<br/>
                        💡 Enabled seamless AI-powered bug fixes<br/>
                        🔗 Kept developers entirely within GitHub for their reviews<br/>
                        🔍 Classified security issues using OWASP standards<br/>
                    </Text>
                    By embedding intelligence directly into developer workflows, Code Review turned slow, manual review cycles into an AI-assisted process, helping teams ship faster and with confidence.

                </Flex>
            </Card>
        </Container>)
}