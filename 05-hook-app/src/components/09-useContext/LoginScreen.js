import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoginScreen = () => {

    const { user, setUser } = useContext( UserContext );

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={ () => setUser({
                    ...user,
                    id: 1234,
                    name: 'Luis Rico'
                })}
            >
                Login
            </button>       
        </div>
    )
};

export default LoginScreen;