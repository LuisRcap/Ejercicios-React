import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, error } = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` );

    console.log({ data, isLoading, error });

    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading ? (
                    <div className="alert alert-info text-center" >
                        Loading...
                    </div>
                ) : (
                    <blockquote className="blockquote text-end" >
                        <p className="mb-2" >{ quote }</p>
                        <footer className="blockquote-footer" >{ author }</footer>
                    </blockquote>
                )
            }

            <button
                className="btn btn-primary"
                onClick={ () => increment() }
                disabled={ isLoading }
            >
                Next quote
            </button>
        </>
    )
}

export default MultipleCustomHooks;