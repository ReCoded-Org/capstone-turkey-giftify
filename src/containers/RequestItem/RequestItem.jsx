import React from "react";

function RequestItem(props) {
  return (
    <div>
      <h3>Request Item UNDER CONSTRUCTION</h3>
      <h4>
        The id of the requested item is
        {props.location.state.id}
      </h4>
    </div>
  );
}

export default RequestItem;
