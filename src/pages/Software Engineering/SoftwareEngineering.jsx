import {
  Box,
  Card,
  Text,
  Link,
  Theme,
  Flex,
  Container,
  IconButton,
  Heading,
  Separator,
} from "@radix-ui/themes";
import PortfolioLogo from "../../components/Portfolio Logo/PortfolioLogo";
import { useState, useEffect } from "react";
import { SiteMenuDropdown } from "../../components/Dropdown/SiteMenuDropdown";
import {
  Sun,
  MoonStars,
  Asterisk,
  ArrowRight,
  Article,
} from "@phosphor-icons/react";
import TextHoverCard from "../../components/TextHoverCard/TextHoverCard";
import { ListBulletIcon } from "@radix-ui/react-icons";
import {
  CBadge,
  CPlusPlusBadge,
  JenkinsBadge,
  PythonBadge,
  AzureBadge,
  JavaBadge,
  AndroidBadge,
  UnityBadge,
  CSharpBadge,
} from "../../data/PortfolioData";

export default function SoftwareEngineering() {
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
      <SEBody />
    </Theme>
  );
}

function SEBody() {
  return (
    <Flex
      p={"5"}
      gap={"4"}
      direction={"column"}
      align={"center"}
      justify={"start"}
      style={{ minHeight: "100vh" }}
    >
      <PortfolioLogo height={"3rem"} />
      <Heading size={"9"}>
        Software Engineering
        <Heading size={"3"}>
          A CV of the my work in Software Engineering in college,research and
          business 
        </Heading>
      </Heading>
      <HeroSection />
      <SamsungWork />
      <Masters />
      <GeoConnectWork />
      <Bachelor />
    </Flex>
  );
}

function HeroSection() {
  return (
    <Container grow={"0"} shrink={"1"}>
      <Flex direction={"column"} gap={"2"} align={"center"}>
        <Card size={"4"}>
          <Flex direction={"column"}>
            <Text align={"center"}>
              I started studying Computer Science during my undergrad at{" "}
              <Link target="_blank" href="https://www.iiit.ac.in/">
                IIIT Hyderabad
              </Link>{" "}
              and acquired a Bachelor's degree in the same. I continued on for a
              Masters degree in Computer Science from the same institution.
              After graduation, I joined{" "}
              <Link target="_blank" href="https://research.samsung.com/sri-b">
                Samsung R&D Institute
              </Link>{" "}
              in Bengaluru where I joined as a Senior Software Engineer and
              resigned (to join{" "}
              <Link target="_blank" href="https://ciid.dk/">
                CIID
              </Link>
              ) as a Lead Engineer
            </Text>
          </Flex>
        </Card>
      </Flex>
    </Container>
  );
}

function SamsungWork() {
  return (
    <Container grow={"0"} shrink={"1"}>
      <Card>
        <Flex direction={"column"} gap={"1"}>
          <Heading>
            <Link target="_blank" href="https://research.samsung.com/sri-b">
              Samsung R&D Institute
            </Link>
          </Heading>
          <Flex align={"center"} gap={"2"}>
            <Heading size={"2"}>Senior Software Engineer</Heading>
            <ArrowRight size={"1rem"} />
            <Heading size={"2"}>Lead Engineer</Heading>
          </Flex>
          <Heading size={"1"} color="gray">
            August 2017 - June 2021
          </Heading>
          <Text>
            Lead Engineer heading a small team of 3 to develop and maintain
            applications for 5G Networks' Access layer architecture
          </Text>
          <Flex align={"center"} gap={"2"}>
            <Asterisk size={"1rem"} />
            <Text>
              Developed complex VNF Event Stream (VES) applications as tendered
              by international clients such as Verizon, AT&T, and Docomo to name
              a few prominent ones.
            </Text>
          </Flex>
          <Flex align={"center"} gap={"2"}>
            <Asterisk size={"1rem"} />
            <Text>Developed Citizens Broadband Radio Service for Verizon</Text>
          </Flex>
          <Flex align={"center"} gap={"2"}>
            <Asterisk size={"1rem"} />
            <Text>
              Develped one-of-a-kind document parser for a statistics module
              that enables it to read and write data as per the operator's
              (Docomo) choices
            </Text>
          </Flex>
          <Separator mt={"2"} mb={"2"} size={"4"} />
          <Heading mb={"1"} size={"1"} color="gray">
            Tech Stack
          </Heading>
          <Flex wrap={"wrap"} gap={"2"}>
            <CBadge />
            <JenkinsBadge />
            <CPlusPlusBadge />
            <PythonBadge />
          </Flex>
        </Flex>
      </Card>
    </Container>
  );
}

