import React, { Component } from "react";
import PropTypes from "prop-types";
import MaterialIcon from "material-icons-react";

class Contact extends Component {
  OnShowClick = (name, e) => {
    console.log(name, e.target);
  };

  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <MaterialIcon
            onClick={this.OnShowClick.bind(this, name)}
            icon="arrow_drop_down"
          />
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Email : {email}</li>
          <li className="list-group-item">Phone : {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
