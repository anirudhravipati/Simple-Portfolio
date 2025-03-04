import {useState, useEffect} from "react";
import {
    Theme, Flex, Heading, IconButton, Link, Container, Card, Text, Separator, Callout, Em, Box
} from "@radix-ui/themes";
import {SiteMenuDropdown} from "../../components/SiteMenuDropdown/SiteMenuDropdown";
import {Sun, MoonStars, Barricade, Lightbulb} from "@phosphor-icons/react";
import Footer from "../../components/Footer/Footer";
import TextHoverCard from "../../components/TextHoverCard/TextHoverCard";
import "./TestRCA.css";
import PortfolioLogo from "../../components/Portfolio Logo/PortfolioLogo";
import {Info} from "@phosphor-icons/react/dist/ssr";
import ImageViewer from "../../components/ImageViewer/ImageViewer.jsx";

export default function TestRCA() {
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
            console.log("First Retriveved mode: " + JSON.parse(localStorage.getItem("darkMode")));
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

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);


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
            <TestRCABody/>
            <Footer/>
        </Theme>);
}

function TestRCABody() {
    return (<Flex
        p={"5"}
        gap={"5"}
        direction={"column"}
        align={"center"}
        style={{minHeight: "100vh"}}
    >
        <PortfolioLogo height={"3rem"}/>
        <Heading align={"center"} size={"9"}>
            Test Root Cause Analysis
            <Heading align={"right"} size={"4"}>
                by CloudAEye
            </Heading>
        </Heading>
        <HeroSection/>
        <ProjectAim/>
        <Research/>
        <DesignProcess/>
        <Outcome/>
    </Flex>);
}

function HeroSection() {
    return (<Container mt={'2'} size={"3"}>
        <Card>
            <Flex direction={"column"} gap={"3"} width={"100%"}>
                <img style={{width: "100%"}} src={"/Code Review/page/Hero.png"}/>
                <Text align={"center"}>
                    Test RCA was developed to simplify and accelerate the debugging process by transforming complex
                    test failure logs into clear, AI-driven root-cause summaries. By automating the analysis of lengthy
                    error data, Test RCA empowers teams to quickly diagnose issues and get back to coding.
                </Text>
            </Flex>
        </Card>
    </Container>)
}

function ProjectAim() {

    return (<Container mt={'2'} size={"3"}>
        <Card>
            <Flex direction={"column"} gap={"3"} width={"100%"}>
                <Heading color={"jade"} size={"6"}>The Challenge</Heading>
                <Text align={"left"}>
                    The primary challenge for Test RCA was the cumbersome onboarding process. Users faced a multi-step
                    setup:
                </Text>
                <ul style={{listStylePosition: "inside", listStyleType: "square"}}>
                    <li>
                        <Em>Login & Plan Selection:</Em> The journey began with logging in and choosing the appropriate
                        plan.
                    </li>
                    <li>
                        <Em>CI Integration:</Em> Depending on the continuous integration system in use, the process
                        diverged.
                        For GitHub Actions users, repositories had to be configured for monitoring. For those using
                        Jenkins
                        or Codebuild, an additional integration step was required
                    </li>
                    <li>
                        <Em>Configuration:</Em> Finally, users needed to select which CI jobs would be monitored by
                        CloudAEye.
                        This layered setup required careful design to ensure clarity and reduce friction right from the
                        start.
                    </li>
                </ul>
            </Flex>
        </Card>
    </Container>)
}

function Research() {
    let competitveAnalysis = {
        src: "/Test RCA/Competition/1.png",
        hotspots: [
            {
                top: "50%",
                left: "30%",
                title: "Checking out the competition",
                content: (
                    <Text>
                        We went through the open sandbox demos, or actually using our competitor's products to get a
                        feel for their capabilities. Each competitor's product is broken into the constituent features
                        and observations are recorded in Figma
                    </Text>
                ),
            }]
    }

    return (
        <Container mt={'2'} size={"3"}>
            <Card>
                <Flex direction={"column"} gap={"3"} width={"100%"}>
                    <Heading color={"jade"} size={"6"}>Research & UX Insights</Heading>
                    <Text align={"left"}>
                        Our research approach was multi-layered:
                    </Text>
                    <Card>
                        <Heading size={"3"}>
                            Competitive Analysis
                        </Heading>
                        <ImageViewer {...competitveAnalysis} style={{
                            marginTop: "0.5rem",
                            marginBottom: "0.5rem",
                            width: "100%",
                            height: "auto",
                            border: "2px solid var(--jade-11)",
                            borderRadius: "0.25rem"
                        }}/>
                        <Text>
                            We began by evaluating competitors like TestSigma and Launchable,
                            assessing how they handled test failure analysis and user onboarding
                        </Text>
                    </Card>
                    <Card>
                        <Heading size={"3"}>
                            Rapid Prototyping
                        </Heading>
                        <Text>
                            We created a quick Figma prototype and demoed a working version
                            using CloudAEye's own test suite at a conference
                        </Text>
                    </Card>
                    <Card>
                        <Heading size={"3"}>
                            User Feedback
                        </Heading>
                        <Text>
                            The demo generated several leads. One particularly engaged prospect highlighted
                            the need for additional integration features—specifically, the ability to integrate Test RCA
                            via a
                            Jenkins plugin.
                        </Text>
                    </Card>
                    <Card>
                        <Heading size={"3"}>
                            Iterative Refinement
                        </Heading>
                        <img className={"test-rca-generic-mockups"} src={"/Test RCA/Design/1.png"}/>
                        <Text>
                            These insights directly influenced our development strategy,
                            leading us to shape the MVP around real customer needs
                        </Text>
                    </Card>
                </Flex>
            </Card>
        </Container>)
}

