import React from "react";
class Countries extends React.Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.countries.map((m) => (
            <li
              style={{ cursor: "pointer" }}
              key={m.code}
              onClick={() => this.props.onCountryChange(m)}
              className={
                this.props.category === m.code
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {m.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Countries;
