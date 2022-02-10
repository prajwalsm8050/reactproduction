import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Loginn from './loginn';
class ResultList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            username: '',
            profileURL: ''
        };
    }

    handleParentData = (formModel) => {
        this.setState({ ...formModel });
    }

    handleParentDataByGoogleAuth = (Gusername, Gemail, GprofileURL) => {
        this.setState({
            email : Gemail,
            username : Gusername,
            profileURL : GprofileURL
        })
    }


    render() {
        return (
            <div>

                {/* <Loginn handleData={this.handleParentData} /> */}
                <Loginn style = {{display:"none"}} handleDataByGoogleAuth = {this.handleParentDataByGoogleAuth}/>

                <div class="card" style={{ width: "18rem", display: "block", margin: "auto" }}>
                    <img src={this.state.profileURL} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">User Profile</h5>
                        <p class="card-text">EmailId:{this.state.email}</p>
                        <NavLink to="/home" class="btn btn-primary">GoTo Home Page</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
export default ResultList
