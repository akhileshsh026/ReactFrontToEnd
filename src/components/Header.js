import React from "react";
import PropsTypes from "prop-types";

function Header(props) {
  const { branding } = props;
  return (
    <div>
      <h1 style={headingStyle}>{branding}</h1>
    </div>
  );
}

Header.defaultProps = {
  branding: "My app"
};

Header.PropsTypes = {
  branding: PropsTypes.string.isRequired
};

const headingStyle = {
  color: "green",
  fontSize: "50px"
};
export default Header;
