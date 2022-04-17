import { createRoot } from "react-dom/client";
import App from "./components/App";

let container = document.getElementById("root");
var root = createRoot(container);

root.render(<App />);
