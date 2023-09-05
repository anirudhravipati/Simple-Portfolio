import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import FAM from "./pages/FAM/FAM.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import "./index.css";
import { StrictMode } from "react";
import { Theme } from "@radix-ui/themes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "FAM",
    element: <FAM />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Theme>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Theme>
);
