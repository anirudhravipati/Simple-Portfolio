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
  Quote,
  Blockquote,
  Code,
} from "@radix-ui/themes";
import { SiteMenuDropdown } from "../../components/SiteMenuDropdown/SiteMenuDropdown";
import { Sun, MoonStars } from "@phosphor-icons/react";
import Footer from "../../components/Footer/Footer";
import TextHoverCard from "../../components/TextHoverCard/TextHoverCard";
import PortfolioLogo from "../../components/Portfolio Logo/PortfolioLogo";
import "./Shunya.css";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { ArduinoBadge, ElectronicsBadge, WorkshopBadge } from "../../data/PortfolioData";

export default function Shunya() {
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
      <ShunyaBody />
      <Footer />
    </Theme>
  );
}

function ShunyaBody() {
  return (
    <Flex
      p={"5"}
      gap={"3"}
      direction={"column"}
      align={"center"}
      style={{ minHeight: "100vh" }}
    >
      <PortfolioLogo height={"3rem"} />
      <Heading size={"9"}>
        Shunya
        <Heading size={"3"} align={"right"}>
          Machine makes art
        </Heading>
      </Heading>
      <HeroSection />
      <Research />
      <Insights />
      <Idea />
      <Prototyping />
      <Product />
      <Afterword />
    </Flex>
  );
}

function HeroSection() {
  return (
    <Container grow={"0"} shrink={"1"}>
      <Card>
        <Flex direction={"column"} gap={"3"}>
          <Flex direction={"column"} gap={"1"}>
            <img
              className="shunya-images"
              src="/Shunya/IMG_20220714_184618.jpg"
            />
            <Text color="gray" align={"center"} size={"1"}>
              A <Em>piece of art</Em> to come out of the machine Shunya
            </Text>
          </Flex>
          <Text align="center" size={"5"} color="jade">
            Shunya is a machine that makes art.
          </Text>

          <Text size={"3"}>
            A lot of the popular conception of art in the current era lies along
            the axis of pre modern and modern art. Polarized opinions are common
            with a modern artist being seen as a fraud by some and by others,
            <TextHoverCard
              trigger={" a genius."}
              content={
                <Text>
                  Speaking of the status of the arts in an age to come, Marshall
                  McLuhan, in 1964, writes{" "}
                  <Quote>Art is whatever you can get away with</Quote>
                </Text>
              }
            />{" "}
            There is a marked difference in media and subject in modern arts
            that arose out of introduction of new media to the general populace.
            Modern art had taken a radical shift in purpose, such as it is, from
            an act of tribute to a highly esoteric depiction of neuroses and
            perceptions of man.
          </Text>

          <Text>
            Shunya is a machine which is intended as commentary on the current
            states of art. It fuses aspects of meditation, opacity, transience,
            prayer and industry.
          </Text>
          <Flex justify={"center"} gap={"1"}>
              <WorkshopBadge/>
              <ElectronicsBadge/>
              <ArduinoBadge/>
          </Flex>
        </Flex>
      </Card>
    </Container>
  );
}

function Research() {
  return (
    <Flex direction={"column"} gap={"2"}>
      <Heading align={"center"} size={"8"}>
        Research
      </Heading>
      <Container grow={"0"} shrink={"1"}>
        <Card>
          <Flex direction={"column"} gap={"3"}>
            <Text>
              When starting out, the initial guiding principle was rather far
              from the final product.
            </Text>
            <Blockquote color="jade" weight={"bold"}>
              What is prayer now?
            </Blockquote>
            <Text>
              <TextHoverCard
                trigger={
                  "Admittedly a rather sentimental, vague and a directive laden with assumptions."
                }
                content={
                  <Text>
                    Knowing what I knew about research and directives, I still
                    wanted to take advantage of the rare freedom and time that
                    was offered for the final thesis project at CIID
                  </Text>
                }
              />{" "}
              To deal with a such a vague directive, I had the thought that I
              shouldn't cave in and choose a direction of questioning for the
              research interviews. Apart from that, there was the added problem
              that a lot of the youth now is mostly secular and the concept of
              prayer, much less religion, is a distant concept. My strategy was
              to first find out what replaced prayer and attempted to provide
              the peace that it once did to the generations long ago.
            </Text>
            <Card>
              <Flex direction={"column"} gap={"1"}>
                <img
                  className="shunya-images"
                  src="public/Shunya/mind map.jpg"
                />
                <Text size={"1"} align="center" color="gray">
                  A mind map for an interviewee
                </Text>
              </Flex>
            </Card>

            <Text>
              So when interviewing people from whom I wanted to inquire about
              their opinions on the status of art,religion, prayer and all that
              was related, I first also researched their works and where I could
              dig in with questions related to what I wanted to know. I created
              mind maps (picture above) to help navigate conversations between
              topics of interest that were common between the interviewee and
              me.
            </Text>
          </Flex>
        </Card>
      </Container>
    </Flex>
  );
}

