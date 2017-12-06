import React from "react";
import Header from "../components/header";
import Flight from "../components/flight";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Flights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: []
    };
  }
  render() {
    let { procedure, region, country, history, flights } = this.props;
    let position = [
      {
        name: procedure.name,
        location: "home"
      },
      {
        name: region.selected.name,
        location: "regions"
      },
      {
        name: country.selected.name,
        location: "countries"
      }
    ];
    return (
      <div>
        <Header position={position} history={history} />
        <div className="Screen">
          <div className="TipBox">
            <div className="TipBox-Left">
              <img
                width={75}
                height={75}
                src={
                  "https://i.pinimg.com/236x/f9/dd/56/f9dd561291ff12fffb2cb495ed33aa60--lightbulbs-balloon.jpg"
                }
              />
            </div>
            <div className="TipBox-Content">
              <div className="TipBox-Title"> Recommendation </div>
              <div className="TipBox-SubTitle">
                Take the following flights with JetBlue to Save Money!
              </div>
            </div>
          </div>
          <div className="FlightList">
            <div className="FlightList-Header"> Best Flights</div>
            {flights.data.map((flight, i) => {
              return <Flight location={flight.airport} price={flight.price} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  procedure: state.procedure,
  region: state.region,
  country: state.country,
  flights: state.flights
});
const mapDispatchToProps = dispatch => ({});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Flights)
);
