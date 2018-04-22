import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    guessed: [],
    currentScore: 0,
    topScore: 0,
    message: "Click an image to begin!",
    title: "Click on an image to earn points, but don't click on any more than once!"
  };

  handleImageClick = id => {
    if (this.state.guessed.indexOf(id) === -1) {
      this.setState({ guessed: [ ...this.state.guessed, id ] });
      this.setState({ message: "You guessed correctly!" });
      this.setState({ title: "Click on an image to earn points, but don't click on any more than once!" });
      this.handleScore();
      this.shuffleCards();
    } else {
      this.setState({ message: "You guessed incorrectly! Play again!" });
      this.handleReset();
    }
  };

  handleScore = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({ currentScore: newScore });
    if (newScore === 12) {
      this.setState({title: "YOU WIN! Play again!"});
      this.handleReset();
    }
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
  }

  handleReset = () => {
    this.setState({
      guessed: [],
      currentScore: 0,
      topScore: this.state.topScore,
      message: "Click an image to begin!"
    });
    this.shuffleCards();
  };

  shuffleCards = () => {
    let array = this.state.friends;
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar
          message={this.state.message}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Title
          title={this.state.title}
        />
        {this.state.friends.map(friend => (
          <FriendCard
            onClick={this.handleImageClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
