import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css";
import AppRouter from "@routes/AppRouter";
createRoot(document.getElementById("root")!).render(<AppRouter />);