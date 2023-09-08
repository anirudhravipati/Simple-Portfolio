import { useState, useEffect } from "react";
import {
  Theme,
  IconButton,
  Heading,
  Flex,
  Text,
  AspectRatio,
  Container,
  Card,
} from "@radix-ui/themes";
import { SiteMenuDropdown } from "../../components/Dropdown/SiteMenuDropdown";
import { Car, MoonStars, Sun } from "@phosphor-icons/react";
import Footer from "../../components/Footer/Footer";
import LoremIpsum from "react-lorem-ipsum";

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
        variant="soft"
        style={{ position: "absolute", right: "2rem", top: "1rem" }}
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
      p={"3"}
      gap={"5"}
      style={{ minHeight: "100vh" }}
    >
      <Heading align="center" size={"9"}>
        About
      </Heading>

      <img
        src="/public/PXL_20230709_111903848.jpg"
        style={{
          borderRadius: "8px",
          objectFit: "cover",
          width: "25rem",
          height: "35rem",
        }}
      />

      <Container>
        <Text>
          <LoremIpsum />
        </Text>
      </Container>
    </Flex>
  );
}
