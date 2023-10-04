import {
  Theme,
  Flex,
  Heading,
  IconButton,
  Text,
  Container,
  Separator,
  Card,
  Inset,
  Em,
  Link,
  Quote,
  Grid,
} from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { MoonStars, Sun } from "@phosphor-icons/react";
import { SiteMenuDropdown } from "../../components/SiteMenuDropdown/SiteMenuDropdown";

import "./Interlink.css";
import TextHoverCard from "../../components/TextHoverCard/TextHoverCard";
import PortfolioLogo from "../../components/Portfolio Logo/PortfolioLogo";

export default function Interlink() {
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
      <SiteMenuDropdown />
      <IconButton
        onClick={() => setMode(!mode)}
        variant="soft"
        style={{ position: "absolute", right: "2rem", top: "1rem" }}
      >
        {mode ? <MoonStars size={"1.5rem"} /> : <Sun size={"1.5rem"} />}
      </IconButton>
      <InterlinkBody />
    </Theme>
  );
}

function InterlinkBody() {
  return (
    <Flex
      p={"5"}
      gap={"5"}
      direction={"column"}
      align={"center"}
      justify={"top"}
      style={{ minHeight: "100vh" }}
    >
      <PortfolioLogo height={"3rem"} />
      <Heading size={"9"}>Interlink </Heading>
      <HeroSection />
    </Flex>
  );
}

function HeroSection() {
  return (
    <Container grow={"0"} shrink={"1"}>
        <Card>

        </Card>
    </Container>
  );
}
