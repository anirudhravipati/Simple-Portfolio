import { useState, useEffect } from "react";
import {
  Theme,
  Flex,
  Heading,
  Text,
  Card,
  Container,
  IconButton,
  Link,
  Button,
  Strong,
  Em,
} from "@radix-ui/themes";
import { SiteMenuDropdown } from "../../components/Dropdown/SiteMenuDropdown";
import { Sun, MoonStars, ArrowSquareOut } from "@phosphor-icons/react";
import Footer from "../../components/Footer/Footer";
import TextHoverCard from "../../components/TextHoverCard/TextHoverCard";
import "./AlienRadio.css";
import PortfolioLogo from "../../components/Portfolio Logo/PortfolioLogo";

export default function AlienRadio() {
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
      <AlienRadioBody />
      <Footer />
    </Theme>
  );
}

function AlienRadioBody() {
  return (
    <Flex
      p={"5"}
      gap={"3"}
      direction={"column"}
      align={"center"}
      style={{ minHeight: "100vh" }}
    >
      <PortfolioLogo height={"3rem"} />
      <Heading size={"9"}>Alien Radio</Heading>
      <HeroSection />
      <Brief />
      <IdeationPrototyping />
      <PrototypeDemo />
    </Flex>
  );
}

function HeroSection() {
  return (
    <Container width={"100%"}>
      <Flex direction={"column"} gap={"2"} align={"center"}>
        <Card>
          <Flex align={"center"} gap={"3"} direction={"column"}>
            <Flex direction={"column"} gap={"1"} align={"center"}>
              <video
                autoPlay
                loop
                muted
                playsInline
                src="/Alien Radio/action.webm"
                style={{
                  borderRadius: "0.5rem",
                  objectFit: "cover",
                  width: "100%",
                  height: "40rem",
                }}
                aria-description="a looping video where a user is putting a toy battery into its corresponding slot"
              />
              <Text align={"center"} size={"1"} color="gray">
                Amplifying signal...
              </Text>
            </Flex>
            <Text align={"center"}>
              Alien Radio is a prototype our team made for the Physical
              Computing class taught by the esteemed{" "}
              <Link target="_blank" href="https://massimobanzi.com/">
                Massimo Banzi
              </Link>
              , co-founder of the Arduino Project. A major inspiration for this
              project was the{" "}
              <TextHoverCard
                trigger={"Lectron System."}
                content={<LectronInfo />}
              />
              With Alien Radio, we wanted to ensconce the idea of modular
              playable blocks that teach electronic circuits into a narrative
              that is fun for kids!
            </Text>
          </Flex>
        </Card>
      </Flex>
    </Container>
  );
}

function LectronInfo() {
  return (
    <Flex direction={"column"} align={"center"} gap={"3"}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Egger-Lectron.jpg"
        style={{ width: "100%", objectFit: "cover" }}
      />
      <Text>
        The Lectron system was invented by Georg Greger. It is an interactive
        tool to help teach kids basics of electronic circuits. It was first
        manufactured by{" "}
        <Link href="https://en.wikipedia.org/wiki/Egger-bahn">Egger-Bahn</Link>{" "}
        and eventually was manufactured by{" "}
        <Link href="https://en.wikipedia.org/wiki/Braun_(company)">Braun</Link>{" "}
        following a series of acquisitions and closures. At Braun, the excellent{" "}
        <Link href="https://en.wikipedia.org/wiki/Dieter_Rams">
          Dieter Rams
        </Link>{" "}
        redesigned the Lectron Sytem at which point it gained widespread
        recognition.
      </Text>
      <Button asChild variant="ghost">
        <Link
          target="_blank"
          href="https://en.wikipedia.org/wiki/Raytheon_Lectron"
        >
          {" "}
          <ArrowSquareOut size={"1rem"} /> View more
        </Link>
      </Button>
    </Flex>
  );
}

function Brief() {
  return (
    <Container>
      <Card>
        <Flex direction={"column"}>
          <Heading size={"1"} color="gray">
            Brief
          </Heading>
          <Text>
            Make an interactive piece that helps kids understand a{" "}
            <Strong>building block</Strong> of digital computing. Ideally, the
            piece would not be out of place in an electronics museum.
          </Text>
          <Heading size={"1"} color="gray">
            Timeline : 2 weeks
          </Heading>
        </Flex>
      </Card>
    </Container>
  );
}

function IdeationPrototyping() {
  return (
    <Container>
      <Card>
        <Flex direction={"column"} gap={"2"}>
          <Heading size={"1"} color="gray">
            Ideation & Prototyping
          </Heading>
          <Text>
            We were in a peculiar situation as we started out with ideation. We
            were learing about electronics as we were trying to make something
            that teaches electronics to kids. As we went through the rounds of
            ideation, we had the idea to look back into history and pull
            something from it.
          </Text>
          <Text>
            We chose the transistor as our building block and as such, the
            application of transistors in radio to amplify incoming signals was
            a good starting point to ground our narrative.
          </Text>
          <Flex direction={"column"}>
            <Flex gap={"1"} className="prototype-images">
              <img
                src="/Alien Radio/07_Prototype2.jpeg"
                className="prototype-image"
              />
              <img
                src="/Alien Radio/08_Prototype1.jpeg"
                className="prototype-image"
              />
            </Flex>
            <Text align={"center"} size={"1"} color="gray">
              From the prototyping process - paper and cardbord prototypes which
              eventually led to a 3D printed prototype
            </Text>
          </Flex>
          <Text>
            In the final prototype, we used an Arduino Nano to handle the logic,
            audio and simulation of a transistor, and we used 3D printed resin
            to make the <Em> book</Em>.
          </Text>
        </Flex>
      </Card>
    </Container>
  );
}

function PrototypeDemo() {
  return (
    <Container>
      <Heading mb={"2"} size={"8"} align={"center"}>
        Introducing Alien Radio!
      </Heading>
      <Card>
        <Flex align="center" direction={"column"}>
          <video src="/public/Alien Radio/alien radio.webm" controls autoPlay={false} style={{width: "100%",borderRadius: "0.5rem"}} />
        </Flex>
      </Card>
    </Container>
  );
}