function DesignProcess() {
    let initialPrototype = {
        src: "/Test RCA/Initial/3.png",
        hotspots: [
            {
                top: "50%",
                left: "30%",
                title: "Sign Up to Setup",
                content: (
                    <Text>
                        The challenge was to find the balance between showing the steps ahead while also holding
                        information and delivering it at the right time in the journey from signup to setup
                    </Text>
                ),
            }]
    }
    let jenkins2data = {
        src: "/Test RCA/Jenkins/1.png",
        hotspots: [
            {
                top: "50%",
                left: "30%",
                title: "Configure at CloudAEye",
                content: (
                    <Text>
                        Once they install the plugin, the user can choose which repos to be monitored by CloudAEye
                        and which ones not to. They can also get better results for test
                        fixes and reports by specifying which test framework is used
                    </Text>
                ),
            }]
    }
    let jenkins1data = {
        src: "/Test RCA/Jenkins/2.png",
        hotspots: [
            {
                top: "82%",
                left: "40%",
                title: "Jenkins Plugin",
                content: (
                    <Text>
                        First we quickly developed a Jenkins plugin that could connect to the client's account
                        in CloudAEye and forward project & build data
                    </Text>
                ),
            }]
    }


    return (
        <Container className={"mobile-width"}  mt={'2'} size={"3"}>
            <Card>
                <Flex direction={"column"} gap={"3"} >
                    <Heading color={"jade"} size={"6"}>Design & Iteration Process</Heading>
                    <Card>
                        <Flex  direction={"column"} gap={"2"}>
                            <Heading size={'3'}>
                                Initial Prototype & Feedback
                            </Heading>
                            <Text>
                                We began with a prototype that visualized how AI could convert dense error
                                logs into succinct summaries.
                            </Text>

                            <Callout.Root color={"ruby"} size={"2"}>
                                <Callout.Icon>
                                    <Barricade size={"1.5rem"}/>
                                </Callout.Icon>
                                <Callout.Text>
                                    <Em>Challenge</Em> The early prototype, while promising, exposed pain points in the
                                    onboarding process and integration flow
                                </Callout.Text>
                            </Callout.Root>

                            <Flex px={"1"} justify={"start"} align={"center"} pb={"1"} gap={"3"} direction={"row"}
                                  overflowX={"scroll"}>
                                <Box>
                                    <ImageViewer {...initialPrototype} style={{
                                        aspectRatio: "16/9",
                                        marginTop: "0.5rem",
                                        marginBottom: "0.5rem",
                                        height: "30rem",
                                        border: "2px solid var(--jade-11)",
                                        borderRadius: "0.25rem"
                                    }}/>
                                </Box>
                                <img className={"test-rca-generic-mockups"} src={"/Test RCA/Initial/4.png"}/>
                            </Flex>
                        </Flex>
                    </Card>
                    <Card>
                        <Flex direction={"column"} gap={"2"}>
                            <Heading size={'3'}>
                                Customer-Driven Iterations
                            </Heading>
                            Building on feedback from our conference demo, we refined the design to include
                            a Jenkins plugin integration, addressing one of the most critical customer requests.
                            <Flex
                                justify={"start"}
                                align={"center"}
                                px={"1"} pb={"1"}
                                maxWidth={"100%"}
                                gap={"3"} direction={"row"}
                                overflowX={"scroll"}
                            >
                                <Box>
                                    <ImageViewer {...jenkins1data} style={{
                                        aspectRatio: "16/9",
                                        marginTop: "0.5rem",
                                        marginBottom: "0.5rem",

                                        height: "30rem",
                                        border: "2px solid var(--jade-11)",
                                        borderRadius: "0.25rem"
                                    }}/>
                                </Box>
                                <img className={"test-rca-generic-mockups"} src={"/Test RCA/Jenkins/3.png"}
                                     style={{width: "100%"}}/>
                                <Box>
                                    <ImageViewer {...jenkins2data} style={{
                                        aspectRatio: "16/9",
                                        marginTop: "0.5rem",
                                        marginBottom: "0.5rem",
                                        height: "30rem",
                                        border: "2px solid var(--jade-11)",
                                        borderRadius: "0.25rem"
                                    }}/>
                                </Box>
                            </Flex>
                            <Callout.Root color={"indigo"} size={"2"}>
                                <Callout.Icon>
                                    <Info size={"1.5rem"}/>
                                </Callout.Icon>
                                <Callout.Text>
                                    Subsequent iterations focused on streamlining the multi-step setup.
                                    We simplified the workflow without sacrificing the flexibility required for
                                    different
                                    CI environments (GitHub Actions, Jenkins, Codebuild).
                                </Callout.Text>
                            </Callout.Root>
                        </Flex>


                    </Card>
                </Flex>
            </Card>
        </Container>)
}

