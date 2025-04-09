import {useEffect, useState} from "react";
import {
    Theme,
    IconButton,
    Heading,
    Flex,
    Container,
    Card,
    Text,
    Link,
    Separator,
    DataList, Badge,
} from "@radix-ui/themes";
import {MoonStars, NumberCircleOne, NumberCircleThree, NumberCircleTwo, Sun} from "@phosphor-icons/react";
import {SiteMenuDropdown} from "../../components/SiteMenuDropdown/SiteMenuDropdown";
import TextHoverCard from "../../components/TextHoverCard/TextHoverCard";
import Footer from "../../components/Footer/Footer";
import {

    FigmaBadge,
    LaptopBadge,
    SaaSBadge, B2BBadge, ReactBadge, MuiBadge, ConfluenceBadge,
} from "../../data/PortfolioData";
import "./LogManagement.css"
import PortfolioLogo from "../../components/Portfolio Logo/PortfolioLogo";

export default function LM() {
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
            <LogManagementBody/>
            <Footer/>
        </Theme>
    );
}

function LogManagementBody() {
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
                Log Management{" "}
                <Heading align={"right"} size={"4"}>
                    by CloudAEye
                </Heading>
            </Heading>
            <Flex direction={"column"} gap={"2"}>
                <CoverSection/>
                <Context/>
            </Flex>
            <Challenge/>
            <Research/>
            <DesignIteration/>
            <Outcomes/>
        </Flex>
    );
}

function CoverSection() {
    return (
        <Container size={"4"}>
            <Card size={"1"}>
                <Flex direction="column" p={"1"}>
                    <img
                        src="/LogManagement/Cover Photos/Logs Insights/Sarari - DarkInsights.png"
                        style={{
                            borderRadius: "0.5rem",
                            objectFit: "contain",
                            width: "100%",
                        }}
                    />
                    <Text weight={"light"} align={"center"} size={"3"}>
                        CloudAEye&#39;s Log Management is an <TextHoverCard
                        trigger={"AI Ops"}
                        content={
                            "AI Ops, short for Artificial Intelligence for IT Operations, is a technology-driven approach that leverages artificial intelligence and machine learning to enhance the management and performance of IT operations. It combines automation, data analytics, and predictive capabilities to streamline and optimize various IT processes, such as monitoring, troubleshooting, and incident response. AI Ops helps organizations proactively identify and resolve IT issues, improve system reliability, and enhance overall operational efficiency, ultimately leading to better user experiences and reduced downtime"
                        }
                    /> SaaS platform designed to help DevOps and SREs analyze
                        logs, detect anomalies, and troubleshoot cloud application issues using AI. As the founding and
                        sole designer, I was responsible for shaping the user experience from the ground up. I
                        collaborated directly with a core team comprising frontend developers, ML engineers, and the
                        CEO. My unique background as a developer-turned-designer was key in translating complex
                        technical capabilities into an intuitive product.
                    </Text>
                </Flex>
            </Card>
        </Container>
    );
}


function Context() {
    return (
        <Container align={"center"} size={"4"}>
            <Card size={"1"}>
                <Heading size={"3"} color={'jade'} mb={"2"}>Project Context</Heading>
                <DataList.Root size={"1"} orientation={{initial: "vertical", sm: "horizontal"}}>
                    <DataList.Item>
                        <DataList.Label>Status</DataList.Label>
                        <DataList.Value>
                            <Badge color={"bronze"}>Currently Inactive</Badge>

                        </DataList.Value>

                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label>Domain</DataList.Label>
                        <DataList.Value>
                            <Flex gap={"1"}>
                                <SaaSBadge/>
                                <B2BBadge/>
                            </Flex>
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label>Research Methods</DataList.Label>
                        <DataList.Value>
                            <Flex gap={"1"} overflowX={"auto"}>
                                <Badge color={"amber"}>
                                    Competitive Analysis
                                </Badge>
                            </Flex>
                        </DataList.Value>
                    </DataList.Item>

                    <DataList.Item>
                        <DataList.Label>Tools Involved</DataList.Label>
                        <DataList.Value>
                            <Flex gap={"1"} overflowX={"auto"}>
                                <FigmaBadge/>
                                <ReactBadge/>
                                <MuiBadge/>
                            </Flex>
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label>Platform</DataList.Label>
                        <DataList.Value>
                            <LaptopBadge/>
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label>Timeline</DataList.Label>
                        <DataList.Value>
                            4 months
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label>Target Users</DataList.Label>
                        <DataList.Value>
                            SRE , DevOps
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label>Documentation</DataList.Label>
                        <DataList.Value>
                            <Flex gap={"1"} overflowX={"auto"}>
                                <ConfluenceBadge/>
                                <FigmaBadge/>
                            </Flex>
                        </DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.Label>My Role</DataList.Label>
                        <DataList.Value>
                            Product Designer
                        </DataList.Value>
                    </DataList.Item>

                </DataList.Root>
            </Card>
        </Container>
    )

}

