import React, { useEffect } from 'react';
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import { 
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { firebase } from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { useState } from 'react';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    
    firebase.auth().onAuthStateChanged( user => {
      console.log(user);
      if( user?.uid ) {
        dispatch( login( user.uid, user.displayName ) )
        setIsLoggedIn( true );
      } else {
        setIsLoggedIn( false );
      }
      setChecking(false);

    });

  }, [ dispatch, setChecking, setIsLoggedIn ]);
  
  if( checking ) {
    return (
      <h1>Espere...</h1>
    )
  }

  return (
    <Router>
        <div>
            <Switch>
                <PublicRoute
                  path="/auth"
                  component={ AuthRouter }
                  isAuthenticated={ isLoggedIn }
                />

                <PrivateRoute
                  exact
                  isAuthenticated={ isLoggedIn }
                  path="/"
                  component={ JournalScreen }
                />

                <Redirect to='/auth/login'/>
            </Switch>
        </div>
    </Router>
  )
}

export default AppRouter;