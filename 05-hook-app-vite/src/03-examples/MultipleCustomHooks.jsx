import { useFetch } from "../hooks/useFetch";

const MultipleCustomHooks = () => {

    const { data, isLoading, error } = useFetch( 'https://www.breakingbadapi.com/api/quotes/1' );

    console.log({ data, isLoading, error });

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
        </>
    )
}

export default MultipleCustomHooks;