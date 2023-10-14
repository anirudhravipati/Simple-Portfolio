/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import {
  Theme,
  IconButton,
  Heading,
  Flex,
  Text,
  Container,
} from "@radix-ui/themes";
import { SiteMenuDropdown } from "../../components/SiteMenuDropdown/SiteMenuDropdown";
import { MoonStars, Sun } from "@phosphor-icons/react";
import Footer from "../../components/Footer/Footer";
import PortfolioLogo from "../../components/Portfolio Logo/PortfolioLogo";

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
        style={{ position: "fixed", right: "1rem", top: "1rem",zIndex: "1" }}
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

      <img
        src="/PXL_20230709_111903848.jpg"
        style={{
          borderRadius: "8px",
          objectFit: "cover",
          width: "25rem",
          height: "35rem",
        }}
      />

      <Container>
        <Text align={"center"}>
          Hi! Thank you for visiting my website! This is where I like to
          showcase some select digital projects. I'm an
          engineer-turned-designer. I made the switch by training at CIID where
          I've had the oppurtunity to be immersed in projects with companies
          such as Google, Meta, & Fundacíon CRUSA. Along the way, I've been
          inspired by the sheer variety of skills that my peers brought to the
          table. It allowed me to understand and speak the different langauges
          of different disciplines. As a designer, what I've learned to aim at
          is to seek a balance of utility, aesthetic, and ethics. As a result,
          I've learned that the best method to truly understand how I could make
          a difference is to immerse myself in the contexts of the user and the
          product. I like to leverage technology and the media it creates.
          Progression of technology offers new ways to present, or talk to the
          user and I have been lucky enough to walk the worlds of engineering
          and design to leverage the strengths of both
        </Text>
      </Container>
    </Flex>
  );
}
