import React, { Component } from 'react';
import $ from 'jquery';
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

  isUsernameAvailable(username) {
    // Check if username exists
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
      console.log(d);
    })
    .fail(function(err) {
      console.log(err);
    });
  }

  returnTrue() {
    return true;
  }

  returnFalse() {
    return false;
  }

  isEmailAvailable(email) {
    // Check if email exists
    let taken = false, self = this;
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
      console.log('d ', d);
      // if (d == 1) self.validateCreate(true);
      // else self.validateCreate(false);
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

  validateCreate(isEmailAvail) {
    let data = this.getData();
    if (!this.isEmail(data.email) || !isEmailAvail)
      return {
        valid: false,
        reason: 'email'
      };
    return true;
  }

  validateSignIn() {
    let data = this.getData();
    console.log(data);
  }

  toggleForm() {
    this.setState((state) => {
      return {
        formSignIn: !state.formSignIn
      }
    });
  }

  createAccount() {
    let valid = this.validateCreate();
    console.log(valid);
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
              <input type={'password'} name={'password'} placeholder={'Password'}/>
              <button onClick={self.createAccount.bind(self)} className={'wrapper whover create-btn'}>Create Account
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
              <button onClick={self.validateSignIn.bind(self)} className={'wrapper whover create-btn'}>Sign In
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
