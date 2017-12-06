import React, { Component } from "react";

export default class RegionCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { minPrice, maxPrice, img, name } = this.props;
    minPrice = (minPrice / 1000).toFixed(1);
    maxPrice = (maxPrice / 1000).toFixed(1);
    return (
      <div className="Card Card-Region" onClick={this.props.onClick}>
        <div className="image-container">
          <img src={img} width={250} height={250} />
        </div>
        <div className="Region-Card-Content">
          <div className="Card-Title">{this.props.name}</div>
          <div className="Card-Prices">
            {minPrice == maxPrice && <span> {minPrice}k </span>}
            {minPrice != maxPrice && (
              <span>
                {minPrice}k - {maxPrice}k
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
}
