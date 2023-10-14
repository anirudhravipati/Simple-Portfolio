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
  Button,
  Quote,
  Grid,
  Strong,
} from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { Butterfly, MoonStars, Sun, TextHFive } from "@phosphor-icons/react";
import { SiteMenuDropdown } from "../../components/SiteMenuDropdown/SiteMenuDropdown";

import "./Interlink.css";
import TextHoverCard from "../../components/TextHoverCard/TextHoverCard";
import PortfolioLogo from "../../components/Portfolio Logo/PortfolioLogo";
import {
  AdvancedPrototypingBadge,
  CBadge,
  FigmaBadge,
  OrigamiBadge,
  TouchDesingerBadge,
} from "../../data/PortfolioData";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

export default function Interlink() {
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
        style={{ position: "fixed", right: "1rem", top: "1rem", zIndex: "1" }}
      >
        {mode ? <MoonStars size={"1.5rem"} /> : <Sun size={"1.5rem"} />}
      </IconButton>
      <InterlinkBody />
    </Theme>
  );
}

function InterlinkBody() {
  return (
    <Flex
      p={"5"}
      gap={"5"}
      direction={"column"}
      align={"center"}
      justify={"top"}
      style={{ minHeight: "100vh" }}
    >
      <PortfolioLogo height={"3rem"} />
      <Heading size={"9"}>Interlink </Heading>
      <HeroSection />
      <Brief />
      <Research />
      <Process />
      <Development />
      <FinalProduct />
    </Flex>
  );
}

function HeroSection() {
  return (
    <Container grow={"0"} shrink={"1"}>
      <Card size={"3"}>
        <Flex align={"center"} gap={"3"} direction={"column"}>
          <Flex width={"100%"} direction={"column"} gap={"1"} align={"center"}>
            <video
              autoPlay
              loop
              muted
              playsInline
              src="/Interlink/HeroGIF.webm"
              style={{
                borderRadius: "0.5rem",
                objectFit: "cover",
                width: "100%",
                height: "40rem",
              }}
              aria-description="a looping video of a screen from the essay Interlink"
            />
            <Text size={"1"} color="gray">
              AI & You
            </Text>
          </Flex>
          <Text align={"center"} size={"5"}>
            Interlink is an experiment in design and art that attempts to take
            the <Em>user</Em> through a thesis about the future of a world that
            exits in electric and light based media (the internet)
          </Text>
          <Flex gap={"1"} wrap={"wrap"}>
            <OrigamiBadge />
            <TouchDesingerBadge />
            <FigmaBadge />
            <AdvancedPrototypingBadge />
          </Flex>
        </Flex>
      </Card>
    </Container>
  );
}

function Brief() {
  return (
    <Container grow={"0"} shrink={"1"}>
      <Card>
        <Heading size={"1"} color="gray">
          Brief
        </Heading>
        <Text align={"center"}>
          This project was the product of a 3 week long course in Graphical User
          Interfaces taught by{" "}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/kristinatastic/"
          >
            Kristina Varshavskaya{" "}
          </Link>{" "}
          &{" "}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/christinerode/"
          >
            Christine Røde
          </Link>{" "}
          at{" "}
          <Link target="_blank" href="https://www.ciid.dk/">
            CIID
          </Link>
          . The course took place 6 months into the Interaction Design
          Programme. Leveraging our accumulated knowledge in this program, the
          instructors asked to create a mobile app that explains a concept that
          we learnt in CIID. I chose to get at the heart of why I'd come to CIID
          and therefore, my topic was Interaction Design
        </Text>
      </Card>
    </Container>
  );
}

function Research() {
  return (
    <Container width={"100%"} grow={"0"} shrink={"1"}>
      <Card>
        <Flex direction={"column"} gap={"1"}>
          <Flex direction={"column"}>
            <Heading size={"1"} color="gray">
              Research
            </Heading>
            <Text>
              I started out with{" "}
              <TextHoverCard
                trigger={"Bill Verplank's ID Handbook"}
                content={<BillVerplankInfo />}
              />{" "}
              which is more of a guidebook as compared to theory. I searched
              further and came across a treasure trove of videos in Tellart's
              wonderfully produced{" "}
              <Link
                target="_blank"
                href="https://www.tellart.com/projects/designnonfiction/"
              >
                Design Nonfiction
              </Link>{" "}
              series of videos that explores how proliferated media, society and
              technology intersect. It seemed to me that behind a lot of the
              ideas behind interaction design, was media theory. There seem to
              be many things written about media but very few talk about the
              effects of media as a consequence of the building blocks of the
              media itself i.e. the characteristic of an age follows, almost the
              characteristic of the media technology that age engages in.
            </Text>
          </Flex>
          <Text>
            The desk research , thus, progressed into media theory by{" "}
            <TextHoverCard
              trigger={"Marshall McLuhan"}
              content={<MarshallMcLuhanInfo />}
            />
            ,{" "}
            <Link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Nicholas_Negroponte"
            >
              {" "}
              Nicholas Negroponte
            </Link>{" "}
            and{" "}
            <Link
              target="_blank"
              href="https://en.wikipedia.org/wiki/Christopher_Alexander"
            >
              {" "}
              Christopher Alexander
            </Link>
            . These texts had an outsized influence on Interlink. The texts
            shifted attention away from the interaction to the media.
          </Text>
        </Flex>
      </Card>
    </Container>
  );
}

