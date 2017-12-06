import React from "react";
import CountryCard from "../components/countrycard";
import Header from "../components/header";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setSelectedCountry } from "../actions/countries";
import { getFlights } from "../actions/flights";

class Country extends React.Component {
  constructor(props) {
    super(props);
  }
  handleCountryClick(name) {
    let { procedure, region } = this.props;
    this.props.setSelectedCountry(name);
    this.props.getFlights(procedure.name, region.selected.id, name);
    this.props.history.push("flights");
  }
  render() {
    let { procedure, region, countries, history } = this.props;
    let position = [
      {
        name: procedure.name,
        location: "home"
      },
      {
        name: region.selected.name,
        location: "regions"
      }
    ];
    return (
      <div>
        <Header position={position} history={history} />
        <div className="Screen">
          <div className="Card-Country-Container">
            {this.props.countries.map((country, i) => {
              return (
                <CountryCard
                  name={country.name}
                  img={images[i % images.length]}
                  minPrice={country.minPrice}
                  maxPrice={country.maxPrice}
                  onClick={() => this.handleCountryClick(country.name)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  countries: state.country.data,
  procedure: state.procedure,
  region: state.region
});
const mapDispatchToProps = dispatch => ({
  setSelectedCountry: name => dispatch(setSelectedCountry(name)),
  getFlights: (p, r, c) => dispatch(getFlights(p, r, c))
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Country)
);

const images = [
  "http://www.telegraph.co.uk/content/dam/Travel/2016/September/caribbean-main-ap-xlarge.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jdo4etiE7O7f0KRL-83HM4iFAywJ5aRlX7EU0q_fQRHmnQ8A",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDKaZ-Ae21ve8b6zwfYnD7Oqqfl7oeQWOocJLAby2LmtyB9Iz0",
  "https://images.cruisecritic.com/image/58/caribbean-all_x400_31.jpg",
  "https://www.oceaniacruises.com/Images/Region%20Slideshows/Caribbean/81604438578/Barbados-Caribbean.jpg",
  "https://data.whicdn.com/images/23843622/original.jpg",
  "http://media.expedia.com/hotels/5000000/4340000/4333700/4333673/4333673_43_b.jpg",
  "http://lecs-destinations-secondlife-com.s3.amazonaws.com/new/destinations/en/_img/fullsize/3821.jpg"
];
