import React, { Component } from "react";
import { Navbar, Text, Link, Switch } from "@nextui-org/react";
import { SunIcon } from "./sunIcon";
import { MoonIcon } from "./moonIcon";

class NavBar extends Component {
  render() {
    return (
      <Navbar variant="sticky">
        <Navbar.Toggle showIn="md" />
        <Navbar.Brand>
          <Text
            h1
            size={23}
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            weight="bold"
          >
            NEWS APP
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          activeColor="primary"
          hideIn="md"
          variant="highlight-solid-rounded"
        >
          {this.props.list.map((m) => (
            <Navbar.Link
              isActive={this.props.genre === m ? true : false}
              key={m}
              onClick={() => this.props.onClick(m)}
            >
              {m}
            </Navbar.Link>
          ))}
        </Navbar.Content>
        <Navbar.Content
          activeColor="warning"
          hideIn="md"
          variant="highlight-solid-rounded"
        >
          {this.props.countries.map((m) => (
            <Navbar.Link
              isActive={this.props.country === m.code ? true : false}
              key={m}
              onClick={() => this.props.doCountryChange(m)}
            >
              {m.name}
            </Navbar.Link>
          ))}
        </Navbar.Content>
        <Navbar.Content>
          <Switch
            onChange={() => this.props.doChangeDarkMode()}
            color="primary"
            size="xl"
            iconOn={<MoonIcon filled />}
            iconOff={<SunIcon filled />}
            checked={this.props.currentMode}
          />
        </Navbar.Content>

        <Navbar.Collapse>
          {this.props.list.map((item) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="primary"
              isActive={this.props.genre === item ? true : false}
            >
              <Link
                onClick={() => this.props.onClick(item)}
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
          {this.props.countries.map((item) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="warning"
              isActive={this.props.country === item.code ? true : false}
            >
              <Link
                onClick={() => this.props.doCountryChange(item)}
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
              >
                {item.name}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
