import React from "react";
import PropTypes from 'prop-types';
// import React, { Fragment } from "react";

const PrimeraApp = ({ saludo }) => {

    return (
        <>
            <h1>{ saludo }</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> //Esto es para imprimir json */}
            <p>Mi primera aplicación</p>
        </>
    );
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
};

export default PrimeraApp;