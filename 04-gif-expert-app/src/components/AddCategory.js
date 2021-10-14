import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = ( e ) => {
        setinputValue( e.target.value );

        console.log('handleInputChange llamado');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ) {
            setCategories( (categories) => [inputValue, ...categories] );
            setinputValue('');
        };

        // console.log('Submit hecho');
    };
    
    return (
        
        <form onSubmit={ handleSubmit }>
            <p>{ inputValue }</p>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
        
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

export default AddCategory;