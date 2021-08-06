import React, { Component } from "react";
import axios from 'axios';

export default class Insert extends Component {
    
    
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            email: '',
            password: '',
        }
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }


    // let history = useHistory();
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            email: this.state.email,
            password: this.state.password,
        };

        console.log(obj);
        axios.post("http://localhost/Trainee-Associate-Assignment/bizlogic/login.php", obj)
            .then(res => {
                console.log(res.data);

                if(res.data.msg == "Success"){
                   // console.log(this.props)
                    this.props.history.push("/view");
                    sessionStorage.setItem('user', res.data.user);
                    // message =  res.data.msg;
                    
                }
            }).catch(
            )
    }

    render() {
        return (

            <div >
                <div >
                    <h1 >Welcome Practical Test</h1>
                    <div >
                        <form onSubmit={this.onSubmit}>

                            <div>

                                <div >
                                    <label >Email address</label>
                                    <input type="email"
                                        id="inputFieldOne"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                    />
                                </div>
                                <div >
                                    <label>Password</label>
                                    <input type="password"
                                        id="inputFieldTwo"
                                        placeholder="Enter Password"
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                    />
                                </div>
                                 // <p >{message}</p> 

                                  <div></div>
                                <button type="submit"

                                >Sign in</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        )
    }
}