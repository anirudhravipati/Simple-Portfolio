/* eslint-disable react/no-unescaped-entities */
import { MoonStars, Sun } from "@phosphor-icons/react";
import {
  Card,
  Container, Em,
  Flex,
  Heading,
  IconButton,
  Link,
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
          <Flex className="about-box" gap={"3"}>
            <img src="/Profile Photo.jpg" className="profile-photo" />
            <Flex direction={"column"} gap={"1"}>
              <Text weight={"bold"} align={"left"} size={"4"}>
                Hello! Welcome to my portfolio!
              </Text>
              <Text align={"left"}>
                I'm a designer who knows how to code (and the other way round
                depending on the job). My college education was at the
                prestigious{" "}
                <Link href="https://www.iiit.ac.in/" target="_blank">
                  IIIT Hyderabad
                </Link>
                . I obtained a bachelor's and master's degree in Computer
                Science. I joined Samsung R&D Institute, Bengaluru as Software
                Engineer.{" "}
              </Text>

              <Text>
                During this time, I grew uneasy with just being a softwre
                engineer and wanted to do more. I wanted to be well rounded and
                therefore, I decided to try design school. Following that
                decision, I joined{" "}
                <Link href="ciid.dk" target="_blank">
                  CIID
                </Link>
                . CIID was an important step in understanding outside the limits
                of software. I was fortunate to work in several industry
                projects in companies such as Meta, Google and Enel. It was
                quite an enriching journey.
              </Text>
              <Heading mt={"2"} size={"3"}> Recent Work </Heading>
              <Text>
                Once I graduated from CIID, I started freelancing for {" "}
                <Link href="cloudaeye.com" target="_blank">
                  CloudAEye
                </Link>{" "}
                as a Product Designer. In this company,
                I got to supercharge the design process with my experience in
                Software Engineering and Development. I also had the honor of overseeing CIID's website refresh
                and as such,I currently freelance for them as a web designer & developer.
              </Text>

              <Text>
                In parallel, I have kept up my practice of coding, developing small applications and experimenting with front-end
                tech such as <Em>NextJS</Em>, <Em>Astro</Em> and for systems/backend programming -<Em> Rust </Em>.
                Take a look at my <Link href={"https://github.com/anirudhravipati"} > Github</Link> for more on this!
              </Text>
              <Text size={"2"} weight={"light"}>
                I'm currently on the lookout for more exciting opportunities
                where code and design meet! Drop me an
                <Text weight={"bold"}>
                  {" "}
                  <Link href="mailto:ravipatianirudh@gmail.com">email</Link>
                </Text>{" "}
                or shoot me a message on whatsapp at the number :{" "}
                <Text weight={"bold"}>
                  <Link href="https://wa.me/qr/TQAIUGV5W5Z6L1">
                    +33 744 52 48 49
                  </Link>
                </Text>
              </Text>
            </Flex>
          </Flex>
        </Card>
      </Container>
    </Flex>
  );
}
