import React from "react";
import { connect } from "react-redux";

interface ItemCount {
  count: number;
  id: number;
}

export const ItemCount = (props) => {
  return <div>ItemCount</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCount);
