import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Akhilesh Kumar",
        email: "akhileshsh026@hotmail.com",
        phone: 7869643612
      },
      {
        id: 2,
        name: "Saurabh Kumar",
        email: "saurabh026@hotmail.com",
        phone: 7869643612
      },
      {
        id: 3,
        name: "Allwin charles",
        email: "charles026@hotmail.com",
        phone: 7869643612
      }
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
