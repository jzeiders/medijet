import React from "react";
import RaisedButton from "material-ui/RaisedButton";
export default class Flight extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { price, location } = this.props;
    return (
      <div className="Flight-Item">
        <div className="Flight-Item-Price">
          <span>${price}</span>
          <div className="Flight-Item-Price-Subheader">With Procedure</div>
        </div>
        <div className="Flight-Item-Location">{location}</div>
        <div className="Flight-Item-Dates">Nov-Dec</div>
        <div className="Flight-Item-Buy">
          <RaisedButton
            label="BUY"
            backgroundColor="#004990"
            labelColor="white"
          />
        </div>
      </div>
    );
  }
}
