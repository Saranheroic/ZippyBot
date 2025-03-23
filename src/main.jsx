import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { ClerkProvider } from "@clerk/clerk-react"; // ✅ Use correct import

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key in .env file!");
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter
        future={{
          v7_startTransition: true, // ✅ Keep this
          v7_relativeSplatPath: true,
        }}
      >
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
