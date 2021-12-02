import { render } from "preact";
import App from "./src/App"


const Main = () => {
  return (
    <App />
  );
}

render(
  <Main />, document.getElementById("app")
);
