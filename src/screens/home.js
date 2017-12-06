import React from "react";
import { Search } from "../containers";
import AutoComplete from "material-ui/AutoComplete";
import Button from "material-ui/RaisedButton";
import { withRouter } from "react-router-dom";
import CircularProgress from "material-ui/CircularProgress";
import { Redirect } from "react-router-dom";
import Header from "../components/header";
import { connect } from "react-redux";
import { setProcedure, recommend } from "../actions/procedure";
import { getProcedures } from "../api/recommend";
import { getRegionPricing } from "../actions/region";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      finishedLoading: false,
      searchVal: "",
      procedures: []
    };
    getProcedures().then(procedures => {
      this.setState({ procedures });
    });
  }
  reccomendHandler() {
    this.props.setProcedure(this.state.searchVal);
    this.props.recommend(this.state.searchVal);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.props.history.push("flights");
    }, 1000);
  }
  submitHandler() {
    this.props.setProcedure(this.state.searchVal);
    this.props.getRegionPricing(this.state.searchVal);
    this.setState({ isLoading: true });
    setTimeout(() => this.setState({ finishedLoading: true }), 200);
  }
  searchValOnUpdate(val) {
    this.setState({
      searchVal: val
    });
  }
  render() {
    return (
      <div>
        <Header history={this.props.history} />
        <div className="Screen Home">
          <div>
            <div className="Title"> MediJet </div>
            <div className="Center">
              <Search
                value={this.props.searchVal}
                procedures={this.state.procedures}
                onChange={val => this.searchValOnUpdate(val)}
              />
            </div>
            <div className="Home-Buttons">
              <Button label="Explore" onClick={() => this.submitHandler()} />
              <Button
                label="Recommend"
                backgroundColor="rgb(255, 153, 0)"
                onClick={() => this.reccomendHandler()}
              />
            </div>
            {this.state.isLoading && <LoadingSection />}
            {this.state.finishedLoading && <Redirect to="/regions" />}
          </div>
        </div>
      </div>
    );
  }
}

const LoadingSection = () => {
  return (
    <div className="LoadingSection-Container">
      <div className="LoadingSection">
        <CircularProgress size={60} thickness={5} />
        <p>Optimizing Flights</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  setProcedure: name => dispatch(setProcedure(name)),
  recommend: procedure => dispatch(recommend(procedure)),
  getRegionPricing: procedure => dispatch(getRegionPricing(procedure))
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