function Insights() {
  return (
    <Container grow={"0"} shrink={"1"}>
      <Card>
        <Flex direction={"column"} gap={"3"}>
          <Heading size={"1"} color="gray">
            Insights
          </Heading>
          <Text>
            In toto, I had conducted 10 interviews which included artists,
            entrepreneurs, students and researchers. After which, I proceeded to
            cluster interview points for themes and insights. I had 3.
          </Text>
          <Flex direction={"column"} gap={"1"}>
            <Card>
              <Flex direction={"column"} gap={"1"}>
                <Blockquote color="jade" weight={"bold"}>
                  Most mainstream meditation education focuses on single modal
                  input - listen and do
                </Blockquote>
                <Text>
                  This insight arises from a trend that was found across
                  interviews. For a lot of people, meditation was followed
                  almost <Em>religiously</Em>. With questions regards to the{" "}
                  <Em>purpose</Em> of their practice, the responses were varied
                  - some do it for clarity, some do it for peace, but what the
                  common thread to achieve any desired outcome was, ironically,
                  a lack of outcome i.e. the desired state was non thought
                </Text>
              </Flex>
            </Card>
            <Card>
              <Blockquote color="jade" weight={"bold"}>
                Not-Thinking as an aim is very counter-intuitive
              </Blockquote>
              <Text>
                When I raised the question of how to achieve non thought, the
                answer always was something to the effect of "you know when it
                happens". Another feature of this state was that one cannot will
                it for themselves. Some alluded to <Em>flow</Em> states.
              </Text>
            </Card>
            <Card>
              <Flex direction={"column"} gap={"1"}>
                <img
                  src="/public/Shunya/tetrad.jpeg"
                  className="shunya-images "
                />
                <Text size={"1"} mb={"3"} color="gray" align={"center"}>
                  McLuhan's Tetrad of Media effects
                </Text>
              </Flex>
              <Blockquote color="jade" weight={"bold"}>
                Technology is a numbing agent as well as an activating agent
              </Blockquote>
              <Text>
                This insight is a direct derivation from my desk research which
                was an exploration into media theory. A common effect when a new
                technology is introduced into society at large is a simaltaneous
                numbing and activation of senses. e.g. the introduction of the
                car has numbed the ear (the sounds from a city's automobiles
                pale a dense jungle in comparison) and enhances the{" "}
                <Em>foot</Em> of the human (grants incredible speed). It is the
                question of the current era to think about what the internet has
                done in this regard.
              </Text>
            </Card>
          </Flex>
        </Flex>
      </Card>
    </Container>
  );
}

