import { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'luis@google.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect(() => {
        // console.log('hey');
    }, []);

    useEffect( () => {
        // console.log('formState changed');
    }, [ formState ]);

    useEffect( () => {
        // console.log('email changed');
    }, [ email ]);


    

    return (
        <>
            <h1>SimpleForm</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            {
                ( username === 'strider2' ) && <Message />
            }

            <input
                type="email"
                className="form-control mt-2"
                placeholder="user@example.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

        </>
    );
}

export default SimpleForm;