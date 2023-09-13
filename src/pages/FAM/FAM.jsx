import {
  Theme,
  Flex,
  Heading,
  IconButton,
  Text,
  Container,
  Separator,
  Card,
  Inset,
  Em,
  Link,
  Badge,
} from "@radix-ui/themes";
import { useState, useEffect } from "react";
import {  MoonStars, Sun } from "@phosphor-icons/react";
import { SiteMenuDropdown } from "../../components/Dropdown/SiteMenuDropdown";
import Footer from "../../components/Footer/Footer";
import "./FAM.css";
import ImageViewer from "../../components/ImageViewer/ImageViewer";
import { FigmaBadge, Icons, UserExperienceBadge, UserResearchBadge } from "../../data/ProjectListData";

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
      <Flex
        p={"3"}
        gap={"5"}
        direction={"column"}
        align={"center"}
        justify={"center"}
        style={{ minHeight: "100vh" }}
      >
        <Heading align={"center"} size="9">
          FAM
        </Heading>

        {/* Title Section*/}
        <TitleSection />
        <ProblemAndSolution />
        <Touchpoints />
      </Flex>

      <Footer />
    </>
  );
}

function TitleSection() {
  return (
    <Container size={"4"}>
      <Flex direction={"column"} gap={"3"} align={"center"}>
        <Card size={"3"}>
          <Flex
            direction="column"
            p={"4"}
            style={{ width: "60vw", minWidth: "350px" }}
          >
            <Inset side="top">
              <img
                src="FAM/cover.png"
                style={{
                  borderRadius: "0.5rem",
                  objectFit: "contain",
                  width: "100%",
                  height: "40rem",
                }}
              />
            </Inset>
            <Text weight={"light"} align={"center"} size={"3"}>
              FAM is a self-help app that focuses on combating loneliness for
              people who are either new to a place or just shy. It combines an
              events app with a journal to help those that struggle with social
              anxiety
            </Text>
          </Flex>
        </Card>
        <Card style={{ minWidth: "350px", width: "30vw" }}>
          <Flex direction={"column"} gap={"1"}>
            <Heading color="gray" size={"1"}>
              Context
            </Heading>
            <Text>
              FAM is an app that was prototyped as a result of a 4 week design
              sprint of Life-Centered Research course at CIID
            </Text>
            <Flex mt={"2"} wrap={"wrap"} justify={"center"} gap={"2"}>
              <UserResearchBadge />
              <UserExperienceBadge />
              <FigmaBadge />
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Container>
  );
}

function ProblemAndSolution() {
  return (
    <Container size={"4"}>
      <Flex justify={"center"} wrap={"wrap"} gap={"3"}>
        <Card style={{ minWidth: "350px", width: "45%" }}>
          <Flex direction={"column"} gap={"1"}>
            <Heading size={"1"} color="gray">
              Problem
            </Heading>
            <Text>
              In an increasingly urbanized environment, the paradox that is
              present is that while one lives in a setting where they are
              surrounded by people but also tend to become lonely - especially
              if they’re shy or if they come from a more communal space such as
              a village or a town
            </Text>
          </Flex>
        </Card>
        <Card style={{ minWidth: "350px", width: "45%", height: "100%" }}>
          <Flex direction={"column"} gap={"1"}>
            <Heading size={"1"} color="gray">
              Solution
            </Heading>
            <Text>
              The philosophy of FAM is change through action coupled with
              meaningful reflection. It takes the unlikely combination of an
              events app and journalling app into a tool for those looking to
              step out into the world by gently guiding and checking in with the
              user
            </Text>
          </Flex>
        </Card>
      </Flex>
    </Container>
  );
}