function GeoConnectWork() {
  return (
    <Container width={"100%"} grow={"0"} shrink={"1"}>
      <Card>
        <Flex direction={"column"} gap={"1"}>
          <Heading>
            GeoConnect{" "}
            <Heading size={"1"} color="gray">
              (now defunct)
            </Heading>
          </Heading>
          <Heading size={"2"}>Software Engineering Intern</Heading>

          <Heading size={"1"} color="gray">
            May 2016 - July 2016
          </Heading>
          <Text>
            Internship that covered development of tons of new features for a
            seed startup which included considerations of scalability and
            extensibility
          </Text>
          <Flex align={"center"} gap={"2"}>
            <Asterisk size={"1rem"} />
            <Text>
              An application that enables temporary sharing of location with
              one's family and friends
            </Text>
          </Flex>
          <Flex align={"center"} gap={"2"}>
            <Asterisk size={"1rem"} />
            <Text>
              Developed a large part of the functionality for the application
            </Text>
          </Flex>
          <Flex align={"center"} gap={"2"}>
            <Asterisk size={"1rem"} />
            <Text>
              Developed a logger system that integrated with the cloud service
              for storage of said logs
            </Text>
          </Flex>
          <Flex align={"center"} gap={"2"}>
            <Asterisk size={"1rem"} />
            <Text>
              Pitched in ideas and future direction for the startup which were
              integrated to the application
            </Text>
          </Flex>
        </Flex>
        <Separator mt={"2"} mb={"2"} size={"4"} />
        <Heading mb={"1"} size={"1"} color="gray">
          Tech Stack
        </Heading>
        <Flex wrap={"wrap"} gap={"2"}>
          <AzureBadge />
          <JavaBadge />
          <AndroidBadge />
        </Flex>
      </Card>
    </Container>
  );
}

