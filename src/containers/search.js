import React, { Component } from "react";
import AutoComplete from "material-ui/AutoComplete";

export default class Search extends Component {
  state = {
    dataSource: []
  };

  handleUpdateInput = value => {
    this.setState({
      dataSource: [value, value + value, value + value + value]
    });
  };

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Procedure"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Enter Your Procedure"
        />
      </div>
    );
  }
}
