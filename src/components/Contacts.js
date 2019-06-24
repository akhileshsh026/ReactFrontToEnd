import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  constructor() {
    super();
    this.state = {
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
  }

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