function Idea() {
  return (
    <Flex width={"100%"} direction={"column"} gap={"2"}>
      <Heading size={"8"} align={"center"}>
        Ideas
      </Heading>
      <Container grow={"0"} shrink={"1"} width={"100%"}>
        <Card>
          <Flex direction={"column"} gap={"3"}>
            <Flex direction={"column"} gap={"1"}>
              <img
                src="/Shunya/verplank framework.jpg"
                className="shunya-images scale-down"
              />
              <Text color="gray" size={"1"} align={"center"}>
                A verplank framework worksheet for initial ideas
              </Text>
            </Flex>
            <Text>
              To start with ideation, I used the
              <TextHoverCard
                trigger={" Verplank Framerwork "}
                content={<BillVerplankInfo />}
              />
              to generate core ideas. I generated several ideas with differing{" "}
              <TextHoverCard
                trigger={" metaphors "}
                content={
                  <>
                    <Text>
                      Most notably the first three cells of the verplank
                      framework are the central lynchpins of the ensuing design
                      artefact. The <Em>metaphor</Em> is the "feeling" that the
                      artefact will recreate using its own inputs (control),
                      outputs (display), user flow(task),and internal processes
                      (model)
                    </Text>
                  </>
                }
              />
              worked in to the framework. Finally, I chose the metaphor of the
              <TextHoverCard
                trigger={" sand mandala "}
                content={
                  <>
                    A{" "}
                    <Link
                      href="https://www.youtube.com/watch?v=8ov4-Fwhy5o"
                      target="_blank"
                    >
                      sand mandala
                    </Link>{" "}
                    is a Tibetan Buddhist tradition that involves the creation
                    and destruction of mandalas made from colored sand. The word
                    mandala is a Sanskrit word that means "circle".
                    <br />
                    <br />
                    The ritualistic dismantling of the sand mandala is
                    accompanied by ceremonies and viewing to symbolize Buddhist
                    doctrinal belief in the transitory nature of material life.
                  </>
                }
              />{" "}
              because I felt that this metaphor was closest linked to what I was
              trying to achieve. However, I only used the verplank framework to
              ground my ideas and provide for myself a greated idea after which
              to model the final artefact.
              <br />
              <br />
              Therefore, in the picture above, the cells "model", "display" &
              "control" are left blank, because the form of the artefact itself
              required user testing from the get go. I sketched out several
              prototypes and built several lo-fi paper prototypes which were
              used for the initial round of tests.
            </Text>
            <Flex direction={"column"} gap={"1"}>
              <Flex gap={"1"}>
                <img
                  src="/Shunya/product sketches.jpg"
                  className="shunya-images"
                  style={{ width: "50%" }}
                />
                <img
                  src="/Shunya/cardboard prototype.jpg"
                  className="shunya-images"
                  style={{ width: "50%" }}
                />
              </Flex>
              <Text color="gray" size={"1"} align={"center"}>
                product sketches & paper protptypes during ideation
              </Text>
            </Flex>
          </Flex>
        </Card>
      </Container>
    </Flex>
  );
}

function Prototyping() {
  return (
    <Flex width={"100%"} direction={"column"} gap={"2"}>
      <Heading size={"8"} align={"center"}>
        Prototyping
      </Heading>
      <Container grow={"0"} shrink={"1"} width={"100%"}>
        <Card>
          <Flex direction={"column"} gap={"3"}>
            <Flex direction={"column"} gap={"1"}>
              <video
                autoPlay
                loop
                muted
                playsInline
                src="/Shunya/testing.webm"
                style={{
                  borderRadius: "0.5rem",
                  objectFit: "scale-down",
                  width: "100%",
                  height: "auto",
                }}
                aria-description="a looping video of a screen from the essay Interlink"
              />
              <Text size={"1"} color="gray" align={"center"}>
                Lo-Fi Prototyping in process
              </Text>
            </Flex>
            <Text>
              The core experience of the soon-to-be machine was simple : paint
              while listening to music. This activity did not need a fully
              functioning prototype, so I prepared for a first round of testing.
              Going in to the activity, it was clear to myself that I wanted to
              encourage flow.
            </Text>
            <Flex direction={"column"} gap={"1"}>
              <img src="/Shunya/brushes.jpg" className="shunya-images" />
              <Text color="gray" size={"1"} align={"center"}>
                the <Em>brushes</Em> that would be used to <Em>paint</Em>
              </Text>
            </Flex>
            <Text>
              To that end, I had to find a way to remove from people's minds
              from the "task" of painting. I researched tools to help teach
              patining to complete novices and came across{" "}
              <Link href="https://www.heavypaint.com/" target="_blank">
                HEAVYPAINT
              </Link>{" "}
              which was a digital instruction tool to teach painting and
              composition. I borrowed the concept of using large shaped brushes
              for painting. This would effectively prevent people from worrying
              about having to paint details and likeness.
            </Text>
          </Flex>
        </Card>
      </Container>
      <Container grow={"0"} shrink={"1"} width={"100%"}>
        <Card>
          <Flex direction={"column"} gap={"3"}>
            <Heading size={"1"} color="gray">
              Workshop
            </Heading>
            <Flex direction={"column"} gap={"1"}>
              <Flex gap={"1"}>
                <img
                  src="/Shunya/arduino.jpg"
                  className="shunya-images"
                  style={{ width: "50%" }}
                />
                <img
                  src="/Shunya/shell prototypes.jpg"
                  className="shunya-images"
                  style={{ width: "50%" }}
                />
              </Flex>
              <Text color="gray" size={"1"} align={"center"}>
                testing arduino && laser cut shell prototypes
              </Text>
            </Flex>
            <Text>
              Meanwhile, I also set out to prepare the electronics and the
              materials required for the final product. I used{" "}
              <Code>Arduino</Code> to handle the internal logic and motors used
              in the prototype. I also had the great experience of using our
              CIID workshop to its fullest to prepare the shell of the
              prototype.
            </Text>
          </Flex>
        </Card>
      </Container>
    </Flex>
  );
}

