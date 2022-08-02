import react from "react";

function Submit({type, value}){
  return (
    <div className="submit-button">
      <button type={type}>{value}</button>
    </div>
  );
}

export default Submit;