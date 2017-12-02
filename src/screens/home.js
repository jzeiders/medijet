import React from "react";
import { Search } from "../containers";
import AutoComplete from "material-ui/AutoComplete";
import Button from "material-ui/RaisedButton";
import { withRouter } from "react-router-dom";
import CircularProgress from "material-ui/CircularProgress";
import { Redirect } from "react-router-dom";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      finishedLoading: false
    };
  }
  submitHandler(history) {
    this.setState({ isLoading: true });
    setTimeout(() => this.setState({ finishedLoading: true }), 1000);
  }
  render() {
    return (
      <div className="Screen Home">
        <div>
          <div className="Title"> MediJet </div>
          <div className="Center">
            <Search />
          </div>
          <div className="Center">
            <Button label="submit" onClick={() => this.submitHandler()} />
          </div>
          {this.state.isLoading && <LoadingSection />}
          {this.state.finishedLoading && <Redirect to="/regions" />}
        </div>
      </div>
    );
  }
}

const LoadingSection = () => {
  return (
    <div class="LoadingSection">
      <CircularProgress size={60} thickness={5} />
      <p>Loading Data</p>
    </div>
  );
};
