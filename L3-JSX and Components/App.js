import React from "react";
import ReactDOM from "react-dom/client";

// ReactElement => object => render

// const heading = React.createElement("h1", { id: "headingId" }, "This is h1 tag using react element");

// console.log(heading);

const JsxHeading = (
  <h1 id="heading" className="head">
    {" "}
    This is h1 tag using Jsx
  </h1>
);
console.log(JsxHeading);

const render_root = ReactDOM.createRoot(document.getElementById("root"));

// after render <h1>Tanishq</h1> in indec.html replace with <h1>This is h1 tag using react</h1>
// render_root.render(heading);

render_root.render(JsxHeading);