function Challenge() {
    return (
        <Container size={"4"} width={"100%"}>
            <Card>
                <Flex direction={"column"} gap={"3"}>

                    <Heading color={"jade"} mb={"2"} size={"8"}>
                        Brief
                    </Heading>
                    <Text>
                        As CloudAEye&#39;s first product, the initial direction wasn&#39;t a predefined design challenge
                        but
                        stemmed from core technical capabilities and a clear target user: DevOps and SRE engineers.
                    </Text>
                    <Flex overflowX={"scroll"}>
                        <Flex width={"100%"} direction={"column"}>
                            <img
                                src="/LogManagement/Cover Photos/Logs Insights/Sarari - DarkAPI Confluence .png"
                                style={{
                                    borderRadius: "0.5rem",
                                    objectFit: "contain",

                                }}
                            />
                            <Text align={"center"} size={"1"} color="gray">
                                APIs were documented in{" "}
                                <Link href="https://www.atlassian.com/software/confluence">
                                    Confluence
                                </Link>
                            </Text>
                        </Flex>
                        <Flex width={"100%"} pb={"2"} direction={"column"}>
                            <img
                                src="/LogManagement/Cover Photos/Logs Insights/Sarari - DarkJIRA Issue Summary.png"
                                style={{
                                    borderRadius: "0.5rem",
                                    objectFit: "contain",

                                }}
                            />
                            <Text align={"center"} size={"1"} color="gray">
                                Briefs were documented in{" "}
                                <Link href="https://www.atlassian.com/software/jira">JIRA</Link>{" "}
                                and{" "}
                                <Link href="https://www.atlassian.com/software/confluence">
                                    Confluence
                                </Link>
                            </Text>
                        </Flex>
                    </Flex>
                    <Text>

                        Feature briefs originated from the CEO, outlining the intended API functionality and technical
                        specifications documented in JIRA and Confluence. Discussions centered on understanding these
                        capabilities and how each potential feature could address the critical needs of our technical
                        users. The primary goal was translating these defined{" "}
                        <TextHoverCard
                            trigger="APIs"
                            content={
                                "APIs are the hidden machinery powering your digital product. They provide a structured way for the front-end to communicate with the server and access data and functionality. These APIs serve as a contract between the design and development teams, defining how data can be fetched, updated, and manipulated. They allow designers to create user interfaces that seamlessly interact with the server, ensuring a smooth and responsive user experience"
                            }/>{" "}
                        and AI-driven potential into
                        valuable, usable tools for incident management and log analysis.
                    </Text>
                </Flex>

            </Card>
        </Container>
    )
}

function Research() {
    return (
        <>
            <Container>
                <Card>
                    <Flex direction={"column"} gap={"3"}>
                        <Heading color={"jade"} size={"8"}>
                            Research
                        </Heading>
                        <Flex>
                            <Flex width={"100%"} align={"center"} direction={"column"}>
                                <img
                                    src="/LogManagement/New/Research-1.png"
                                    style={{
                                        border: "1px solid var(--color-jade-200)",
                                        borderRadius: "0.5rem",
                                        objectFit: "contain",
                                        marginBottom: "0.25rem",
                                        width: '60%'
                                    }}
                                />
                                <Text align={"center"} className={{width: "100%"}} size={"1"} color="gray">
                                    Each point of the user journey was annoatated with &#34;Inferrred
                                    Features&#34; which are essentially intervention points
                                </Text>
                            </Flex>

                        </Flex>
                        <Flex direction={"column"}>
                            <Heading color={"jade"} size={"4"}>
                                User Journey Analysis
                            </Heading>
                            <Text>
                                Facing tight deadlines, I meticulously mapped the SRE debugging journey to pinpoint
                                where
                                CloudAEye could uniquely add value, such as through automated exception categorization
                                and
                                log pattern detection.
                            </Text>
                        </Flex>
                        <Flex direction={"column"}>
                            <Heading color={"jade"} size={"4"}>
                                Competitive Analysis
                            </Heading>
                            <Text>
                                I analyzed competitor tools to benchmark usability and clearly identify CloudAEye&#39;s
                                unique AI-driven advantages for differentiation.
                            </Text>
                        </Flex>
                        <Separator color={"jade"} size={"4"}/>
                        <Flex direction={"column"}>
                            <Heading color={"jade"} size={"4"}>
                                Research Output
                            </Heading>
                            <Flex overflowX={"scroll"}>
                                <Flex width={"80%"} direction={"column"}>
                                    <img
                                        src="/LogManagement/Cover Photos/Logs Insights/Sarari - DarkUX Flow.png"
                                        style={{
                                            borderRadius: "0.5rem",
                                            objectFit: "contain",

                                        }}
                                    />
                                    <Text align={"center"} size={"1"} color="gray">
                                        We use flow diagrams and we iterate on the flows based on discussions with the
                                        development team and the CEO
                                    </Text>
                                </Flex>
                                <Flex width={"80%"} pb={"2"} direction={"column"}>
                                    <img
                                        src="/LogManagement/Cover Photos/Logs Insights/Sarari - DarkUX Flow 2.png"
                                        style={{
                                            borderRadius: "0.5rem",
                                            objectFit: "contain",

                                        }}
                                    />
                                    <Text align={"center"} size={"1"} color="gray">
                                        UX Flow for the User Billing Section
                                    </Text>
                                </Flex>
                            </Flex>

                            <Text>
                                The initial starting point of the UX derives from the APIs and in case the API usage is
                                too tedious in practice, a new API is requested that speeds up the UX
                            </Text>
                        </Flex>
                    </Flex>
                </Card>
            </Container>
        </>
    )
}

