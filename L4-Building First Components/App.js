import React from "react";
import ReactDOM from "react-dom/client";

/*
Stucture of our food booking app
 Header 
  -logo
  Navigation - Home, About, Contact
 body
  - search bar
  - food cort
 footer
  - copyright
  - social media links
  - contact us

*/ 

const Header = () =>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src = "https://t4.ftcdn.net/jpg/03/54/40/71/240_F_354407132_rW1lyZxxUKbggCzsO7ha6DOs9EO3W7qE.jpg"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}
const Resturend = () =>{
  return(
    <div>
      
    </div>
  )
}
const body = () =>{
  return (
    <div>
      <div className="seacrh">
        Seacrh
      </div>
      <div className="res-container">
        <Resturend/>
      </div>
    </div>
  )
}

// Functional Components composition
const App = () => {
  return (
    <div>      
      <Header />
    </div>
  );
};

const render_root = ReactDOM.createRoot(document.getElementById("root"));

// after render <h1>Tanishq</h1> in indec.html replace with <h1>This is h1 tag using react</h1>
// render_root.render(heading);

// render_root.render(JsxHeading);

// render Functional Components
render_root.render(<App/>);