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
  Quote,
  Grid,
} from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { MoonStars, Sun } from "@phosphor-icons/react";
import { SiteMenuDropdown } from "../../components/Dropdown/SiteMenuDropdown";
import Footer from "../../components/Footer/Footer";
import "./FAM.css";
import ImageViewer from "../../components/ImageViewer/ImageViewer";
import {
  FigmaBadge,
  UserExperienceBadge,
  UserResearchBadge,
} from "../../data/ProjectListData";
import TextHoverCard from "../../components/TextHoverCard/TextHoverCard";
import LoremIpsum from "react-lorem-ipsum";
import SimpleSlider from "../../components/ImageSlider/ImageSlider";

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
        gap={"7"}
        direction={"column"}
        align={"center"}
        justify={"center"}
        style={{ minHeight: "100vh" }}
      >
        <Heading align={"center"} size="9">
          FAM
        </Heading>

        <TitleSection />
        <ProblemAndSolution />

        <Research />

        <Insights />

        <Opportunity />

        {/* Introducing FAM */}
        <Container>
          <Flex gap={"2"} direction={"column"} align={"center"}>
            <Heading color="jade" size={"8"}>
              Introducing FAM!
            </Heading>
            <Text color="jade" size={"4"} align={"center"}>
              FAM is a self-improvement app that remixes an events app with
              Cognitive Behavioural Therapy techniques - a way for those that
              are feeling lonely get out of their situation through action, led
              by the app’s gentle instruction and checks!
            </Text>
          </Flex>
        </Container>

        <Touchpoints />

        <ProcessPhotos />

        <Afterword />

        <Credits />
      </Flex>

      <Footer />
    </>
  );
}

