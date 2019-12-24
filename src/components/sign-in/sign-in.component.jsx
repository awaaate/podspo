import React from 'react';

import FormInput from '../form-input/form-input.component'
import CostumButton from '../costum-button/costum-button.component'

import './sign-in.styles.scss'
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name] : value})
    }
    handleSubmit = event => {
        event.preventDefault()

        console.log(this.state)

        this.setState({email: '', password: ''})
    }
    render() {
        const handleChange = this.handleChange
        return (
            <div className="sign-in">
                <h1 className="title">I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="Email"
                        type="email"
                    />
                    <FormInput 
                        name="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="Password"
                        type="password"
                    />
                    <div className="buttons">
                        <CostumButton type="submit">sign in</CostumButton>
                        <CostumButton isGoogleSignIn onClick={signInWithGoogle}>sign in with google</CostumButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn