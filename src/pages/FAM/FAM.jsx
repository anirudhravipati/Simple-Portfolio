import {
  Theme,
  Flex,
  Heading,
  IconButton,
  Text,
  Container,
  Card,
  Inset,
  AspectRatio,
  HoverCard,
  Box,
  Popover,
  ScrollArea,
} from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { Car, Plus, MoonStars, Sun } from "@phosphor-icons/react";
import { SiteMenuDropdown } from "../../components/Dropdown/SiteMenuDropdown";
import Footer from "../../components/Footer/Footer";
import "./FAM.css";
import LoremIpsum from "react-lorem-ipsum";
import ImageHotspot from "../../components/ImageHotspot/ImageHotspot";

export default function FAM() {
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
      <FAMBody />
    </Theme>
  );
}

function FAMBody() {
  return (
    <>
      <Flex p={"3"} justify={"center"} style={{ minHeight: "100vh" }}>
        <Flex
          height={"100%"}
          direction={"column"}
          // style={{ outline: "1px solid red" }}
        >
          <Heading align={"center"} size="9">
            FAM
          </Heading>
          <Flex direction={"column"} gap={"3"} p={"9"}>
            <Text size={"4"}>
              <LoremIpsum p={"6"} />
            </Text>
          </Flex>
          <Container size={"4"}>
            <Flex position={"relative"}>
              <AspectRatio ratio={4 / 3}>
                <img
                  src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    borderRadius: "0.5rem",
                  }}
                />
              </AspectRatio>
              <ImageHotspot
                top="30%"
                left="20%"
                title={"Hello!"}
                content={<LoremIpsum p={3} />}
              />
              <ImageHotspot
                top="10%"
                left="20%"
                title={"Hello!"}
                content={<LoremIpsum p={3} />}
              />
            </Flex>
          </Container>
        </Flex>
      </Flex>

      <Footer />
    </>
  );
}