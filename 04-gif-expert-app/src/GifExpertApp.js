import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = []}) => {

    const [categories, setCategories] = useState(defaultCategories);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes( newCategory ) ) return
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory={ (value) => onAddCategory(value) }
            />
            <hr />

            <ol>
                {
                    categories.map( (category, i) => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;