import React from "react";
import { connect } from "react-redux";

interface IItemCountFlag {
  count: number;
  id: number;
}

export const ItemCountFlag = (props: IItemCountFlag) => {
  return <div>ItemCount</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCount);
