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
    Separator,
    HoverCard,
    Tabs
} from "@radix-ui/themes";

import {Route, Link as RouterLink} from "react-router-dom";
import "./App.css";
import {CreativeTechData, ProductDesignData, WebDesignData} from "./data/PortfolioData";
import {
    ArrowRight,
    Sun,
    MoonStars,
    File,
    Star,
    GoogleLogo,
    FacebookLogo, Globe,
} from "@phosphor-icons/react";
import {useEffect, useState} from "react";
import {SiteMenuDropdown} from "./components/SiteMenuDropdown/SiteMenuDropdown";
import Footer from "./components/Footer/Footer";
import {
    SiFacebook,
    SiGoogle,
    SiSamsung,
} from "@icons-pack/react-simple-icons";
import PortfolioLogo from "./components/Portfolio Logo/PortfolioLogo";
import ToastMessage from "./components/Toast/Toast";
import "./App.css";
import {Component1Icon} from "@radix-ui/react-icons";
import {CubeFocus} from "@phosphor-icons/react/dist/ssr";

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
            <SiteMenuDropdown/>
            <IconButton
                onClick={() => setMode(!mode)}
                variant="ghost"
                style={{position: "fixed", right: "1rem", top: "1rem", zIndex: "1"}}
            >
                {mode ? <MoonStars size={"1.5rem"}/> : <Sun size={"1.5rem"}/>}
            </IconButton>
            <Home/>
        </Theme>
    );
}

function Home() {
    return (
        <Flex direction={"column"} style={{minHeight: "100vh"}}>
            <Flex p={"5"} gap={"3"} align={"center"} direction={"column"}>
                <PortfolioLogo height="3rem"/>
                <Title/>
                <ToastMessage
                    trigger={"ravipatianirudh@gmail.com"}
                    triggerFunction={() =>
                        navigator.clipboard.writeText("ravipatianirudh@gmail.com")
                    }
                    content={"email copied to your clipboard!"}
                />
                <Blurb/>
            </Flex>
            <ProjectTabs/>
            <Footer/>
        </Flex>
    );
}

function Title() {
    return (
        <Flex>
            <Heading size={"9"} align={"center"}>
                Aniruddh Ravipati
            </Heading>
        </Flex>
    );
}