function Product() {
  return (
    <Flex width={"100%"} direction={"column"} gap={"2"}>
      <Heading size={"8"} align={"center"}>
        Introducing Shunya
      </Heading>
      <Container grow={"0"} shrink={"1"} width={"100%"}>
        <Card>
          <Flex direction={"column"} gap={"3"}>
            <Text>
              The final product took on additional aspects to round out the
              final product as an art piece. The machine is operated in three
              stages
            </Text>
            <Flex direction={"column"} gap={"1"}>
              <img
                src="public/Shunya/product photo 3.jpg"
                className="shunya-images"
              />
              <Text size={"1"} color="gray" align={"center"}>
                The final product : Shunya
              </Text>
            </Flex>
            <Flex direction={"column"} gap={"2"}>
              <Card>
                <Heading size={"1"} color="gray">
                  Commencement
                </Heading>
                <Text>
                  The <Em>prayer</Em> begins by aligning the compass in the
                  direction of someone who last used their own Shunya.
                </Text>
              </Card>
              <Card>
                <Heading size={"1"} color="gray">
                  Prayer
                </Heading>
                <Text>
                  The next phase is a creative act. The person is prompted to
                  pause, reflect and put onto a canvas what they believe is
                  happening inside. Something to drive this synaesthesia is
                  music - music is played so that the friction between intent
                  and action is taken away
                </Text>
              </Card>
              <Card>
                <Heading size={"1"} color="gray">
                  Destruction
                </Heading>
                <Text>
                  This phase destroys the creative act. White paint is
                  automatically poured over the canvas covering the piece they
                  was just painted. It is encouraged that the same canvas is
                  used to paint over the earlier cycle after a month. Shunya can
                  only be used once a month and a light indicator blinks when it
                  is ready to be used again.
                </Text>
              </Card>
            </Flex>
            <Flex direction={"column"} gap={"1"}>
              <Flex direction={"row"} gap={"1"}>
                <img
                  src="public/Shunya/product photo 2.jpg"
                  className="shunya-images"
                  style={{ width: "50%" }}
                />
                <img
                  src="public/Shunya/product photo 1.jpg"
                  className="shunya-images"
                  style={{ width: "50%" }}
                />
              </Flex>
              <Text size={"1"} align={"center"} color="gray">
                The compass and the brushes in Shunya
              </Text>
            </Flex>
            <iframe
              src="https://www.youtube.com/embed/ZgpAAYSeLGE?si=FkgfLrbnyCraSy-4"
              title="Shunya Product Video"
              frameBorder={"0"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              style={{
                width: "100%",
                borderRadius: "0.5rem",
                height: "40rem",
              }}
            ></iframe>
          </Flex>
        </Card>
      </Container>
    </Flex>
  );
}

function Afterword() {
  return (
    <Flex width={"100%"} direction={"column"} gap={"2"}>
      <Heading size={"8"} align={"center"}>
        Afterword
      </Heading>
      <Container grow={"0"} shrink={"1"} width={"100%"}>
        <Card>
          <Flex direction={"column"} gap={"3"}>
            <Text>
              In retrospect, sadly, Shunya felt incomplete in several areas.
              There are a few core things that went wrong
            </Text>
            <Card>
              <Heading size={"1"} color="gray">
                Design As Art
              </Heading>
              <Text>
                <Link
                  href="https://www.goodreads.com/en/book/show/6095883"
                  target="_blank"
                >
                  Design as Art
                </Link>{" "}
                was a book that was inflential in my decision to come to CIID.
                In it the author{" "}
                <Link
                  href="https://en.wikipedia.org/wiki/Bruno_Munari"
                  target="_blank"
                >
                  Bruno Munari
                </Link>{" "}
                posits that design has now supplanted the role of art in
                society. He argues that art had always served a role,
                theologically or thorugh monarchy, for the populous and design
                fills in the void as art became modern and self-referential. In
                my own experience trying to make one of his so called "uselss
                objects", I found a fundmaental clash between the populism of
                design and the auteur. I could not resolve the conflict and that
                led to choices in design that were "on the fence"
              </Text>
            </Card>
            <Card>
              <Heading size={"1"} color="gray">
                Time
              </Heading>
              <Text>
                The second reason is more domestic and usual. Time management.
                Coming off of the routined and inspected schedules in CIID, I
                found that I would let the time go unmonitered on any arbitrary
                task - be it research, or in the workshop.
              </Text>
            </Card>
          </Flex>
        </Card>
      </Container>
    </Flex>
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

