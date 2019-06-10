import React, { Component } from 'react'

class Register extends Component {

    state = {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        status: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { status, ...newUser } = this.state;
        fetch('http://localhost:5000/auth/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    status: res.status
                })
            })
            .catch(console.log)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.handleSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="firstName"
                                    placeholder="Enter First Name"
                                    value={this.state.firstName}
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="lastName"
                                    placeholder="Enter Last Name"
                                    value={this.state.lastName}
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="Enter Username"
                                    value={this.state.username}
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
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register