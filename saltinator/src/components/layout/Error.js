import React from "react";

const Error = props => {
  console.log(props.errors);
  return (
    <div>
      <p>{`Something went wrong - ${props.message}`}</p>
    </div>
  );
};

export default Error;
