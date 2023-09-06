import { Theme,Flex, Heading, IconButton } from "@radix-ui/themes";
import { useState,useEffect } from "react";
import { MoonStars, Sun } from "@phosphor-icons/react";
import { SiteMenuDropdown } from "../../components/Dropdown/SiteMenuDropdown";
import Footer from "../../components/Footer/Footer";
import "./FAM.css";

export default function FAM() {
    // Dark Mode Setup
    const [mode, setMode] = useState(() =>{
      if(JSON.parse(localStorage.getItem("darkMode") !== undefined))
      {
        console.log("Read mode: " + JSON.parse(localStorage.getItem("darkMode")))      
        return JSON.parse(localStorage.getItem("darkMode"))?true:false
  
      }
      else {
        console.log("dark mode read is undefined!")
        localStorage.setItem("darkMode",JSON.stringify(false))
        return false
      }
    });
  
    useEffect( ()=> {
      if(JSON.parse(localStorage.getItem("darkMode") !== undefined))
      {
        console.log("First Retriveved mode: " + JSON.parse(localStorage.getItem("darkMode")))
        setMode(
          JSON.parse(localStorage.getItem("darkMode"))?true:false
        )
      }
      else {
        console.log("dark mode is undefined!")
        localStorage.setItem("darkMode",JSON.stringify(mode))
      }
    },[])
  
    useEffect(()=>{
      console.log("setting mode! : "+mode)
      localStorage.setItem("darkMode",JSON.stringify(mode))
    },[mode])
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
