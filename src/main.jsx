import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import FAM from "./pages/FAM/FAM.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "@radix-ui/themes/styles.css";
import "./index.css";
import {StrictMode} from "react";
import {Theme} from "@radix-ui/themes";
import {Analytics} from "@vercel/analytics/react"
import About from "./pages/About/About.jsx";
import LogManagement from "./pages/LogManagement/LogManagement.jsx";
import Error from "./pages/Error/Error.jsx";
import AlienRadio from "./pages/AlienRadio/AlienRadio.jsx";
import SoftwareEngineering from "./pages/Software Engineering/SoftwareEngineering.jsx";
import Interlink from "./pages/Interlink/Interlink.jsx";
import Shunya from "./pages/Shunya/Shunya.jsx";
import UnderConstruction from "./pages/Under Constuction/UnderConstruction.jsx";
import CIID from "./pages/CIID/CIID.jsx";
import CodeReview from "./pages/Code Review/CodeReview.jsx";
import TestRCA from "./pages/TestRCA/TestRCA.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>
    },
    {
        path: "FAM",
        element: <FAM/>,
    },
    {
        path: "About",
        element: <About/>
    },
    {
        path: "LogManagement",
        element: <LogManagement/>
    },
    {
        path: "AlienRadio",
        element: <AlienRadio/>
    },
    {
        path: "SoftwareEngineering",
        element: <SoftwareEngineering/>
    },
    {
        path: "Interlink",
        element: <Interlink/>
    },
    {
        path: "Shunya",
        element: <Shunya/>
    },
    {
        path: "Under Construction",
        element: <UnderConstruction/>
    },
    {
        path: "CIID",
        element: <CIID/>
    },
    {
        path: "CodeReview",
        element: <CodeReview/>
    },
    {
        path: "TestRCA",
        element: <TestRCA/>
    }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Theme>
        <StrictMode>
            <RouterProvider router={router}/>
        </StrictMode>
            <Analytics/>
    </Theme>
);
