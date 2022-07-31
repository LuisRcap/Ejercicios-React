import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ onNewCategory }) => {
    
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = ( e ) => {
        setinputValue( e.target.value );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ) {
            onNewCategory( inputValue.trim() );
            setinputValue('');
        };

    };
    
    return (
        
        <form onSubmit={ handleSubmit } aria-label='form' >
            <p>{ inputValue }</p>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                id="gif-input"
            />
            <button type="submit" className='btn'>Agregar</button>
        </form>
        
    );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
};

export default AddCategory;