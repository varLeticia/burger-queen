import React from 'react';
import Button from '../Button'
import firebase from '../firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const firebaseAppAuth = firebase.auth();

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
    };
  }

  handleChange = (event, element) => {
    const newState = this.state;
    newState[element] = event.target.value
    this.setState(newState);
  }


  createUser = () => {
    this.props.createUserWithEmailAndPassword(this.state.email, this.state.senha);
  }

  singIn = () => {
    this.props.singInWithEmailAndPassword(this.state.email, this.state.senha)                                                                                                                                                                                             
    .then(() => {
      alert('uhuul');
    });
  };

  render() {
    return (
      <div>
        <input value={this.state.email}
          placeholder="email"
          onChange={(e) => this.handleChange(e, "email")}
        />
        <input value={this.state.senha}
          placeholder="senha"
          onChange={(e) => this.handleChange(e, "senha")}
        />
        <Button text='criar usuário' onClick={this.createUser} />
        <Button text='loga com usuário' onClick={this.singIn} />
      </div>
    )
  }
}

export default withFirebaseAuth({
  firebaseAppAuth
})(Home);
