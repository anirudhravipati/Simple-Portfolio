import { useEffect, useState } from "react";
import {
  Theme,
  IconButton,
  Heading,
  Flex,
  Container,
  Card,
  Text,
  Link,
  Separator,
  Blockquote,
  Strong,
  Callout,
} from "@radix-ui/themes";
import { Car, MoonStars, Star, Sun } from "@phosphor-icons/react";
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
        Log Management{" "}
        <Heading align={"right"} size={"4"}>
          by CloudAEye
        </Heading>
      </Heading>
      <CoverSection />
      <Context />
      <Overview />
      <Brief />
      <Research />
      <UserExperience />
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
    <Container>
      <Card>
        <Flex direction={"column"} justify={"center"} gap={"3"}>
          <Heading align={"left"} size={"1"} color="gray">
            Overview
          </Heading>
          <Text align={"center"} weight={"light"} color="gray" size={"2"}>
            While each feature of Log Management is unique, an overview of the
            process followed to get to the design can broken down into these
            steps
          </Text>
          <Flex justify={"center"} align={"center"} gap={"3"} wrap={"wrap"}>
            <Card size={"1"} variant="classic">
              <Flex align={"center"} justify={"between"} gap={"1"}>
                <Heading size={"7"} color="jade">
                  1
                </Heading>
                <Heading size={"7"} color="gray">
                  Brief
                </Heading>
              </Flex>
            </Card>
            <Card size={"1"} variant="classic">
              <Flex align={"center"} justify={"between"} gap={"1"}>
                <Heading size={"7"} color="jade">
                  2
                </Heading>
                <Heading size={"7"} color="gray">
                  Research
                </Heading>
              </Flex>
            </Card>
            <Card size={"1"} variant="classic">
              <Flex align={"center"} justify={"between"} gap={"1"}>
                <Heading size={"7"} color="jade">
                  3
                </Heading>
                <Heading size={"7"} color="gray">
                  User Experience Design
                </Heading>
              </Flex>
            </Card>
            <Card size={"1"} variant="classic">
              <Flex align={"center"} justify={"between"} gap={"1"}>
                <Heading size={"7"} color="jade">
                  4
                </Heading>
                <Heading size={"7"} color="gray">
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

function Brief() {
  return (
    <Container size={"4"} width={"100%"}>
      <Flex direction={"column"} gap={"3"}>
        <Heading align={"center"} size={"8"}>
          Brief
        </Heading>
        <Card>
          <Flex direction={"column"} gap={"3"}>
            <Flex direction={"column"}>
              <img
                src="/LogManagement/Cover Photos/Logs Insights/Sarari - DarkAPI Confluence .png"
                style={{
                  borderRadius: "0.5rem",
                  objectFit: "contain",
                  width: "100%",
                }}
              />
              <Text align={"center"} size={"1"} color="gray">
                APIs were documented in{" "}
                <Link href="https://www.atlassian.com/software/confluence">
                  Confluence
                </Link>
              </Text>
            </Flex>
            <Text>
              Each feature was documented by the CEO regarding{" "}
              <TextHoverCard trigger="APIs" content={"What is an API?"} /> that
              were to be exposed to the user. An example of an input & output
              for APIs would be given.
            </Text>
            <Separator size={"4"} />
            <Flex direction={"column"}>
              <img
                src="/LogManagement/Cover Photos/Logs Insights/Sarari - DarkJIRA Issue Summary.png"
                style={{
                  borderRadius: "0.5rem",
                  objectFit: "contain",
                  width: "100%",
                }}
              />
              <Text align={"center"} size={"1"} color="gray">
                Briefs were documented in{" "}
                <Link href="https://www.atlassian.com/software/jira">JIRA</Link>{" "}
                and{" "}
                <Link href="https://www.atlassian.com/software/confluence">
                  Confluence
                </Link>
              </Text>
            </Flex>
            <Text>
              During discussions, the overarching idea of how this feature would
              help our user solve their problem was always laid out{" "}
            </Text>
          </Flex>
        </Card>
      </Flex>
    </Container>
  );
}

