import {
  Card,
  Container,
  Flex,
  Heading,
  Link,
  Section,
  Text,
  Badge,
  Box,
  ScrollArea,
  Button,
  Theme,
  Separator,
  IconButton,
} from "@radix-ui/themes";

import { Link as RouterLink } from "react-router-dom";
import "./App.css";
import { ProjectListData, Icons } from "./data/ProjectListData";
import { ArrowRight, Sun,MoonStars } from "@phosphor-icons/react";
import { useState } from "react";
import { SiteMenuDropdown } from "./components/Dropdown/SiteMenuDropdown";
import Footer from "./components/Footer/Footer";

function App() {
  const [mode, setMode] = useState(false);

  return (
    <Theme
      appearance={mode ? "light":"dark"}
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
        {mode ? <MoonStars size={"1.5rem"} />:<Sun size={"1.5rem"} />}
        
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
        Currently, I am currently designing products for{" "}
        <Link asChild>
          <a href="https://www.cloudaeye.com/"> CloudAEye </a>
        </Link>
        , a SaaS startup that specialises in AIOps for Serverless Functions.
        With my multidisciplinary training in design, research and development,
        I aim to walk the fine line between aesthetic, utility and need.
      </Text>
    </Container>
  );
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

function TFooter() {
  return (
    <Section height={"1"} right={"0"} left={"0"} mt={"9"}>
      <Flex align={"center"} justify={"center"} direction={"column"} gap={"3"}>
        <Text size={"3"}>Footer</Text>
      </Flex>
    </Section>
  );
}

export default App;
