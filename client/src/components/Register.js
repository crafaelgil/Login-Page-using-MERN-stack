import React, { Component } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import  { isEmail } from 'validator';

import AuthService from '../services/auth.service';

const required = value => {
  if(!value) {
    <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
  }
}

const email = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
}

const vusername = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
}

const vpassword = value => {
  if(!value) {
    <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
  }
}

export default class Register extends Component {
  
}