function Process() {
  return (
    <Container grow={"0"} shrink={"1"}>
      <Card>
        <Flex direction={"column"}>
          <Heading size={"1"} color="gray">
            Process
          </Heading>
          <Text>
            A very obvious design decision that needed to be taken was to conver
            the texts that I'd read into a interactable expereince on an app.
            The task was particularly hard since the texts I read were
            particularly expository. At the outset, I wrote an essay on the
            future of media called <Em>Interlink</Em>. This essay would serve as
            the foundation for the app's <Em>story</Em>. The essay was written
            in 4 parts
          </Text>
        </Flex>
        <Flex
          m={"3"}
          align={"center"}
          justify={"center"}
          gap={"3"}
          wrap={"wrap"}
        >
          <Heading size={"5"}>Touch</Heading>
          <Separator color="jade" size={"2"} orientation="vertical" />
          <Heading size={"5"}>Waver & Wink</Heading>
          <Separator color="jade" size={"2"} orientation="vertical" />
          <Heading size={"5"}>Can't Stop</Heading>
          <Separator color="jade" size={"2"} orientation="vertical" />
          <Heading size={"5"}>Till Singularity</Heading>
        </Flex>
        <Flex direction={"column"}>
          <Flex direction={"column"}>
            <Grid columns={"2"} gap={"1"} width={"100%"}>
              <img
                src="/Interlink/Mood Board.jpg"
                style={{
                  objectFit: "scale-down",
                  width: "100%",
                  height: "25rem",
                  borderRadius: "var(--radius-2)",
                }}
              />
              <img
                src="/Interlink/Storyboard.jpg"
                style={{
                  objectFit: "scale-down",
                  width: "100%",
                  height: "25rem",
                  borderRadius: "var(--radius-2)",
                }}
              />
            </Grid>
            <Text align={"center"} color="gray" size={"1"}>
              Moodboards and Storyboards
            </Text>
          </Flex>
          <Heading color="gray" size={"1"}>
            StoryBoard
          </Heading>
          <Text>
            Each of the parts dealt with issues pertaining to the present moment
            in technology. Something that I had to give up was any form of
            aesthetic and interactive continuity between the parts of the essay
            as represented in the app. Each aspect required a different paradigm
            of interaction to get the message through to the <Em>user</Em>. This
            was the first level of prototyping, when speaking in design. Each
            set of storyboards were nothing but key interaction and story
            moments woven together. I drew up ideas as paper prototypes and then
            selected, by my own judgement, which prototype worked best for each
            set of storyboards.
          </Text>
        </Flex>
      </Card>
    </Container>
  );
}

function FinalProduct() {
  return (
    <Container width={"100%"} grow={"0"} shrink={"1"}>
      <Flex direction={"column"} align={"center"} justify={"center"} gap={"2"}>
        <Heading size={"7"}>Introducing Interlink</Heading>

        <iframe
          width="100%"
          height="500px"
          src="https://www.youtube-nocookie.com/embed/PVJeEAl5rSs?si=hOexGbCEz9Wt_v8g"
          title="Interlink Video Walkthrough"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style={{
            borderRadius: "0.5rem",
            border: "none",
          }}
        />
      </Flex>
    </Container>
  );
}

function Development() {
  return (
    <Container>
      <Card>
        <Heading color="gray" size={"1"}>
          Development
        </Heading>
        <Flex direction={"column"} gap={"1"}>
          <Flex direction={"column"}>
            <img
              src="/Interlink/Origami Editor.png"
              alt="Origami Editor"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "35rem",
                borderRadius: "var(--radius-2)",
              }}
            />
            <Text align={"center"} color="gray" size={"1"}>
              Origami Editor
            </Text>
          </Flex>
          <Text>
            While the initial product design process took place in Figma, we
            were instructed to use{" "}
            <Link target="_blank" href="https://origami.design/">
              {" "}
              Origami Studio
            </Link>{" "}
            for the final product. It offered a much better system to design
            high fidelity prototypes using a node editor to define interaction
            states
          </Text>
        </Flex>
      </Card>
    </Container>
  );
}

function BillVerplankInfo() {
  return (
    <Flex direction={"column"} align={"center"} gap={"3"}>
      <Text>
        <Link
          target="_blank"
          href="https://en.wikipedia.org/wiki/Bill_Verplank"
        >
          Bill Verplank
        </Link>{" "}
        is pioneer in the field of interaction design and among the foremost
        formal practitioners of it. He worked at the{" "}
        <Link target="_blank" href="https://en.wikipedia.org/wiki/Xerox">
          Xerox
        </Link>{" "}
        company where he worked on the early GUIs for Xerox computers. He then
        went on to work at IDtwo and then IDEO with{" "}
        <Link
          href="https://en.wikipedia.org/wiki/Bill_Moggridge"
          target="_blank"
        >
          Bill Moddridge
        </Link>{" "}
        where the early formalization of interaction design was undergone
        through them.
      </Text>

      <Button variant="ghost">
        <ExternalLinkIcon size="1.5rem" />
        <Link
          href="http://www.billverplank.com/IxDSketchBook.pdf"
          target="_blank"
        >
          View ID Handbook
        </Link>
      </Button>
    </Flex>
  );
}

function MarshallMcLuhanInfo() {
  return (
    <Flex direction={"column"} gap={"3"}>
      <Text>
        Famouse for conining the phrase <Em>the medium is the message</Em>, the
        work of{" "}
        <Link
          target="_blank"
          href="https://en.wikipedia.org/wiki/Marshall_McLuhan"
        >
          Marshall McLuhan
        </Link>{" "}
        presented an astonishing forecast of human societies in the digital age,
        including internet, AI, surveillance states and much more. The root of
        his philosophy comes from the observation that societies tend to adopt,
        allegorically, the properties of the media that causes its advancement.
      </Text>
    </Flex>
  );
}
