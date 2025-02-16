import {useState, useEffect} from "react";
import {
    Theme,
    Flex,
    Heading,
    IconButton,
    Link, Container, Card, Text
} from "@radix-ui/themes";
import {SiteMenuDropdown} from "../../components/SiteMenuDropdown/SiteMenuDropdown";
import {Sun, MoonStars, Image} from "@phosphor-icons/react";
import Footer from "../../components/Footer/Footer";
import TextHoverCard from "../../components/TextHoverCard/TextHoverCard";
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
                        <img className="hero-image" src={"/CIID/page/Hero.png"}/>
                        <Heading size={"4"} as={"p"} >A seamless platform for a global design community </Heading>
                        <Text align={"center"} size={"3"}>CIID.dk was designed to be more than just a website—it’s a living,
                            evolving platform that connects designers, educators, and innovators across the world.
                            With a tight one-month timeline, the challenge was to build a modern, Nordic-inspired digital
                            experience that felt both minimal and sophisticated, all while integrating essential functionality
                            like a CMS, a Stripe payment system, and a structured database for community engagement.
                        </Text>
                        <Flex mt={"2"} wrap={"wrap"} direction={"row"} gap={"2"} justify={"center"}><WebDesignBadge/><WebflowBadge /> <StorefrontBadge />
                            <FigmaBadge /> <CMSBadge /> <B2CBadge/></Flex>
                    </Flex>
                </Card>

            </Container>
            <Container size={"4"}>
                <Card>
                    <Flex direction={"column"} align={"center"} gap={"1"} justify={"center"}>
                        <Flex direction={"row"} gap = {"1"}  wrap={"nowrap"}></Flex>
                        <img className="hero-image" src={"/CIID/page/Hero.png"}/>
                        <Heading size={"4"} as={"p"} >A seamless platform for a global design community </Heading>
                        <Text align={"center"} size={"3"}>CIID.dk was designed to be more than just a website—it’s a living,
                            evolving platform that connects designers, educators, and innovators across the world.
                            With a tight one-month timeline, the challenge was to build a modern, Nordic-inspired digital
                            experience that felt both minimal and sophisticated, all while integrating essential functionality
                            like a CMS, a Stripe payment system, and a structured database for community engagement.
                        </Text>
                        <Flex mt={"2"} wrap={"wrap"} direction={"row"} gap={"2"} justify={"center"}><WebDesignBadge/><WebflowBadge /> <StorefrontBadge />
                            <FigmaBadge /> <CMSBadge /> <B2CBadge/></Flex>
                    </Flex>
                </Card>

            </Container>

        </Flex>
    );
}