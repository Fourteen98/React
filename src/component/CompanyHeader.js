import react from "react";
import logo from "../assets/logo.png";

function CompanyHeader() {
  return (
    <div className="company-header">
      <img src={logo} alt="logo"/>
      <h4>WEST-PORT PETROLEUM</h4>
    </div>
  );
}

export default CompanyHeader;