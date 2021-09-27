import React, { useState } from 'react';
// import PropTypes from 'prop-types';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {
        setCategories( ['Naruto Shippuden', ...categories] );
    };

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={ handleAdd }>Agregar</button>

            <ol>
                {
                    categories.map( (category, i) => {
                        return <li key={ category } >{ category }</li>;
                    })
                }
            </ol>
        </>
    );
};

export default GifExpertApp;