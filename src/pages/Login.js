import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      loading: false,
      redirect: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleButton = async () => {
    const { name } = this.state;
    this.setState({
      loading: true,
    });
    await createUser({ name });
    this.setState({
      redirect: true,
      loading: false,
    });
  }

  render() {
    const { name, loading, redirect } = this.state;
    if (loading) return <Loading />;
    if (redirect) return <Redirect to="/search" />;

    return (
      <div data-testid="page-login">
        <h3>Login</h3>
        <form>

          <label htmlFor="login-name-input">
            Nome:
            <input
              type="text"
              name="name"
              data-testid="login-name-input"
              onChange={ this.handleChange }
              value={ name }
            />
          </label>

          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ name.length <= 2 }
            onClick={ this.handleButton }
          >
            Entrar
          </button>

        </form>
      </div>
    );
  }
}

export default Login;
