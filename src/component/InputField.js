import react from "react";

function Form() {
  return (
    <div className="form">
      <div className="input-container">
        <label htmlFor="email"/>
        <input type="email" id="email" placeholder="Email" />
        <label htmlFor="password"/>
        <input type="password" id="password" placeholder="Password" />
      </div>
    </div>
  );
}

export default Form;
