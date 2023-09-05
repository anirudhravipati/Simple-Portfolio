import { Theme,Flex, Heading, IconButton } from "@radix-ui/themes";
import { useState } from "react";
import { MoonStars, Sun } from "@phosphor-icons/react";
import { SiteMenuDropdown } from "../../components/Dropdown/SiteMenuDropdown";
import Footer from "../../components/Footer/Footer";
import "./FAM.css";

export default function FAM() {
  const [mode, setMode] = useState(false);

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
      <FAMBody/>
    </Theme>
  );
}

function FAMBody() {
  return (
    <>
    <Flex p={"3"} justify={"center"} style={{minHeight: "100vh"}}>
      <Heading align={"center"} size="9">FAM</Heading>
    </Flex>
    <Footer/>
    </>
  )
}
