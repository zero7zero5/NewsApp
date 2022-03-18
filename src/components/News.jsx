import React from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
//import ListGroup from "./ListGroup";
import NewsCard from "./NewsCard";
//import Countries from "./Countries";
import NavBar from "./NavBar";

class News extends React.Component {
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
      { name: "United Kingdom", code: "gb" },
      { name: "United States", code: "us" },
    ],

    currentCategory: "General",
    currentCountry: "in",
    currentCountryName: "India",
    spinner: true,
    url: `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=ec1cd982aae64a2faee053fe4e93826c`,
  };
  handleCountryChange = async (m) => {
    this.setState({ spinner: true });
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${m.code}&category=${this.state.currentCategory}&apiKey=ec1cd982aae64a2faee053fe4e93826c`
    );
    const data = response.data.articles;
    this.setState({ spinner: false });
    console.log(data);
    this.setState({ data, currentCountry: m.code, currentCountryName: m.name });
  };

  handleClick = async (m) => {
    this.setState({ spinner: true });
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${this.state.currentCountry}&category=${m}&apiKey=ec1cd982aae64a2faee053fe4e93826c`
    );
    const data = response.data.articles;
    this.setState({ spinner: false });
    console.log(data);
    this.setState({ data, currentCategory: m });
  };
  async componentDidMount() {
    this.setState({ spinner: true });
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=ec1cd982aae64a2faee053fe4e93826c`
    );
    const data = response.data.articles;
    this.setState({ spinner: false });
    this.setState({ data });
  }

  render() {
    return (
      <div>
        <NavBar
          name={this.state.currentCountryName}
          category={this.state.currentCategory}
          onClick={this.handleClick}
          list={this.state.category}
          country={this.state.currentCountry}
          onCountryChange={this.handleCountryChange}
          countries={this.state.countries}
        />
        <div className="container">
          {this.state.spinner && (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
            </div>
          )}
          <div className="sticky-bottom">
            <p style={{ textAlign: "center", fontSize: "25px" }}>
              Showing <b>{this.state.currentCategory}</b> news from{" "}
              <b>{this.state.currentCountryName}</b>
            </p>
            <p style={{ textAlign: "center" }}>{Date()}</p>
          </div>
          <NewsCard news={this.state.data} />
        </div>
      </div>
    );
  }
}

export default News;
