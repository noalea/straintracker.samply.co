import React, { Component } from 'react';
import $ from 'jquery';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const site = window.location.origin;


class Join extends Component {

  state = {
    formSignIn: false
  };

  componentDidMount() {
  };

  isEmpty(el) {
    return el !== "" && el !== undefined && el !== null && (/\S/.test(el));
  }

  isEmail(email) {
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  isUsernameAvailable(isEmailAvail) {
    // Check if username exists
    let username = this.getData().username, self = this;
    let userData = JSON.stringify({
      username: username
    });

    $.ajax({
      type: 'POST',
      url: 'http://codeyourfreedom.com/straintracker/php/checkUsername.php',
      data: userData
    })
    .done(function(data) {
      let d = JSON.parse(data);
      if (d === 1) self.createAccount(isEmailAvail, false);
      else self.createAccount(isEmailAvail, true);
    })
    .fail(function(err) {
      console.log(err);
    });
  }

  isEmailAvailable() {
    // Check if email exists
    let email = this.getData().email, self = this;
    let userData = JSON.stringify({
      email: email
    });

    $.ajax({
      type: 'POST',
      url: 'http://codeyourfreedom.com/straintracker/php/checkEmail.php',
      data: userData
    })
    .done(function(data) {
      let d = JSON.parse(data);
      if (d === 1) self.isUsernameAvailable(false);
      else self.isUsernameAvailable(true);
    })
    .fail(function(err) {
      console.log(err);
    });

  }

  getData() {
    return {
      email: $(".join-form input[name='email']").val(),
      username: $(".join-form input[name='username']").val(),
      password: $(".join-form input[name='password']").val()
    }
  }

  validateCreate(isEmailAvail, isUsernameAvail) {
    let data = this.getData(), result = [];
    if (!this.isEmail(data.email) || !isEmailAvail)
      result.push('email');
    if (!this.isEmpty(data.username) || !isUsernameAvail)
      result.push('username');
    if (data.password.length < 6)
      result.push('password');
    return result;
  }

  toggleForm() {
    this.setState((state) => {
      return {
        formSignIn: !state.formSignIn
      }
    });
  }

  createAccount(isEmailAvail, isUsernameAvail) {
    let valid = this.validateCreate(isEmailAvail, isUsernameAvail),
        self = this;

    if (valid.length === 0) {
      // Create account
      let userData = JSON.stringify({
        email: self.getData().email,
        user: self.getData().username,
        password: self.getData().password
      });

      $.ajax({
        type: 'POST',
        url: 'http://codeyourfreedom.com/straintracker/php/createAccount.php',
        data: userData
      })
      .done(function(data) {
        let d = JSON.parse(data);
        if (d[0]) {
          cookies.set('uid', d[1], { path: '/' });
          window.location.reload(false);
        }
      })
      .fail(function(err) {
        console.log(err);
      });
    } else {
      // Show errors
      console.log(valid);
    }
  }

  signIn() {
    let self = this;
    // Check Sign in
    let userData = JSON.stringify({
      user: self.getData().username,
      password: self.getData().password
    });

    $.ajax({
      type: 'POST',
      url: 'http://codeyourfreedom.com/straintracker/php/signIn.php',
      data: userData
    })
    .done(function(data) {
      let d = JSON.parse(data);
      console.log(d);
      if (d[0]) {
        cookies.set('uid', d[1], { path: '/' });
        window.location.reload(false);
      }
    })
    .fail(function(err) {
      console.log(err);
    });
  }

  render() {
    let { formSignIn } = this.state;
    let self = this;

    function RenderForm() {
      if (!formSignIn) {
        return (
          <div>
            <div className={'join-header'}>
              <h3>Start using the right strains</h3>
              <p>Because everyone is different.</p>
            </div>
            <div className={'join-form'}>
              <input type={'email'} name={'email'} placeholder={'Email'} autoComplete={'off'}/>
              <input type={'text'} name={'username'} placeholder={'Username'} autoComplete={'off'}/>
              <input type={'password'} name={'password'} placeholder={'Password (at least 6 chars)'}/>
              <button onClick={self.isEmailAvailable.bind(self)} className={'wrapper whover create-btn'}>Create Account
              </button>
            </div>
            <div className={'join-signin'}>
              <p>Already have an account? <span onClick={self.toggleForm.bind(self)}>Sign in</span></p>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <div className={'join-header'}>
              <h3>Start using the right strains</h3>
              <p>Because everyone is different.</p>
            </div>
            <div className={'join-form'}>
              <input type={'text'} name={'username'} placeholder={'Username'} autoComplete={'off'}/>
              <input type={'password'} name={'password'} placeholder={'Password'}/>
              <button onClick={self.signIn.bind(self)} className={'wrapper whover create-btn'}>Sign In
              </button>
            </div>
            <div className={'join-signin'}>
              <p>Don't have an account? <span onClick={self.toggleForm.bind(self)}>Sign Up</span></p>
            </div>
          </div>
        );
      }
    }

    return (
      <div className={'join wrapper'}>
        {RenderForm()}
      </div>
    );
  }
}

export default Join;
