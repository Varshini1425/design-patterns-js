// Displays user information --- Only for the UI part
import React from "react";
const UserCard = ({ name, email, onEdit }) => {
    return (
      <div className="user-card" style={{ border: "1px solid #ddd", padding: "20px", margin: "20px" }}>
        <h2>{name || "Loading..."}</h2>
        <p>Email: {email || "Loading..."}</p>
        <button onClick={onEdit}>Edit</button>
      </div>
    );
  };
  
  export default UserCard;
  
  



// Explanation:

// props: This component receives name, email, and onEdit as props.
// UI Only: The component simply displays the name and email, and renders a button to trigger the onEdit function.
// Stateless: It does not manage any state or perform any logic.
