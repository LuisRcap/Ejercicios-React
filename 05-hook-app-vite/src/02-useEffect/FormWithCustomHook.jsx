import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

const FormWithCustomHook = () => {

    const { onResetForm, onInputChange, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

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

            <input
                type="email"
                className="form-control mt-2"
                placeholder="user@example.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button
                className="btn btn-primary mt-2"
                onClick={ onResetForm }
            >
                Reset
            </button>

        </>
    );
}

export default FormWithCustomHook;