import { useState,useEffect } from "react";
import { IconButton } from "@radix-ui/themes";
import { MoonStars,Sun } from "@phosphor-icons/react";

export default function DarkModeButton(){
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

      return(
        <IconButton
        onClick={() => setMode(!mode)}
        variant="soft"
        style={{ position: "absolute", right: "2rem", top: "1rem" }}
      >
        {mode ? <MoonStars size={"1.5rem"} /> : <Sun size={"1.5rem"} />}
      </IconButton>
      )
    
}