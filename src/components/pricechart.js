import React from "react";

export default class PriceChart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Flight-Item">
        <div className="Flight-Item-Price">
          <span>$20</span>
          <div className="Flight-Item-Price-Subheader">With Procedure</div>
        </div>
        <div className="Flight-Item-Location">Mexico</div>
        <div className="Flight-Item-Dates">May-June</div>
      </div>
    );
  }
}