function TitleSection() {
  return (
    <Container size={"4"}>
      <Flex direction={"column"} gap={"2"} align={"center"}>
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

function Research() {
  return (
    <Flex align={"center"} direction={"column"} gap={"2"}>
      <Heading size={"8"}>User Research</Heading>
      <Container>
        <Flex direction={"column"} gap={"3"} align={"center"}>
          {/*Intial Brief*/}
          <Card style={{ minWidth: "350px", maxWidth: "75%" }}>
            <Flex direction={"column"}>
              <Heading color="gray" size={"1"}>
                Initial Brief
              </Heading>
              <Quote align={"center"}>
                To develop new methods to combat mental health conditions that
                worsened in a post-COVID world specifically targeting those who
                work long hours in desk jobs
              </Quote>
            </Flex>
          </Card>

          {/*Focus Point*/}
          <Card>
            <Flex align={"center"} direction={"column"}>
              <Heading
                color="gray"
                size={"1"}
                style={{ alignSelf: "flex-start" }}
              >
                Focus Point
              </Heading>
              <Text size={"2"} mb={"3"}>
                The next task we set out to do was to root the brief in context.
                We discussed within the team about how this brief would apply to{" "}
                <TextHoverCard
                  trigger="Costa Rica"
                  content="The overaching CIID Interaction Design program and hence this course were held in San José, Costa Rica"
                />{" "}
                and what kind of demographics were we looking at. We took turns
                playing investigator and interviewing the others about what life
                was like as young{" "}
                <TextHoverCard
                  trigger="ticos"
                  content="Tico is an informal word that Costa Ricans use to refer to themselves"
                />{" "}
                in the city and what kinds of jobs did each of us had experience
                in. We also executed "5 Whys" rounds to get to the root what we
                believed the brief was trying to solve. The whole process led us
                to the following <strong>focus point</strong>
              </Text>

              <Text size={"4"} weight={"bold"} align={"center"} color="jade">
                How to combat loneliness and instill a sense of belonging for
                people who moved from a rural community to a new urban setting
                for desk white collar work
              </Text>
            </Flex>
          </Card>

          {/*Images*/}
          <Card>
            <Flex gap={"3"}>
              <ImageViewer src={"/FAM/Pablo Interview.png"} hotspots={[]} />
              <ImageViewer src={"/FAM/interview pic 2.png"} hotspots={[]} />
            </Flex>

            <Flex
              mt={"3"}
              gap={"2"}
              direction={"column"}
              align={"center"}
              justify={"center"}
            >
              <Flex width={"50%"}>
                <ImageViewer src={"/FAM/interview pic.webp"} hotspots={[]} />
              </Flex>
              <Text size={"1"}>
                Armed with a focus point we interviewed 15 people which included
                experts in psychology, creative workshop organizers, and white
                collar workers who moved in from a rural area to the city.
              </Text>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </Flex>
  );
}

function Insights() {
  return (
    <Flex direction={"column"} align={"center"} width={"100%"}>
      <Heading size={"8"}>Insights</Heading>
      <Container mt={"3"}>
        <Flex direction={"column"} gap={"2"}>
          <Text color="gray" align={"center"}>
            With that we had surprising insights which led us to see that, while
            the user we focused on was niche, the insights about their problems
            were applicable to a larger base.
          </Text>
          <Grid columns={"2"} gap={"3"}>
            <Card>
              <Heading color="gray" size={"1"}>
                Competitive Enviroments
              </Heading>
              <Text size={"3"}>
                The way one expresses themselves in a competitive environment
                (workplace) vs. expression in a non-competitive environment (a
                hobby) is radically different. A non-competitive space is easy
                on the mind and is a fertile ground for new connections
              </Text>
            </Card>
            <Card>
              <Heading color="gray" size={"1"}>
                Invisible Sacrifice
              </Heading>
              <Text size={"3"}>
                Regardless of the fact of their affinity to their small-town
                environments, most people who move from small towns do end up
                moving from a highly communal atmosphere to one that is
                extremely individualistic.
              </Text>
            </Card>
            <Card>
              <Heading color="gray" size={"1"}>
                Nice Communities
              </Heading>
              <Text size={"3"}>
                Niche workshops or communities based around a skillset are great
                non-competitive spaces. The focus is on the individual's
                improvement regardless of skill level
              </Text>
            </Card>
            <Card>
              <Heading color="gray" size={"1"}>
                2 Disciplines
              </Heading>
              <Text size={"3"}>
                Self-expression through disciplined work in one’s own interest
                is vastly more spiritually satisfying compared to the discipline
                imposed by the environment & time schedule of the workplace
              </Text>
            </Card>
            <Card>
              <Heading color="gray" size={"1"}>
                Passionate & Shy
              </Heading>
              <Text size={"3"}>
                Shyness takes a back-seat to passion! Even shy people, when
                talking about their interests, talk with vigor
              </Text>
            </Card>
          </Grid>
          <Text color="gray" align={"center"}>
            We realized that the problem threading all these insights together
            was lonelineess. More specifically, loneliness that was a caused by
            shyness, introversion or a radical shift in social dynamics. We
            wanted to refine the problem space further and iterated on
            opportunity areas. We decided on the one below
          </Text>
        </Flex>
      </Container>
    </Flex>
  );
}

function Opportunity() {
  return (
    <Container>
      <Heading align={"center"} size={"8"}>
        Opportunity
      </Heading>

      <Card mt={"3"}>
        <Flex>
          <Text color="gold" align={"center"} size={"5"}>
            How might we suggest activities for young white collar profesionals
            in a city that are looking to schedule their free time in a non
            competitive spaces weekly and become aware of their social needs and
            strengths/weaknesses
          </Text>
        </Flex>
      </Card>
    </Container>
  );
}

function Touchpoints() {
  return (
    <Flex width={"100%"} align={"center"} direction={"column"} gap={"1"}>
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
          <Card>
            <ImageViewer {...OnboardingFlowImage} />
          </Card>
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
    </Flex>
  );
}

function ProcessPhotos() {
  return (
    <Flex width={"100%"} align={"center"} direction={"column"} gap={"3"}>
      <Heading size={"8"}>Process Photos</Heading>
      <SimpleSlider images={MiscImages} />
    </Flex>
  );
}

function Afterword() {
  return (
    <Container>
      <Heading size={"8"} mb={"3"} align={"center"}>
        Afterword
      </Heading>
      <Flex gap={"3"} align={"start"} justify={"center"} width={"100%"}>
        <Card>
          This was one of my first UI/UX Projects with an extensive amount of
          research done. It was my focus that I take in as much of the process
          as possible and trust the result. It was an insightful journey because
          one is used to knowing what they're going to make ; in this case, we
          had no idea what could be the solution to the problem!
        </Card>
        <Card>
          If I had more time, then I'd reiterate on the user flows, and
          integrate the mindful journalling aspect deeper into the flows. I have
          a sense that there can be a more deeper personal mechanic that can be
          unlocked with the right intervention at the right time
        </Card>
      </Flex>
    </Container>
  );
}

function Credits() {
  return (
    <Container width={"100%"}>
      <Heading mb={"3"} align={"center"} size={"8"}>
        Credits
      </Heading>
      <Grid columns={"3"} gap={"3"}>
        <Card>
          <Flex direction={"column"}>
            <Heading size={"1"} color="gray">
              Research & Synthesis
            </Heading>
            <Link href="https://www.linkedin.com/in/anirudh-ravipati-13541bb5/">
              Aniruddh Ravipati
            </Link>
            <Link href="https://www.linkedin.com/in/pablo-corella/en?trk=people-guest_people_search-card&originalSubdomain=cr">
              Pablo Corella
            </Link>
            <Link href="https://www.linkedin.com/in/joshua-tercero-loria-369087158?originalSubdomain=cr">
              Joshua Tercero
            </Link>
          </Flex>
        </Card>
        <Card>
          <Flex direction={"column"}>
            <Heading size={"1"} color="gray">
              User Flow & UI/UX
            </Heading>
            <Link href="https://www.linkedin.com/in/anirudh-ravipati-13541bb5/">
              Aniruddh Ravipati
            </Link>
          </Flex>
        </Card>
        <Card>
          <Flex direction={"column"}>
            <Heading size={"1"} color="gray">
              Faculty
            </Heading>
            <Link href="https://www.linkedin.com/in/melaniekahl/">Melanie Kahl</Link>
          </Flex>
        </Card>
      </Grid>
    </Container>
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

const MiscImages = [
  {
    original: "/FAM/Color Themes.png",
    originalHeight: "500px",
  },
  {
    original: "/FAM/Elevation System.png",
    originalHeight: "500px",
  },
  {
    original: "/FAM/Wireframe v1.png",
    originalHeight: "500px",
  },
  {
    original: "/FAM/Wireframe v2.png",
    originalHeight: "500px",
  },
  {
    original: "/FAM/Paper Wireframes/IMG_20221022_162304.jpg",
    originalHeight: "500px",
  },
  {
    original: "/FAM/Paper Wireframes/IMG_20221022_162337.jpg",
    originalHeight: "500px",
  },
];
