/* eslint-disable react/no-unescaped-entities */
import { MoonStars, Sun } from "@phosphor-icons/react";
import {
    Card,
    Container,
    Flex,
    Heading,
    IconButton,
    Text,
    Theme,
} from "@radix-ui/themes";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import PortfolioLogo from "../../components/Portfolio Logo/PortfolioLogo";
import { SiteMenuDropdown } from "../../components/SiteMenuDropdown/SiteMenuDropdown";
import "./About.css";

export default function About() {
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
      <AboutContent />
      <Footer />
    </Theme>
  );
}

function AboutContent() {
  return (
    <Flex
      align={"center"}
      direction={"column"}
      p={"5"}
      gap={"5"}
      style={{ minHeight: "100vh" }}
    >
      <PortfolioLogo height={"3rem"} />
      <Heading align="center" size={"9"}>
        About
      </Heading>
      <Container>
        <Card>
          <Flex className="about-box" grow={"1"} shrink={"0"} gap={"3"}>
            <img src="/Profile Photo.jpg" className="profile-photo" />
            <Flex direction={"column"} gap={"1"}>
              <Text align={"left"} size={"4"}>
                Hello! Welcome to my portfolio!
              </Text>
              <Text align={"left"} size={"4"}>
                With experience in software engineering, design and research, I
                am currently on a path to bring about a seamless integration of
                these disciplines with the aim of providing an enriching
                experience to my users
              </Text>
            </Flex>
          </Flex>
        </Card>
      </Container>
    </Flex>
  );
}
