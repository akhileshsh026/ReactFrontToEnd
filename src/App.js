import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header branding="Contact Mangers" />
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
  );
}

export default App;
