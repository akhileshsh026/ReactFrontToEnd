import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4 style={headingStyle}>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">Email : {email}</li>
          <li className="list-group-item">Phone : {phone}</li>
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
