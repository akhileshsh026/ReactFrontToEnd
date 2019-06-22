import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4 style={headingStyle}>{name}</h4>
        <ul>
          <li style={contentStyle}>Email : {email}</li>
          <li style={contentStyle}>Phone : {phone}</li>
        </ul>
      </div>
    );
  }
}

const contentStyle = {
  color: "black",
  fontSize: "20px"
};

const headingStyle = {
  color: "gray",
  fontSize: "40px"
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
