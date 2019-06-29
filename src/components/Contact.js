import React, { Component } from "react";
import PropTypes from "prop-types";
import MaterialIcon, { colorPalette } from "material-icons-react";

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name} <MaterialIcon icon="arrow_drop_down" />
        </h4>
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
  contact: PropTypes.object.isRequired
};

export default Contact;
