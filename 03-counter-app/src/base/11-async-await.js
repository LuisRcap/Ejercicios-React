export const getImagen = async() => {

    try{
        const apikey = 'Pozh5uZofEN9CXolqKGTTcSXfGXdytxX';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);

        const { data } = await resp.json();
        const { url } = data.images.original;

        return url;

    }catch(err){
        // Manejo del error
        // console.error(err);
        return 'No existe';
    }

};

getImagen();

