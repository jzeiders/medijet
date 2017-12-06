import React from "react";

export default class CountryCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { minPrice, maxPrice, img } = this.props;
    minPrice = (minPrice / 1000).toFixed(1);
    maxPrice = (maxPrice / 1000).toFixed(1);
    return (
      <div className="Card Card-Country" onClick={this.props.onClick}>
        <div className="Card-Country-Left">
          <img width={100} height={100} src={img} />
        </div>
        <div className="Card-Country-Right">
          <div className="Card-Title">{this.props.name}</div>
          <div className="Card-Content">
            <div className="Card-Price">
              {minPrice == maxPrice && <span> {minPrice}k </span>}
              {minPrice != maxPrice && (
                <span>
                  {minPrice}k - {maxPrice}k
                </span>
              )}{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