function Masters() {
  return (
    <Container width={"100%"} grow={"0"} shrink={"1"}>
      <Card>
        <Flex direction={"column"} gap={"1"}>
          <Heading>
            Master's In Science,{" "}
            <Link href="https://www.iiit.ac.in/">IIIT Hyderabad </Link>
          </Heading>
          <Heading size={"2"}>Computer Science</Heading>
          <Heading size={"1"} color="gray">
            August 2016 - August 2017
          </Heading>
          <Text>
            Masters of Science by Research in Cognitive Sciences exploring
            usability challenges for a next-gen military surveillance system
          </Text>
          <Flex align={"center"} gap={"2"}>
            <Asterisk size={"1rem"} />
            <Text>
              A thesis on the usability of interfaces for a 360° camera
              surveillance drone
            </Text>
          </Flex>
          <Flex align={"center"} gap={"2"}>
            <Asterisk size={"1rem"} />
            <Text>
              Worked for Defence Research and Development Organization (DRDO)
              which oversees the R&D for Indian armed forces.
            </Text>
          </Flex>
          <Flex align={"center"} gap={"2"}>
            <Asterisk size={"1rem"} />
            <Text>
              Tested monitor interface configurations for a indigenous 360°
              camera mounted on remote operated vehicles.
            </Text>
          </Flex>
          <Flex align={"center"} gap={"2"}>
            <Asterisk size={"1rem"} />
            <Text>
              The work required that the entire 360° feed be practically
              available to the operator on a monitor such that any movement or
              presence might be detected easily by humans
            </Text>
          </Flex>
          <Flex align={"center"} gap={"2"}>
            <Asterisk size={"1rem"} />
            <Text>
              I developed a virtual analog of the simulator in Unity 3D ( a game
              engine ) and constructed a map on which a player would be able to
              operate the camera's movements
            </Text>
          </Flex>
          <Flex align={"center"} gap={"2"}>
            <Asterisk size={"1rem"} />
            <Text>
              The experimental interfaces for the camera were also developed
              using Unity 3D
            </Text>
          </Flex>
          <Flex align={"center"} gap={"2"}>
            <Asterisk size={"1rem"} />
            <Text>
              Each interface was also plugged in to an eye-tracker, the data of
              which was essential in determining the best method to go about in
              distributing attention across the monitor screen
            </Text>
          </Flex>

          <Flex align={"center"} gap={"2"}>
            <Asterisk size={"1rem"} />
            <Text>
              The experiment was done on 40+ students with a variety of
              dependent and independent factors
            </Text>
          </Flex>
        </Flex>
        <Separator mt={"3"} mb={"3"} size={"4"} />
        <Flex direction={"column"} gap={"1"}>
          <Heading size={"3"}>Publications</Heading>
          <Flex align={"center"} gap={"2"}>
            <Article size={"1rem"} />
            <Text>
              Three Sixty Degree Vision Interfaces : Evaluation of Performance
              and Eye Movements at INTERACT 2017 Student Research Consortium
            </Text>
          </Flex>
        </Flex>
        <Separator mt={"2"} mb={"2"} size={"4"} />
        <Heading mb={"1"} size={"1"} color="gray">
          Tech Stack
        </Heading>
        <Flex wrap={"wrap"} gap={"2"}>
          <UnityBadge />
          <CSharpBadge />
        </Flex>
      </Card>
    </Container>
  );
}

function Bachelor() {
  return (
    <Container width={"100%"} shrink={"1"} grow={"0"}>
      <Card>
        <Flex direction={"column"} gap={"1"}>
          <Heading>
            Bachelor's in Technology,{" "}
            <Link href="https://www.iiit.ac.in/">IIIT Hyderabad </Link>
          </Heading>
          <Heading size={"2"}>Computer Science</Heading>

          <Heading size={"1"} color="gray">
            August 2013 - August 2017
          </Heading>
          <Text>
            Bachelors of Technology in the coveted Computer Science program at
            IIIT Hyderabad. The university follows high standards for its
            curriculum and the culture of excellence is what I have carried with
            me in my life. During my course in the college, I have had the
            opportunity to develop several interesting projects
          </Text>
          <Flex align={"center"} gap={"2"}>
            <Asterisk size={"1rem"} />
            <Text>
              A compiler for the{" "}
              <Link
                target="_blank"
                href="http://www.cs.columbia.edu/~sedwards/classes/2017/4115-spring/proposals/DECAF.pdf"
              >
                Decaf
              </Link>{" "}
              programming language{" "}
            </Text>
          </Flex>
          <Flex align={"center"} gap={"2"}>
            <Asterisk size={"1rem"} />
            <Text>
              Developed a large part of the functionality for the application
            </Text>
          </Flex>
          <Flex align={"center"} gap={"2"}>
            <Asterisk size={"1rem"} />
            <Text>An AI sentiment analysis engine for the Hindi language</Text>
          </Flex>
          <Flex align={"center"} gap={"2"}>
            <Asterisk size={"1rem"} />
            <Text>
              An experimental horror video player that changes the tone of the
              movie based on biofeedback signals of the viewer
            </Text>
          </Flex>
          <Flex align={"center"} gap={"2"}>
            <Asterisk size={"1rem"} />
            <Text>A Reddit-like website - full stack</Text>
          </Flex>
          <Separator mt={"2"} mb={"2"} size={"4"} />
          <Heading mb={"1"} size={"1"} color="gray">
            Tech Stack
          </Heading>
          <Flex wrap={"wrap"} gap={"2"}>
            <PythonBadge />
            <CBadge />
            <CPlusPlusBadge/>
          </Flex>
        </Flex>
      </Card>
    </Container>
  );
}
