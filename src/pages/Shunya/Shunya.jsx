import { useState, useEffect } from "react";
import {
  Theme,
  Flex,
  Heading,
  Text,
  Card,
  Container,
  IconButton,
  Link,
  Button,
  Strong,
  Em,
} from "@radix-ui/themes";
import { SiteMenuDropdown } from "../../components/SiteMenuDropdown/SiteMenuDropdown";
import { Sun, MoonStars, ArrowSquareOut } from "@phosphor-icons/react";
import Footer from "../../components/Footer/Footer";
import TextHoverCard from "../../components/TextHoverCard/TextHoverCard";
import "./Shunya.css";
import PortfolioLogo from "../../components/Portfolio Logo/PortfolioLogo";

export default function Shunya() {
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
        variant="ghost"
        style={{ position: "fixed", right: "1rem", top: "1rem", zIndex: "1" }}
      >
        {mode ? <MoonStars size={"1.5rem"} /> : <Sun size={"1.5rem"} />}
      </IconButton>
      <ShunyaBody />
      <Footer />
    </Theme>
  );
}

function ShunyaBody() {
  return (
    <Flex
      p={"5"}
      gap={"3"}
      direction={"column"}
      align={"center"}
      style={{ minHeight: "100vh" }}
    >
      <PortfolioLogo height={"3rem"} />
      <Heading size={"9"}>Shunya
      <Heading size={"3"} align={"right"}>Machine makes art</Heading>
      </Heading>
      <HeroSection />
    </Flex>
  );
}

function HeroSection() {
  return (
    <Container grow={"0"} shrink={"1"}>
      <Flex direction={"column"} gap={"3"}>

      </Flex>
    </Container>
  );
}
