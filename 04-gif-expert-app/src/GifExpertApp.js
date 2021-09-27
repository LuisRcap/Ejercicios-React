import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
// import PropTypes from 'prop-types';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    /* const handleAdd = () => {
        setCategories( ['Naruto Shippuden', ...categories] );
    }; */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />

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