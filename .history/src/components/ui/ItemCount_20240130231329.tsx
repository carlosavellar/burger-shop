import React from "react";
import { connect } from "react-redux";

interface ItemCountFlag {
  count: number;
  id: number;
}

export const ItemCount = (props: ItemCount) => {
  return <div>ItemCount</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCount);
