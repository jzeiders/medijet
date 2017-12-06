import React, { Component } from "react";
import AutoComplete from "material-ui/AutoComplete";

export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  handleUpdateInput = value => {
    this.props.onChange(value);
  };

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Procedure"
          dataSource={this.props.procedures}
          onUpdateInput={val => this.handleUpdateInput(val)}
          floatingLabelText="Enter Your Procedure"
          value={this.props.value}
        />
      </div>
    );
  }
}