function Blurb() {
    return (
        <Container>
            <Text as="p" size={"4"} align={"center"}>
                With experience in software engineering, design and research, I am
                currently on a path to bring about a seamless integration of these
                disciplines with the aim of providing an enriching experience to my
                users
            </Text>
            <Flex mt={"3"} gap={"6"} align={"center"} justify={"center"}>
                <Button size="3" variant="surface" asChild>
                    <RouterLink to={"About"}>
                        <ArrowRight size={"1rem"}/>
                        View More
                    </RouterLink>
                </Button>
                <Button size={"3"} color="blue" variant="surface" asChild>
                    <RouterLink
                        to={"/Resume.pdf"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <File size={"1rem"}/>
                        Résumé
                    </RouterLink>
                </Button>
            </Flex>
            <SpecialMention/>
        </Container>
    );
}

function SpecialMention() {
    return (
        <Card mt={"5"} size={"1"}>
            <Flex direction={"column"} gap={"3"}>
                <Text align={"center"} color="gray" size={"1"}>
                    companies I've previously worked for
                </Text>
                <Flex wrap={"wrap"} align={"center"} gap={"3"} justify={"center"}>
                    <Link
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.google.com/"
                    >
                        <SiGoogle
                            size={"2rem"}
                            weight="fill"
                            style={{marginLeft: "0.5rem", marginRight: "0.5rem"}}
                        />
                    </Link>
                    <Separator size={"2"} orientation="vertical"/>
                    <Link target="_blank" rel="noreferrer" href="https://www.fb.com/">
                        <SiFacebook
                            size={"2rem"}
                            weight="fill"
                            style={{marginLeft: "0.5rem", marginRight: "0.5rem"}}
                        />
                    </Link>
                    <Separator size={"2"} orientation="vertical"/>
                    <Link
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.enel.com//"
                        ml={"3"}
                        mr={"3"}
                    >
                        <img
                            src="/Enel_Logo_Primary_RGB.png"
                            style={{color: "inherit", height: "1.5rem"}}
                        />
                    </Link>
                    <Separator size={"2"} orientation="vertical"/>
                    <Link
                        target="_blank"
                        rel="noreferrer"
                        href="https://translated.com/welcome"
                        ml={"3"}
                        mr={"3"}
                    >
                        <img
                            src="/translated.svg"
                            style={{background: "white", padding: "1.5px 2px", borderRadius: "1.5rem", height: "1.5rem"}}
                        />
                    </Link>
                    <Separator size={"2"} orientation="vertical"/>
                    <Link
                        target="_blank"
                        rel="noreferrer"
                        href="https://research.samsung.com/sri-b"
                    >
                        <SiSamsung
                            size={"3rem"}
                            weight="fill"
                            style={{marginLeft: "0.5rem", marginRight: "0.5rem"}}
                        />
                    </Link>
                </Flex>
                <Separator size={"4"}/>
                <Flex wrap={"wrap"} align={"center"} justify={"center"} gap={"2"}>
                    <Text align={"center"} size={"2"} color="gray">
                        contact me on
                    </Text>
                    <HoverCard.Root>
                        <HoverCard.Trigger>
                            <Link href="https://wa.me/qr/HZ6B54KNMH4JA1">whatsapp</Link>
                        </HoverCard.Trigger>
                        <HoverCard.Content size={"1"}>
                            <Flex align={"center"} gap={"1"} direction={"column"}>
                                <img
                                    src="/whatsapp.png"
                                    style={{width: "12rem", height: "12rem"}}
                                />
                                <Link href="tel:+33744524849">
                                    <Text size={"2"}>+33 744 52 48 49</Text>
                                </Link>
                            </Flex>
                        </HoverCard.Content>
                    </HoverCard.Root>
                    <Text size={"2"} color="gray">
                        or
                    </Text>
                    <Link href="mailto: ravipatianirudh@gmail.com">email</Link>
                    <Text align={"center"} size={"2"} color="gray">
                        to discuss freelance projects in web design, development or
                        creative tech
                    </Text>
                </Flex>
            </Flex>
        </Card>

    );
}

function ProjectTabs() {
    return (
        <Container mt={"6"}>
            <Tabs.Root mb={"4"} defaultValue="Product Design">
                <Tabs.List>
                    <Flex justify={"center"} gap={"2"} width={"100%"}>
                        <Tabs.Trigger value="Product Design"><Component1Icon size="1rem" /> <Text ml={"2"}>Product Design</Text></Tabs.Trigger>
                        <Tabs.Trigger value="Web Design"><Globe size="1rem" /> <Text ml={"2"}>Web Design</Text></Tabs.Trigger>
                        {/*<Tabs.Trigger value="Creative Tech"><CubeFocus size="1rem" /> <Text ml={"2"}>Creative Tech</Text></Tabs.Trigger>*/}
                    </Flex>
                </Tabs.List>

                <Box pt="3">

                    <Tabs.Content value="Product Design">
                        <Flex direction={"column"} gap={"3"}>
                            {ProductDesignData.map((item) => (
                                <ProjectCard  {...item} />
                            ))}
                        </Flex>
                    </Tabs.Content>
                    <Tabs.Content value="Web Design">
                        <Flex direction={"column"} gap={"3"}>
                            {WebDesignData.map((item) => (
                                <ProjectCard  {...item} />
                            ))}
                        </Flex>
                    </Tabs.Content>

                    <Tabs.Content value="Creative Tech">
                        <Flex direction={"column"} gap={"3"}>
                            {CreativeTechData.map((item) => (
                                <ProjectCard  {...item} />
                            ))}
                        </Flex>
                    </Tabs.Content>
                </Box>
            </Tabs.Root>


        </Container>
    );
}

function ProjectCard({title, src, content, tags, page}) {
    return (
        <Card variant="surface" size="1">
            <Flex className="card-flex-box">
                <img
                    src={src}
                    className="project-card-image"
                    // style={{
                    // //   objectFit: "scale-down",
                    //   borderRadius: "var(--radius-2)",
                    // //   width: "40%",
                    // //   height: "20rem",
                    // //   marginRight: "1rem",
                    // }}
                />
                <Flex
                    justify={"center"}
                    gap={"3"}
                    direction={"column"}
                    p={"1"}
                    style={{width: "fit-content"}}
                >
                    <Heading size={"7"}>{title}</Heading>
                    <ScrollArea
                        size={"1"}
                        type="always"
                        scrollbars="vertical"
                        style={{height: "fit-content", maxHeight: "150"}}
                    >
                        <Box pr={"3"}>
                            <Text size={"3"}>{content}</Text>
                        </Box>
                    </ScrollArea>
                    <Flex wrap={"wrap"} gap="2">
                        {...tags}
                    </Flex>

                    <Button
                        size="3"
                        color="jade"
                        variant="surface"
                        style={{width: "fit-content"}}
                    >
                        <RouterLink
                            to={page}
                            style={{textDecoration: "none", color: "inherit"}}
                        >
                            <ArrowRight size={"1rem"}/> View{" "}
                        </RouterLink>
                    </Button>
                </Flex>
            </Flex>
        </Card>
    );
}

export default App;
