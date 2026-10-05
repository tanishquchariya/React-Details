// Example - 1
// {/* 
// <div id = "parent">   
//     <div id = "child">
//         <h1>hello this nested element h1 tag</h1>
//         <h2> hell this is h2 tag </h2>
//     </div>
// </div> 
// ReactElement(object) => html (Browser understand)
// */}

// Code :-
// const parent = React.createElement("div",{id: "parent"},
//     React.createElement("div",{id: "child"},

//     React.createElement("h1", {}, "this nested element h1 tag"), React.createElement("h2", {}, "hell this is h2 tag")
//         // this is error 
//         // [React.createElement("h1", {}, "this nested element h1 tag"), React.createElement("h2", {}, "hell this is h2 tag")]
//     ));
// console.log(parent);
// const rootforRender = ReactDOM.createRoot(document.getElementById("root"));
// rootforRender.render(parent)

// Example - 2
{/* 
<div id = "parent">   
    <div id = "child">
        <h1>hello this nested element h1 tag</h1>
        <h2> hell this is h2 tag </h2>
    </div>
    <div id = "child2">
        <h1>hello this nested element h1 tag</h1>
        <h2> hell this is h2 tag </h2>
    </div>
</div> 
ReactElement(object) => html (Browser understand)
*/}

// Code :-
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child", key: "child1" },
            [
                React.createElement(
                    "h1",
                    { key: "heading1" },
                    "this nested element h1 tag"
                ),
                React.createElement(
                    "h2",
                    { key: "heading2" },
                    "hell this is h2 tag"
                )
            ]
        ),

        React.createElement(
            "div",
            { id: "child2", key: "child2" },
            [
                React.createElement(
                    "h1",
                    { key: "heading1" },
                    "this nested element h1 tag"
                ),
                React.createElement(
                    "h2",
                    { key: "heading2" },
                    "hell this is h2 tag"
                )
            ]
        )
    ]
);

console.log(parent);

const rootforRender = ReactDOM.createRoot(
    document.getElementById("root")
);

rootforRender.render(parent);
// This code look complecated and ugly so that we use jsx for simple code like html
