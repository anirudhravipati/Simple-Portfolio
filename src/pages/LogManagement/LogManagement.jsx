import { useEffect, useState } from "react";
import {
  Theme,
  IconButton,
  Heading,
  Flex,
  Container,
  Card,
  Text,
} from "@radix-ui/themes";
import { Car, MoonStars, Sun } from "@phosphor-icons/react";
import { SiteMenuDropdown } from "../../components/Dropdown/SiteMenuDropdown";
import TextHoverCard from "../../components/TextHoverCard/TextHoverCard";
import Footer from "../../components/Footer/Footer";
import {
  UserResearchBadge,
  UserExperienceBadge,
  FigmaBadge,
  LaptopBadge,
  ProductDesignBadge,
} from "../../data/ProjectListData";

export default function LogManagement() {
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
      <LogManagementBody />
      <Context />
      <Overview />
      <Footer />
    </Theme>
  );
}

function LogManagementBody() {
  return (
    <Flex
      p={"3"}
      gap={"7"}
      direction={"column"}
      align={"center"}
      style={{ minHeight: "100vh" }}
    >
      <Heading align={"center"} size={"9"}>
        Log Management <Heading size={"4"}>by CloudAEye</Heading>
      </Heading>
      <CoverSection />
    </Flex>
  );
}

function CoverSection() {
  return (
    <Container size={"4"}>
      <Card size={"4"}>
        <Flex direction="column" p={"1"}>
          <img
            src="/LogManagement/Cover Photos/Logs Insights/Sarari - DarkInsights.png"
            style={{
              borderRadius: "0.5rem",
              objectFit: "contain",
              width: "100%",
              height: "40rem",
            }}
          />
          <Text weight={"light"} align={"center"} size={"3"}>
            CloudAEye is a SaaS company that specialises in{" "}
            <TextHoverCard trigger={"AI Ops"} content={"What is AI Ops"} /> for
            cloud applications. Their first product was Log Management which is
            a SaaS service that takes in all logs of a user’s cloud
            applications, uses AI to analyze the logs and identify any
            anomalies, provide alerts when such anomalies occur, and provide
            possible solutions to the occurring anomalies. Additionally, the
            product also provided many more tools like a{" "}
            <TextHoverCard
              trigger={"GROK Parser"}
              content={"What is GROK Parser"}
            />{" "}
            , a basic user management dashboard to manage access to the team
            within CloudAEye features, and intelligent{" "}
            <TextHoverCard
              trigger={"Billing Dashboards"}
              content={"What is Billing Dashboards"}
            />{" "}
          </Text>
          <Flex mt={"2"} wrap={"wrap"} justify={"center"} gap={"2"}>
            <ProductDesignBadge />
            <UserExperienceBadge />
            <FigmaBadge />
            <LaptopBadge />
          </Flex>
        </Flex>
      </Card>
    </Container>
  );
}

function Context() {
  return (
    <Container>
      <Card>
        <Flex direction={"column"} gap={"1"}>
          <Heading size={"1"} color="gray">
            Context
          </Heading>
          <Text>
            While a lot of the code was in development, I was brought in as a
            founding designer. The CEO wanted to leverage my unique position as
            developer turned designer. The underlying technology of this product
            was complicated as the intended user - a DevOps or a Site
            Reliability Engineer’s domain of knowledge would be as sophisticated
            as the team building CloudAEye. Although there are other end users -
            such as the CEO of a company (who might not be technically
            proficient) or software engineers working in other domains (such as
            AI), or to the user’s own stakeholders (for presenting SLOs)
          </Text>
        </Flex>
      </Card>
    </Container>
  );
}

function Overview() {
  return (
    <Container mt={"5"}>
      <Card>
        <Flex direction={"column"} justify={"center"} align={"center"} gap={"1"}>
        <Text weight={"light"} color="gray" size={"2"}>
          While each feature of Log Management is unique, an overview of the
          process followed to get to the design can broken down into these steps
        </Text>
        <Flex align={"stretch"} gap={"3"} wrap={"wrap"}>
          <Card size={"5"} variant="classic">
            <Flex align={"center"} justify={"between"} gap={"1"}>
              <Heading size={"9"} color="jade">
                1
              </Heading>
              <Heading size={"9"} color="gray">
                Brief
              </Heading>
            </Flex>
          </Card>
          <Card size={"5"} variant="classic">
            <Flex align={"center"} justify={"between"} gap={"1"}>
              <Heading size={"9"} color="jade">
                2
              </Heading>
              <Heading size={"9"} color="gray">
                Research
              </Heading>
            </Flex>
          </Card>
          <Card size={"5"} variant="classic">
            <Flex align={"center"} justify={"between"} gap={"1"}>
              <Heading size={"9"} color="jade">
                3
              </Heading>
              <Heading size={"9"} color="gray">
                User Experience Design
              </Heading>
            </Flex>
          </Card>
          <Card size={"5"} variant="classic">
            <Flex align={"center"} justify={"between"} gap={"1"}>
              <Heading size={"9"} color="jade">
                4
              </Heading>
              <Heading size={"9"} color="gray">
                Prototype & Deliverable
              </Heading>
            </Flex>
          </Card>
          
        </Flex>
        </Flex>
        
      </Card>
    </Container>
  );
}
