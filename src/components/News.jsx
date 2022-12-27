import React, { Component } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import NavBar from "./NavBar";
import {
  Container,
  Progress,
  createTheme,
  NextUIProvider,
} from "@nextui-org/react";

class News extends Component {
  darkTheme = createTheme({
    type: "dark",
    theme: {},
  });
  lightTheme = createTheme({
    type: "light",
    theme: {},
  });

  state = {
    data: [],
    category: [
      "General",
      "Business",
      "Entertainment",
      "Health",
      "Science",
      "Sports",
      "Technology",
    ],
    countries: [
      { name: "India", code: "in" },
      { name: "Australia", code: "au" },
      { name: "New Zealand", code: "nz" },
      { name: "Canada", code: "ca" },
      { name: "UK", code: "gb" },
      { name: "USA", code: "us" },
    ],

    currentCategory: "General",
    currentCountry: "in",
    currentCountryName: "India",
    spinner: true,
    darkMode: false,
    url: `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
  };
  handleDarkMode = () => {
    let currentMode = this.state.darkMode;
    this.setState({ darkMode: !currentMode });
  };
  handleCountryChange = async (m) => {
    this.setState({ spinner: true });
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${m.code}&category=${this.state.currentCategory}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    const data = response.data.articles;
    this.setState({ spinner: false });
    console.log(data);
    this.setState({ data, currentCountry: m.code, currentCountryName: m.name });
    console.log(m);
  };

  handleClick = async (m) => {
    this.setState({ spinner: true });
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${this.state.currentCountry}&category=${m}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    );
    const data = response.data.articles;
    this.setState({ spinner: false });
    console.log(m);
    this.setState({ data, currentCategory: m });
  };
  async componentDidMount() {
    this.setState({ spinner: true });
    const response = await axios.get(process.env.REACT_APP_NEWS_API_URL);
    const data = response.data.articles;
    this.setState({ spinner: false });
    this.setState({ data });
  }

  render() {
    return (
      <NextUIProvider
        theme={this.state.darkMode ? this.darkTheme : this.lightTheme}
      >
        <div>
          <NavBar
            name={this.state.currentCountryName}
            category={this.state.currentCategory}
            onClick={this.handleClick}
            list={this.state.category}
            country={this.state.currentCountry}
            doCountryChange={this.handleCountryChange}
            genre={this.state.currentCategory}
            countries={this.state.countries}
            doChangeDarkMode={this.handleDarkMode}
            currentMode={this.state.darkMode}
          />
          <Container>
            {this.state.spinner && (
              <div>
                <Progress
                  indeterminated
                  value={10}
                  color="success"
                  status="success"
                />
              </div>
            )}
            <div className="sticky-bottom">
              <p style={{ textAlign: "center", fontSize: "25px" }}>
                Showing <b>{this.state.currentCategory}</b> news from{" "}
                <b>{this.state.currentCountryName}</b>
              </p>
              <h5 style={{ textAlign: "center" }}>{Date()}</h5>
            </div>
            <NewsCard news={this.state.data} />
          </Container>
        </div>
      </NextUIProvider>
    );
  }
}

export default News;
