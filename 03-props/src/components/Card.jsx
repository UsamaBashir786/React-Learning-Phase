import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src="https://plus.unsplash.com/premium_photo-1681666713728-9ed75e148617?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="card-content">
        <div>
          <h1>{props.user}</h1>
        </div>
        <div>
          <p>{props.description}</p>
        </div>
        <div>
          <button>{props.buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
