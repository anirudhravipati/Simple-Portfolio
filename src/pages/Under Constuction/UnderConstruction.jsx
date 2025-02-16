/* eslint-disable react/no-unescaped-entities */
import {Barricade, Lock, MoonStars, Sun} from "@phosphor-icons/react";
import {
    Box, Card, Container, Flex, Heading, IconButton, Link, Text, Theme,
} from "@radix-ui/themes";
import {useEffect, useState} from "react";
import Footer from "../../components/Footer/Footer";
import PortfolioLogo from "../../components/Portfolio Logo/PortfolioLogo";
import {SiteMenuDropdown} from "../../components/SiteMenuDropdown/SiteMenuDropdown";
import "./UnderConstruction.css";
import {Hammer} from "@phosphor-icons/react/dist/ssr";

export default function UnderConstruction() {
    // Dark Mode Setup
    const [mode, setMode] = useState(() => {
        if (JSON.parse(String(localStorage.getItem("darkMode") !== undefined))) {
            console.log("Read mode: " + JSON.parse(localStorage.getItem("darkMode")));
            return !!JSON.parse(localStorage.getItem("darkMode"));
        } else {
            console.log("dark mode read is undefined!");
            localStorage.setItem("darkMode", JSON.stringify(false));
            return false;
        }
    });

    useEffect(() => {
        if (JSON.parse(String(localStorage.getItem("darkMode") !== undefined))) {
            console.log("First Retriveved mode: " + JSON.parse(localStorage.getItem("darkMode")));
            setMode(!!JSON.parse(localStorage.getItem("darkMode")));
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

    return (<Theme
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
        <UnderConstructionContent/>
        <Footer/>
    </Theme>);
}

function UnderConstructionContent() {
    return (
        <Flex
            align={"center"}
            direction={"column"}
            p={"5"}
            gap={"5"}
            style={{minHeight: "100vh"}}>
            <PortfolioLogo height={"3rem"}/>
            <Flex direction={"column"} gap={"5"} align={"center"} justify={"center"} style={{height: "70vh"}}
                  height={"100%"}>
                <Lock style={{color: "var(--jade-a11)"}} size={"10rem"}/>
                <Text color={"jade"} align="center" size={"5"}>
                    This project is under a confidentiality agreement.
                    Please contact me on my <Link weight={"medium"} color={"jade"}
                                                  href="mailto: ravipatianirudh@gmail.com">email</Link>
                </Text>
            </Flex>
        </Flex>);
}