function DesignIteration() {
    return (
        <Container>
            <Card>
                <Flex direction={"column"} gap={"3"}>
                    <Heading color={"jade"} size={"8"}>
                        Design Iterations
                    </Heading>
                    <Flex gap={"2"} align={""} pb={'2'} overflowX={"scroll"}>
                        <Flex width={"80%"} gap={"1"} direction={"column"}>
                            <img
                                src="/LogManagement/New/Data.png"
                                style={{
                                    borderRadius: "0.5rem",
                                    objectFit: "contain",
                                    border: "1px solid gray"

                                }}
                            />
                            <Text align={"center"} size={"1"} color="gray">
                                Categorizing form input types
                            </Text>
                        </Flex>
                        <Flex width={"80%"} gap={"1"} justify={'end'} pb={"2"} direction={"column"}>
                            <img
                                src="/LogManagement/New/Lambda Log App Setup Form.png"
                                style={{
                                    borderRadius: "0.5rem",
                                    objectFit: "contain",
                                    border: "1px solid gray"

                                }}
                            />
                            <Text align={"center"} size={"1"} color="gray">
                                Wireframe sample
                            </Text>
                        </Flex>
                        <Flex width={"80%"} gap={"1"} justify={'end'} pb={"2"} direction={"column"}>
                            <img
                                src="/LogManagement/New/Product (1).png"
                                style={{
                                    borderRadius: "0.5rem",
                                    objectFit: "contain",
                                    border: "1px solid gray",
                                }}
                            />
                            <Text align={"center"} size={"1"} color="gray">
                                Browse Logs
                            </Text>
                        </Flex>
                        <Flex width={"80%"} gap={"1"} justify={'end'} pb={"2"} direction={"column"}>
                            <img
                                src="/LogManagement/New/Product (2).png"
                                style={{
                                    borderRadius: "0.5rem",
                                    objectFit: "contain",
                                    border: "1px solid gray"

                                }}
                            />
                            <Text align={"center"} size={"1"} color="gray">
                                Detect patterns withing log lines
                            </Text>
                        </Flex>
                        <Flex width={"80%"} gap={"1"} justify={'end'} pb={"2"} direction={"column"}>
                            <img
                                src="/LogManagement/New/Product (3).png"
                                style={{
                                    borderRadius: "0.5rem",
                                    objectFit: "contain",
                                    border: "1px solid gray"

                                }}
                            />
                            <Text align={"center"} size={"1"} color="gray">
                                Get insights on exceptions during an incident
                            </Text>
                        </Flex>

                    </Flex>

                    <Text>
                        The design process began with mapping user flows for key features, which were then refined
                        through iterative discussions with the CEO and developers to ensure speed and efficiency,
                        following a &#39;less is more&#39; principle. These flows were translated into wireframes,
                        iterated 2-3
                        times based on focused feedback sessions about components and layout. In parallel, foundational
                        elements for CloudAEye&#39;s design system were developed organically from this product work,
                        creating reusable components.
                    </Text>

                </Flex>
            </Card>
        </Container>
    )


}

function Outcomes() {
    return (
        <Container>
            <Card>
                <Flex direction={"column"} gap={"3"}>
                    <Heading color={"jade"} size={"8"}>
                        Outcome / Post-mortem
                    </Heading>
                    <Text>
                        Ultimately, the Log Management product was shelved before a full market launch, due to
                        challenges acquiring initial customers and a subsequent company pivot towards developer
                        productivity tools. But in my time as a designer at CloudAEye, this was the most pivotal time in
                        my design career.
                    </Text>
                    <Card>
                        <Flex gap={"3"}>
                            <NumberCircleOne size={"2.5rem"}/>
                            <Text>
                                This experience, my first after design school transitioning from software development,
                                underscored the need to adapt academic knowledge to industry&#39;s pace and constraints,
                                compressing design processes for real-world sprints
                            </Text>
                        </Flex>
                    </Card>
                    <Card>
                        <Flex gap={"3"}>
                            <NumberCircleTwo size={"2.5rem"}/>
                            <Text>
                                Furthermore, building the design system in parallel taught me the value of letting
                                systems
                                grow organically from product needs, effectively managing parallel workstreams based on
                                validated components without context switching penalties.
                            </Text>
                        </Flex>
                    </Card>
                    <Card>
                        <Flex gap={"3"}>
                            <NumberCircleThree size={"2.5rem"}/>
                            <Text>
                                I also realized how design documentation and annotations would constitute 50% of the
                                output artifacts. Working at a startup, due to the fast pace of development, I was in a hurry
                                to get to the next feature and finish the screens instead of doing diligent documentation work.
                            </Text>
                        </Flex>
                    </Card>
                </Flex>
            </Card>
        </Container>
    )
}