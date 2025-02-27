import {useState, useEffect} from "react";
import {
    Theme,
    Flex,
    Heading,
    IconButton,
    Link, Container, Card, Text, Separator
} from "@radix-ui/themes";
import {SiteMenuDropdown} from "../../components/SiteMenuDropdown/SiteMenuDropdown";
import {Sun, MoonStars} from "@phosphor-icons/react";
import Footer from "../../components/Footer/Footer";
import "./CIID.css";
import PortfolioLogo from "../../components/Portfolio Logo/PortfolioLogo";
import {
    B2CBadge,
    CMSBadge,
    FigmaBadge,
    StorefrontBadge,
    WebDesignBadge,
    WebflowBadge
} from "../../data/PortfolioData.jsx";

export default function CIID() {
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
            gap={"3"}
            direction={"column"}
            align={"center"}
            style={{minHeight: "80vh"}}
        >
            <PortfolioLogo height={"3rem"}/>
            <Heading size={"8"}>Copenhagen Institute of Interaction Design
                <Heading size={"3"} align={"right"}>
                    <Link href={"https://www.ciid.dk/"}>ciid.dk</Link>
                </Heading>
            </Heading>
            <Container size={"3"}>
                <Card>
                    <Flex direction={"column"} align={"center"} gap={"1"} justify={"center"}>
                        <img className="hero-image" src={"/CIID/page/Screenshots/Home.jpeg"}/>
                        <Heading size={"4"} as={"p"}>A seamless platform for a global design community </Heading>
                        <Text align={"center"} size={"3"}>CIID.dk was designed to be more than just a website—it’s a
                            living,
                            evolving platform that connects designers, educators, and innovators across the world.
                            With a tight one-month timeline, the challenge was to build a modern, Nordic-inspired
                            digital
                            experience that felt both minimal and sophisticated, all while integrating essential
                            functionality
                            like a CMS, a Stripe payment system, and a structured database for community engagement.
                        </Text>
                        <Flex mt={"2"} wrap={"wrap"} direction={"row"} gap={"2"}
                              justify={"center"}><WebDesignBadge/><WebflowBadge/> <StorefrontBadge/>
                            <FigmaBadge/> <CMSBadge/> <B2CBadge/></Flex>
                    </Flex>
                </Card>

            </Container>
            <Container size={"3"}>
                <Card>
                    <Flex direction={"column"} align={"center"} gap={"1"} justify={"center"}>
                        <Flex pb={'1'} direction={"row"} width={"100%"} gap={"1"} overflowX={"auto"}>
                            <img className="screenshots" src={"/CIID/page/Design Takedown.png"}/>
                            <img className="screenshots" src={"/CIID/page/Design Process.png"}/>
                            <img className="screenshots" src={"/CIID/page/Design Process 2.png"}/>
                        </Flex>
                        <Text align={"center"} size={"3"}>We started by defining the fundamentals—typography, buttons,
                            borders, and panel styles—creating a visual language that was clean, flexible, and scalable.
                            With limited direct interaction with users in the early stages, we focused on the
                            essentials: streamlining the application process for CIID’s IDP programme and ensuring
                            seamless data flow between Webflow and Airtable via Webflow’s form API.</Text>
                    </Flex>
                </Card>

            </Container>
            <Flex>


                <Flex pb={"1"} direction={"row"} style={{width: "98vw"}} flexGrow={"0"} justify={"start"} align={"start"}
                      gap={"2"} overflowX={"auto"}>
                    <img className="screenshots" src={"/CIID/page/Screenshots/Home.jpeg"}/>
                    <img className="screenshots" src={"/CIID/page/Screenshots/Mobile.jpeg"}/>
                    <img className="screenshots" src={"/CIID/page/Screenshots/IDP.jpeg"}/>
                    <img className="screenshots" src={"/CIID/page/Screenshots/ImpactMinds.jpeg"}/>
                    <img className="screenshots" src={"/CIID/page/Screenshots/Testimony.jpeg"}/>

                </Flex>
            </Flex>
            <Container size={"2"}>
                <Card>
                    <Flex direction={"column"} align={"center"} gap={"4"} justify={"center"}>
                        <Text  size={"3"}>
                            The process was highly iterative. Launching an MVP allowed us to
                            quickly assess user interactions and refine key areas, particularly improving the payment experience
                            for CIID’s international pop-up schools. Figma was our primary tool for crafting the design,
                            while Webflow enabled rapid deployment and agile improvements based on real-world feedback.
                        </Text>
                        <Separator/>
                        <Text align={"right"} size={"3"}>
                            Beyond functionality, CIID.dk was built as a dynamic ecosystem where education,
                            professional training, and community interaction enhance each other. Every detail of
                            the platform was crafted with the CIID community in mind—ensuring that designers, students,
                            and educators could seamlessly navigate, connect, and contribute to a growing global network.
                        </Text>
                    </Flex>
                </Card>
            </Container>
        </Flex>
    );
}