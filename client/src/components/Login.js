import React, { Component } from 'react';

class Login extends Component {

    state = {
        username: '',
        password: '',
        status: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { status, ...user } = this.state;
        fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(response => {
                if (response.status === 'successful') {
                    localStorage.setItem('usertoken', response.token);
                    this.props.history.push('/profile');
                } else {
                    this.setState({
                        status: response.status
                    });
                }
            })
            .catch(console.log)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.handleSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="Enter Username"
                                    value={this.state.email}
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password </label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.handleChange} />
                            </div>
                            <div className="alert alert-info" role="alert">
                                {this.state.status}
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login