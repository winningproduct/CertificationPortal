import React, { Component } from 'react'
import { Auth } from 'aws-amplify';

 class JSignIn extends Component {

    constructor(props){
        super(props);
        this.state={
           username:'',
           password:''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();

        const { username, password } = this.state;
        console.log(username)
      
       
        Auth.signIn(username, password)
          .then(user => this.signInSuccess(user))
          .catch(err => this.signInError(err));
        

    }
    signInSuccess(user) {
        console.log('good')
        this.setState({ error: '' });
    
        const { onStateChange } = this.props;
        if (!onStateChange) { return; }
    
        if (user.challengeName === 'SMS_MFA' || user.challengeName === 'SOFTWARE_TOKEN_MFA') {
          onStateChange('confirmSignIn', user);
        } else {
          onStateChange('signedIn', user);
        }
      }
    render() {
        const { authState } = this.props;
        if (!['signIn', 'signedOut', 'signedUp'].includes(authState)) { return null; }
        return (
           
            <div>
               <h1>New Login page</h1> 
               <form onSubmit={this.onSubmit}>
                   <div>
                       <label>Username</label>
                       <br/>
                       <input type="text" name='username' onChange={this.onChange} value={this.state.username}/>   
                   </div>
                   <div>
                       <label>Password</label><br/>
                       <input type="password" name='password' onChange={this.onChange} value={this.state.password}/> 
                   </div>
                   <button type="submit">Submit</button>
               </form>
            </div>
        )
    }
}
export default JSignIn