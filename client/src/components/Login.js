import React, {useState} from "react";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const {history} = props;

  const initialLoginValues = {
    username: '',
    password: ''
  }

  const [loginFormValues, setValues] = useState(initialLoginValues);

  const handleChanges = e => {

  }

  const login = e => {
    e.preventDefault();
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
              type="text"
              name="password"
              id="password"
              onChange={handleChanges}
              value={loginFormValues.password}
            />
          </label>
      </form>
    </>
  );
};

export default Login;
