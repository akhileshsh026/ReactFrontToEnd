import React, { Component } from "react";
import PropTypes from "prop-types";
import MaterialIcon from "material-icons-react";

class Contact extends Component {
  state = {
    showContactInfo: true
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4 style={{ cursor: "pointer" }}>
          {name}
          <MaterialIcon
            onClick={() => {
              this.setState({
                showContactInfo: !this.state.showContactInfo
              });
            }}
            icon="arrow_drop_down"
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email : {email}</li>
            <li className="list-group-item">Phone : {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
