import react from "react";

function InputField({labelName, type, inputPlaceholder}) {
  return (
    <div className="input-container">
      <label htmlFor={labelName}>{labelName}</label>
      <input type={type} id="email" placeholder={inputPlaceholder}/>
    </div>
  );
}

export default InputField;
