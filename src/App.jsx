import {
  Card,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  Badge,
  Box,
  ScrollArea,
  Button,
  Theme,
  IconButton,
} from "@radix-ui/themes";

import { Link as RouterLink } from "react-router-dom";
import "./App.css";
import { ProjectListData, Icons } from "./data/ProjectListData";
import { ArrowRight, Sun, MoonStars, File } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { SiteMenuDropdown } from "./components/Dropdown/SiteMenuDropdown";
import Footer from "./components/Footer/Footer";

function App() {
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
  // END Dark Mode

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
      <Home />
    </Theme>
  );
}

function Home() {
  return (
    <>
      <Flex p={"3"} gap={"3"} direction={"column"}>
        <Title />
        <Blurb />
      </Flex>

      <ProjectList />
      <Footer />
    </>
  );
}

function Title() {
  return (
    <Heading size={"9"} align={"center"}>
      Aniruddh Ravipati
    </Heading>
  );
}

function Blurb() {
  return (
    <Container>
      <Text as="p" size={"6"} align={"center"}>
        I am a product designer with a background in software development.
        Currently, I am designing for{" "}
        <Link asChild>
          <a href="https://www.cloudaeye.com/"> CloudAEye </a>
        </Link>
        , a SaaS startup that specialises in AIOps for Serverless Functions.
        With my multidisciplinary training in design, research and development,
        I aim to walk the fine line between aesthetic, utility and need.
      </Text>
      <Flex mt={"3"} gap={"6"} justify={"center"}>
        <Button size="3" variant="ghost" asChild>
          <RouterLink to={"About"}>
            <ArrowRight size={"1rem"} />
            View More
          </RouterLink>
        </Button>
        <Button size={"3"} color="yellow" variant="ghost" asChild>
          <RouterLink
            to={"/public/Resume Product Design.pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <File size={"1rem"} />
            Download Résumé
          </RouterLink>
        </Button>
      </Flex>
    </Container>
  );
}

function SpecialMention() {
  return <Container></Container>;
}

function ProjectList() {
  return (
    <Container mt={"6"}>
      <Flex direction={"column"} gap={"3"}>
        {ProjectListData.map((item) => (
          <ProjectCard key={item.key} {...item} />
        ))}
      </Flex>
    </Container>
  );
}

function ProjectCard({ title, src, content, tags, page }) {
  return (
    <Card variant="surface" size="1">
      <Flex>
        <img
          src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
          alt="A house in a forest"
          style={{
            objectFit: "cover",
            borderRadius: "var(--radius-2)",
            width: "40%",
            marginRight: "1rem",
          }}
        />
        <Flex
          justify={"center"}
          gap={"3"}
          direction={"column"}
          p={"1"}
          style={{ width: "fit-content" }}
        >
          <Heading size={"7"}>{title}</Heading>
          <ScrollArea
            size={"1"}
            type="always"
            scrollbars="vertical"
            style={{ height: "fit-content", maxHeight: "150" }}
          >
            <Box pr={"3"}>
              <Text size={"3"}>{content}</Text>
            </Box>
          </ScrollArea>
          <Flex wrap={"wrap"} gap="2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                size="2"
                color={
                  Icons.find((t) => t.name == tag) &&
                  Icons.find((t) => t.name == tag).tagColor
                }
              >
                {Icons.find((t) => t.name == tag) &&
                  Icons.find((t) => t.name == tag).logo}
                {tag}
              </Badge>
            ))}
          </Flex>
          <RouterLink to={page}>
            <Button
              size="3"
              color="jade"
              variant="surface"
              style={{ width: "fit-content" }}
            >
              <ArrowRight size={"1rem"} /> View{" "}
            </Button>
          </RouterLink>
        </Flex>
      </Flex>
    </Card>
  );
}

export default App;
