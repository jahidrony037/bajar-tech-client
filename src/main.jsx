import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import AuthProvider from "./Providers/AuthProvider";
import { router } from "./routes/router";

createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </>
);
