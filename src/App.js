import React from "react";
import QuoteAndAuthor from "./Component/QuoteAndAuthor";
import QuotesDatabase from "./Component/QuotesDatabase";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: QuotesDatabase[0].quote,
      author: QuotesDatabase[0].author
    };
  }

  randomQuote = () => {
    const randomNumber = Math.floor(Math.random() * QuotesDatabase.length);
    return QuotesDatabase[randomNumber];
  }
  shuffleQuotes = (array) => {
    return array.sort(() => Math.random() - 0.5);
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(QuotesDatabase);
  };

  randomColor = () => {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }

  render() {
    return (
      <div>
        <QuoteAndAuthor
          displayColor={this.randomColor}
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
    );
  }
}