import React from "react";
import { connect } from "react-redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item} </h2>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cakeReducer
    ? state.cakeReducer.numberOfCakes
    : state.iceCreamReducer.numberOfIceCreams;
  return {
    item: itemState,
  };
};

export default connect(mapStateToProps)(ItemContainer);
