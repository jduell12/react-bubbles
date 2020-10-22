import React, {useState} from "react";
import axios from 'axios';

const Login = props => {
  const {history} = props;

  const initialLoginValues = {
    username: '',
    password: ''
  }

  const [loginFormValues, setValues] = useState(initialLoginValues);

  const handleChanges = e => {
    setValues({...loginFormValues, [e.target.name]: e.target.value})
  }

  const login = e => {
    e.preventDefault();
    axios 
      .post('http://localhost:5000/api/login', loginFormValues)
      .then(res => {
          //set token to localstorage
          localStorage.setItem('token', res.data.payload);
          history.push('/bubblePage');
      })
      .catch(err => console.log(err))
      .finally(
        setValues(initialLoginValues)
      )
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
          <label htmlFor="username">
            Username: &nbsp;
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChanges}
              value={loginFormValues.username}
            />
          </label>
          <label htmlFor="password">
            Password: &nbsp;
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChanges}
              value={loginFormValues.password}
            />
          </label>
          <button>Login</button>
      </form>
    </>
  );
};

export default Login;
