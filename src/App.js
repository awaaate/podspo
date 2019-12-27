import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

//pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

//components
import Header from './components/header/header.component';

//firebase
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

//redux
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';


class App extends React.Component {

  unsubscribeFromAuth = null
  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
          console.log(this.props)
        })
      }
      else{

        setCurrentUser(userAuth)
      }
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path="/signin" render={() => 
            this.props.currenUser? (
             <Redirect to="/"/>
            ):(
              <SignInAndSignUpPage />
            )
            
          } />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
const mapStateToProps = ({user}) =>({
  currenUser: user.currentUser,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
