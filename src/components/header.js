import React from "react";
export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { position, history } = this.props;
    return (
      <div className="Header">
        <div className="Title-Header" onClick={() => history.push("/")}>
          MediJet
        </div>
        <div className="Subheader-Header">
          {position &&
            position.map((item, i) => {
              item.name += i == this.props.position.length - 1 ? "" : " > ";
              return (
                <span onClick={() => history.push(item.location)}>
                  {item.name}
                </span>
              );
            })}
        </div>
      </div>
    );
  }
}
