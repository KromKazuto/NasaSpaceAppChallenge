import React from 'react'
import './auth.css'
import firebase from 'firebase'

export const isAuthenticated = () => true

class Auth extends React.Component {

  auth = undefined
  config = undefined

  constructor(){  
    super()
    this.authenticate = this.authenticate.bind(this)

    this.config = {
      apiKey: "AIzaSyAPbXw7WorLwTCzUWwzZXybqSuvD95cQ6c",
      authDomain: "nasaspaceappchallenge-5a644.firebaseapp.com",
      databaseURL: "https://nasaspaceappchallenge-5a644.firebaseio.com",
      projectId: "nasaspaceappchallenge-5a644",
      storageBucket: "nasaspaceappchallenge-5a644.appspot.com",
      messagingSenderId: "936065886333",
      appId: "1:936065886333:web:0df5e9c4ff5fd4ae566914",
      measurementId: "G-NB5MJ83DRG"
    }

    this.state = {
      user: null,
      emailLogin: null,
      passwordLogin: null,
      displayName: null,
      email: null,
      emailVerified: null,
      photoURL: null,
      isAnonymous: null,
      uid: null,
      providerData: null
    }
  }

  componentDidMount() {
    firebase.initializeApp(this.config)
    // this.auth = firebase.auth()

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          uid: user.uid,
          providerData: user.providerData
        })
        localStorage.setItem('firebase_auth', this.state.user)
      } else {
        this.setState({
          user: undefined
        })
        localStorage.removeItem('firebase_auth')
      }
    })
  }

  authenticate = (e) => {
    e.preventDefault()

    const { emailLogin, passwordLogin } = this.state

    firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin).then(userSignIn => {
      this.setState({
        user: userSignIn
      })
      window.location.href ='/app'
      this.refs.email.value = ''
      this.refs.password.value = ''
    }).catch((error) => {
      let errorCode = error.Code,
        errorMessage = error.Message
      console.log(errorCode, '-', errorMessage)
    })
  }

  handleChangeEmail = (event) => {
    this.setState({
      emailLogin: event.target.value
    })
  }

  handleChangePassword = (event) => {
    this.setState({
      passwordLogin: event.target.value
    })
  }

  render() {
    return (
      <div className='content'>
        <div className='authContent'>
            <div>
              <label htmlFor='exampleInputEmail'>E-mail:</label>
              <input className={'comboBox'} id='email' ref='email' id='exampleInputEmail'
                aria-aria-describedby='emailHelp' placeholder='email' onChange={this.handleChangeEmail} />
            </div>
            <div>
              <label htmlFor='exampleInputPassword'>Senha:</label>
              <input className={'comboBox'} type='password' ref='password' id='exampleInpitPassword'
                placeholder='senha' onChange={this.handleChangePassword} />
            </div>
            <div>
              <button type='submit' onClick={this.authenticate} className='button'>Entrar</button>
            </div>
          </div>
      </div>
    )
  }
}

export default Auth