function Touchpoints() {
  return (
    <>
      {/* Key Touchpoints */}
      <Heading align={"center"} size={8}>
        Key Touchpoints
      </Heading>

      {/*Onboarding*/}
      <Flex direction={"column"} gap={"3"} align={"center"} width={"100%"}>
        <Heading size={"6"}>Onboarding</Heading>
        <iframe
          style={{
            minWidth: "350px",
            width: "50%",
            height: "60vh",
            borderRadius: "0.5rem",
            border: "1px solid lightgray",
          }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTrbwNoIUSOEYipdCqkNlWH%2FFAM-Redo%3Fkind%3D%26node-id%3D262-3009%26page-id%3D175%253A3280%26scaling%3Dscale-down%26starting-point-node-id%3D262%253A2719%26viewport%3D63%252C677%252C0.12%26mode%3Ddesign%26t%3D4mtnmOf3A09vupFA-1"
          allowFullScreen
        />
        <Container>
          <ImageViewer {...OnboardingFlowImage} />
        </Container>
      </Flex>

      {/*Events*/}
      <Flex direction={"column"} gap={"3"} align={"center"} width={"100%"}>
        <Separator size={"3"} />
        <Heading size={"6"}>Events</Heading>
        <iframe
          style={{
            minWidth: "350px",
            width: "50%",
            height: "60vh",
            borderRadius: "0.5rem",
            border: "1px solid lightgray",
          }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTrbwNoIUSOEYipdCqkNlWH%2FFAM-Redo%3Ftype%3Ddesign%26node-id%3D178-2593%26t%3D8ltw3rd2SxeTJ4m1-1%26scaling%3Dscale-down%26page-id%3D175%253A3280%26starting-point-node-id%3D178%253A2593%26mode%3Ddesign"
          allowFullScreen
        />
        <Container>
          <Card>
            <ImageViewer {...EventFlowImage} />
          </Card>
        </Container>
      </Flex>

      {/*Check-in*/}
      <Flex direction={"column"} gap={"3"} align={"center"} width={"100%"}>
        <Separator size={"3"} />
        <Heading size={"6"}>Check Ins</Heading>
        <iframe
          style={{
            minWidth: "350px",
            width: "50%",
            height: "60vh",
            borderRadius: "0.5rem",
            border: "1px solid lightgray",
          }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTrbwNoIUSOEYipdCqkNlWH%2FFAM-Redo%3Ftype%3Ddesign%26node-id%3D270-3471%26t%3De55z82lOexVrYd8m-1%26scaling%3Dscale-down%26page-id%3D175%253A3280%26starting-point-node-id%3D290%253A3342%26mode%3Ddesign"
          allowFullScreen
        />
        <Container>
          <Card>
            <ImageViewer {...PreEventCheckInImage} />
          </Card>
        </Container>
        <iframe
          style={{
            minWidth: "350px",
            width: "50%",
            height: "60vh",
            borderRadius: "0.5rem",
            border: "1px solid lightgray",
          }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTrbwNoIUSOEYipdCqkNlWH%2FFAM-Redo%3Ftype%3Ddesign%26node-id%3D279-4155%26t%3DEANwrCQndplmnJRu-1%26scaling%3Dscale-down%26page-id%3D175%253A3280%26starting-point-node-id%3D290%253A3292%26mode%3Ddesign"
          allowFullScreen
        />
        <Container>
          <Card>
            <ImageViewer {...PostEventCheckInImage} />
          </Card>
        </Container>
      </Flex>
    </>
  );
}

const OnboardingFlowImage = {
  src: "FAM/Onboarding Flow v2.png",
  hotspots: [
    {
      top: "50%",
      left: "55%",
      title: "FAM's philosophy at a glance",
      content:
        "We give the user an intimation of what their journey on FAM would be like\
        It is important for the user to have the right expectation of the journey ahead\
        and to keep in mind what the makers of this app intend from the user",
    },
    {
      top: "30%",
      left: "95%",
      title: "Pick your interests",
      content:
        "The first step that the user has to take is to trace out their curiosities and latent passions.\
      FAM will then suggest some activities that are closest to the interest tags that the user chose",
    },
  ],
};

const EventFlowImage = {
  src: "/FAM/Event Selection Flow.png",
  hotspots: [
    {
      top: "20%",
      left: "15%",
      title: '"I\'m just looking!"',
      content:
        "Based on the user's location and interests, we show events. These events\
        are tagged with certain flags - whether the user has already visited this event\
        , what is trending, or if the event is regularly scheduled. Tags like these are intended\
        to provide context to the user in a subtle manner",
    },
    {
      top: "30%",
      left: "80%",
      title: "Skin in the game",
      content: (
        <Text>
          Events are generally paid events so that users have{" "}
          <Link href="https://en.wikipedia.org/wiki/Skin_in_the_game_(phrase)">
            <Em>skin in the game</Em>
          </Link>
        </Text>
      ),
    },
    {
      top: "70%",
      left: "50%",
      title: "Why I do this",
      content: (
        <Text>
          Once the payment is done, the user's motivation is recorded. We find
          that while the motivation is high when one is enrolling for a class,
          the same motivation or reasons for motivation tend not to arise in the
          user later on (frequently, lack of motivation is used as an excuse to
          not attend the event). A record of the user's motivation in their own
          voice or text is a mnemonic device for inspiration!
        </Text>
      ),
    },
  ],
};

const PreEventCheckInImage = {
  src: "/FAM/Pre Event Check-In.png",
  hotspots: [
    {
      top: "38%",
      left: "15%",
      title: "Are you ready!??",
      content: (
        <Text>
          Before the event, FAM sends a notification that triggers the check-in
          process
        </Text>
      ),
    },
    {
      top: "48%",
      left: "35%",
      title: "Check.. check..",
      content: (
        <Text>
          The check-in process is essentially a <Em>grounding</Em> process. The
          temperature check takes in how the user is doing. This app is tailored
          for those who are stepping out of their comfort zone, therfore, FAM
          takes care that, at each step of the process, the user feels attended
          to
        </Text>
      ),
    },
    {
      top: "48%",
      left: "65%",
      title: "Are you ready!??",
      content: (
        <Text>
          In case the user is feeling antsy about this event, this is where the
          effort of recording the user's motivation pays off. The record of
          motivation which was taken earlier is played to the user.{" "}
          <Em>The user helps themselves through the anxiety</Em>
        </Text>
      ),
    },
  ],
};

const PostEventCheckInImage = {
  src: "/FAM/Post-Event Check-In.png",
  hotspots: [
    {
      top: "38%",
      left: "15%",
      title: "Sober recollection",
      content: (
        <Text>
          Once the event is done, FAM sends another check in notification to get
          a gauge of how the user is doing currently
        </Text>
      ),
    },
    {
      top: "48%",
      left: "35%",
      title: "Run it back",
      content: (
        <Text>
          The user goes through a similar process as the pre-event check-in
          albeit with a slight difference. On the post-event check-in, there are
          two possible paths. If the user reports that the event went according
          to their aims, they record the positive moment that had just occurred.
          In case of negative feedback, the task of the user is to self-evaluate
          and assess what went wrong, whether the cause be external or internal
        </Text>
      ),
    },
  ],
};