function Research() {
  return (
    <Container size={"4"} width={"100%"}>
      <Flex direction={"column"} gap={"3"}>
        <Heading align={"center"} size={"8"}>
          Research
        </Heading>
        <Card>
          <Flex direction={"column"} gap={"3"}>
            <Flex direction={"column"}>
              <img
                src="/LogManagement/Cover Photos/Logs Insights/Sarari - DarkResearch.png"
                style={{
                  borderRadius: "0.5rem",
                  objectFit: "contain",
                  width: "100%",
                }}
              />
              <Text align={"center"} size={"1"} color="gray">
                The three dimensions along which research was conducted : user
                experience, technology, & competition
              </Text>
            </Flex>
            <Text>
              At this time of CloudAEye, we’re yet to launch the product and
              reel in customers. To get customers, we need the product out fast,
              so there was no time to conduct a User Experience Research
              cycle.To ground design decisions, I decided to attack the problem
              in an alternative way
            </Text>
            <Flex wrap={"wrap"} gap={"3"}>
              <Card>
                <Heading size={"7"} color="jade">
                  1
                </Heading>
                The design cannot look <Strong>completely</Strong> different
                from the existing competition. Our aim was to lure customers
                away from competition
              </Card>
              <Card>
                <Heading size={"7"} color="jade">
                  2
                </Heading>
                Highlight CloudAEye’s advantages over the competition wherever
                possible.
              </Card>
              <Card>
                <Heading size={"7"} color="jade">
                  3
                </Heading>
                Whenever the existing engineering of the product forced the UX
                to be complicated - engineering was given the task to fit itself
                according to design so that the end user will have a UX wherein
                the flow doesn’t last several steps to get to the desired
                information
              </Card>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Container>
  );
}

function UserExperience() {
  return (
    <Container size={"4"} width={"100%"}>
      <Flex direction={"column"} gap={"3"}>
        <Heading align={"center"} size={"8"}>
          User Experience
        </Heading>
        <Card>
          <Flex direction={"column"} gap={"3"}>
            <Flex direction={"column"}>
              <img
                src="/LogManagement/Cover Photos/Logs Insights/Sarari - DarkUX Flow.png"
                style={{
                  borderRadius: "0.5rem",
                  objectFit: "contain",
                  width: "100%",
                }}
              />
              <Text align={"center"} size={"1"} color="gray">
                We use flow diagrams and we iterate on the flows based
                on discussions with the development team and the CEO
              </Text>
            </Flex>

            <Text>
              With the research phase done, the next step in process is to draft
              a UX flow I do this using flow diagrams and we iterate on the
              flows based on discussions with the development team and the CEO
            </Text>

            <Callout.Root size={"1"}>
              <Callout.Icon>
                <Star size={"1rem"} />
              </Callout.Icon>
              <Callout.Text size={"3"}>
                The major criteria that is considered at this step of the
                process is that the UX is fast. Because this product is all
                about helping the developer during,at worst, critical outages -
                no end point of a flow should take too long to get to - we
                measure the speed in clicks
              </Callout.Text>
            </Callout.Root>

            <Flex direction={"column"}>
              <img
                src="/LogManagement/Cover Photos/Logs Insights/Sarari - DarkUX Flow 2.png"
                style={{
                  borderRadius: "0.5rem",
                  objectFit: "contain",
                  width: "100%",
                }}
              />
              <Text align={"center"} size={"1"} color="gray">
                UX Flow for the User Billing Section
              </Text>
            </Flex>
            <Text>
              The initial starting point of the UX derives from the APIs and in
              case the API usage is too tedious in practice, a new API is
              requested that speeds up the UX
            </Text>
          </Flex>
        </Card>
      </Flex>
    </Container>
  );
}

