import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header branding="Contact Managers" />
      <div className="container">
        <Contact
          name="Akhilesh Kumar"
          email="akhileshsh026@hotmail.com"
          phone="+917869643113"
        />
        <Contact
          name="Saurabh Kumar"
          email="akhileshsh026@hotmail.com"
          phone="+917869643113"
        />
        <Contact
          name=" Allwin Charles"
          email="akhileshsh026@hotmail.com"
          phone="+917869643113"
        />
      </div>
    </div>
  );
}

export default App;
