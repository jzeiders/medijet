import React from "react";
import Header from "../components/header";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import RegionCard from "../components/regionCard";
import { setSelectedRegion } from "../actions/region";
import { getRegionsCountries } from "../actions/countries";

class Regions extends React.Component {
  constructor(props) {
    super(props);
  }
  handleRegionClick(name, id) {
    this.props.setSelectedRegion(name, id);
    this.props.getRegionsCountries(id);
    this.props.history.push("countries");
  }
  render() {
    let { procedure, regions, history } = this.props;
    let position = [
      {
        name: procedure.name,
        location: "home"
      }
    ];
    return (
      <div>
        <Header position={position} history={history} />
        <div className="Region-Container">
          <RegionCard
            name={"South America"}
            img={
              "https://www.simplepastimes.com/prod_images_blowup/C-102846.jpg"
            }
            onClick={() => this.handleRegionClick("South America", "SA")}
            minPrice={regions.SA.minPrice}
            maxPrice={regions.SA.maxPrice}
          />
          <RegionCard
            name={"Central America"}
            img={
              "https://pbs.twimg.com/profile_images/654261477508038656/izNidBPI_400x400.jpg"
            }
            onClick={() => this.handleRegionClick("Central America", "CA")}
            minPrice={regions.CA.minPrice}
            maxPrice={regions.CA.maxPrice}
          />
          <RegionCard
            name={"Caribbean"}
            img={
              "https://3j0grh44ocny4a6kcn288izx-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/caribbean-resorts-360x360.jpg"
            }
            onClick={() => this.handleRegionClick("Caribbean", "CB")}
            minPrice={regions.CB.minPrice}
            maxPrice={regions.CB.maxPrice}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  regions: state.region,
  procedure: state.procedure
});
const mapDispatchToProps = dispatch => ({
  setSelectedRegion: (name, id) => dispatch(setSelectedRegion(name, id)),
  getRegionsCountries: region => dispatch(getRegionsCountries(region))
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Regions)
);
