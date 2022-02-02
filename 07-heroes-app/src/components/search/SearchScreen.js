import HeroCard from "../hero/HeroCard";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";

const SearchScreen = () => {

    const [ { searchText }, handleInputChange ] = useForm({
        searchText: ''
    });

    const heroesFileted = getHeroesByName( 'Algo por aqui' );

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchText)
    };

    return (
        <>
            <h1>Búsqueda</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr/>

                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            placeholder="Buscar un héroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Buscar
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr/>

                    {
                        heroesFileted.map( hero => (
                            <HeroCard
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }

                </div>

            </div>
        </>
    );
};

export default SearchScreen;