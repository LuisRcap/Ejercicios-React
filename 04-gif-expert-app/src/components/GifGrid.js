import React/* , { useState, useEffect } */ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
// import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const {data, loading} = useFetchGifs();

    console.log(loading);
    console.log(data);
    /*
    useEffect( () => {
        getGifs( category )
            .then( setImages );
    }, [ category ]); */

    return (
        <>
            <h3>{ category }</h3>

            { loading ? 'Cargando...' : 'Data cargada '}
            {/* <div className="card-grid">
                {
                    images.map( ( img ) =>(
                        <GifGridItem
                            key={img.id}
                            { ...img }
                        />
                    ))
                }
            </div> */}
        </>
    );
};

export default GifGrid;