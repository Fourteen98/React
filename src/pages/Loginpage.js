import react from "react";
import CompanyHeader from "../component/CompanyHeader.js";
import InputField from "../component/InputField.js";
import Submit from "../component/Submit.js";
function Loginpage() {
  return (<div className="background">
    <div className="main-container">
      <CompanyHeader/>
      <div className="card">
        <InputField labelName="Email" type="email" inputPlaceholder="Enter your email"/>
        <InputField labelName="Password" type="password" inputPlaceholder="Enter your password"/>
        <Submit type="submit" value="Login"/>
      </div>
      <div className="forgot-pass">
        <p>Forgot password?</p>
      </div>
    </div>

  </div>)
}

export default Loginpage;