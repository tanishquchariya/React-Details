const heading = React.createElement("h1", {id: "heading",xyz:"abc"}, "hello this element creted by react")


const rootforRender = ReactDOM.createRoot(document.getElementById("root"));

rootforRender.render(heading)