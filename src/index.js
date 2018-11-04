import React from 'react'
import { render } from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { logUser } from './actions'
import { firebaseApp } from './firebase'
import  reducer  from './reducers'
import App from './components/App'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()



const store = createStore(reducer)

firebaseApp.auth().onAuthStateChanged(user => {
	if(user){
		console.log('user has singed in or up', user)
		const { email } = user
		store.dispatch(logUser(email))
		history.push('/app')
	}else{
		console.log('user has singed out or still needs to sign in')
		history.replace('/signin')
	}
})


render(
	<Provider store={store}>
		<Router history={history}>
		  <Switch>
		  	  <Route  exact path="/" />
		  	  <Route path="/app" component={App} />
		      <Route path="/signin"  component={SignIn} />
		      <Route path="/signup"  component={SignUp} />
		  </Switch>
		</Router>
    </Provider>
	,document.getElementById('root')
)