function Outcome() {
    let outcomeImages = [
        {
            src: "/Test RCA/Outcome/1.png",
            hotspots: [
                {
                    top: "50%",
                    left: "30%",
                    title: "Clear steps",
                    content: (
                        <Text>
                            Information about what to do is hidden until necessary so as to not overwhelm the user with
                            what's ahead
                        </Text>
                    ),
                }]
        },
        {
            src: "/Test RCA/Outcome/3.png",
            hotspots: [
                {
                    top: "15%",
                    left: "75%",
                    title: "Data / Meta-data",
                    content: (
                        <Text>
                            Anything that is needed to be known about the test run - we show it here: the file links,
                            repo names, error logs, root cause and fix
                        </Text>
                    ),
                }]
        },
        {
            src: "/Test RCA/Outcome/4.png",
            hotspots: [
                {
                    top: "15%",
                    left: "75%",
                    title: "Do everything from the same screen",
                    content: (
                        <Text>
                            CloudAEye also suggests code fixes for test failures where applicable
                            so that the entire post-coding process can be smoothly taken care
                            of from the same screen
                        </Text>
                    ),
                }]
        },
        {
            src: "/Test RCA/Outcome/5.png",
            hotspots: [
                {
                    top: "50%",
                    left: "50%",
                    title: "Github Integrated",
                    content: (
                        <Text>
                            You can also quickly check the status of tests, cause , and fixes from GitHub then too.
                        </Text>
                    ),
                }]
        }
    ]

    return (
        <Container className={"mobile-width"} mt={'2'} size={"3"}>
            <Card>
                <Flex direction={"column"} gap={"3"} width={"100%"}>
                    <Heading color={"jade"} size={"6"}>Outcomes & Impact</Heading>
                    <Flex pb={"1"} mb={"3"} direction={"row"} style={{width: "100%"}} flexGrow={"0"} justify={"start"}
                          align={"start"}
                          gap={"2"} overflowX={"auto"}>
                        {
                            outcomeImages.map((item) => (
                                <ImageViewer key={item.src} {...item} style={{
                                    minWidth: "100%",

                                    marginTop: "0.5rem",
                                    marginBottom: "0.5rem",
                                    height: "auto",
                                    border: "2px solid var(--jade-11)",
                                    borderRadius: "0.25rem"
                                }}/>
                            ))

                        }
                    </Flex>
                    <ul style={{listStylePosition: "inside", listStyleType: "square"}}>
                        <li>
                            <Em>Streamlined Onboarding:</Em> By simplifying the multi-step setup process, support
                            queries
                            related to integration dropped by approximately 40%, enabling teams to get up and running
                            faster.
                        </li>
                        <Separator my={"2"} size={"4"}/>
                        <li>
                            <Em>Faster Time-to-Value:</Em> Users reported completing the entire configuration process up
                            to 50% quicker than before, significantly reducing the friction in adopting the solution.
                        </li>
                        <Separator my={"2"} size={"4"}/>
                        <li>
                            <Em>Enhanced Customer Satisfaction:</Em> Early adopters praised the intuitive flow and clear
                            guidance during onboarding, which translated into positive testimonials and
                            stronger market positioning for CloudAEye.
                        </li>
                    </ul>
                </Flex>
            </Card>
        </Container>)
}