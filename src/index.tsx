import ReactDOM from "react-dom/client";
import { App } from "./examples/first";
import { App2 } from "./examples/second";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App2 />);
