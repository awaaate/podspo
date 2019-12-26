import React from 'react';

import FormInput from '../form-input/form-input.component';
import CostumButton from '../costum-button/costum-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''

        }
    }
    handleChange = event => {
        const { name, value} = event.target;

        this.setState({[name]: value})
    }
    handleSubmit = async event => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state;
        if(password != confirmPassword){
            alert("passwords don't match");

            return
        }
        try {

            let user = await auth.createUserWithEmailAndPassword(email, password);
            console.log(user)
            user = user.user
            await createUserProfileDocument(user, displayName);

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''         
            });

        }catch(error) {
            console.error(error)
        }

    }
    render(){
        const {password, confirmPassword,email, displayName} = this.state
        return (
            <div className="sign-up" onSubmit={this.handleSubmit}>
                <h1>I don't have an account</h1>
                <span>create new account</span>

                <form>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        label="User Name"
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        label="Email"
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        label="Password"
                        handleChange={this.handleChange}
                        required
                    />                
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        label="Confir Password"
                        handleChange={this.handleChange}
                        required
                    />

                    <CostumButton type="submit">Sign Up</CostumButton>
                    </form>
            </div>
        )
    }
}
export default SignUp