import React from "react";
import RecapCard from "../../Reusable/RecapCard";
import "../../styles/css/RequestConfirmation.css";

const RequestConfirmation = ({ state }) => {
  let userName = localStorage.getItem("user");

  return (
    <div>
      <h2>Confirmation</h2>
      <p className="textConfirmation">{`Hi ${userName}, your request was submitted ✅`}</p>
      <RecapCard details={state} />
    </div>
  );
};

export default RequestConfirmation;
