import React from "react";

class ListGroup extends React.Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.list.map((m) => (
            <li
              style={{ cursor: "pointer" }}
              key={m}
              onClick={() => this.props.onClick(m)}
              className={
                this.props.category === m
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {m}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListGroup;
