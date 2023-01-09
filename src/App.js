import React from "react";
import axios, { Axios } from "axios";

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];

const CardList = (props) => {
  return (
    <>
      {props.profiles.map((profile) => (
        <Card {...profile} />
      ))}
    </>
  );
};

class Form extends React.Component {
  state = {
    userName: "",
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmition(resp.data);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="">
        <input
          type="text"
          placeholder="github name"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    profile: testData,
  };

  addNewProfile = (profileData) => {
    console.log('app', profileData);
  };
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmition={this.addNewProfile}/>
        <CardList profiles={this.state.profile} />
      </div>
    );
  }
}

export default App;
