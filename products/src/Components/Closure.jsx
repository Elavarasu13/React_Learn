function Closure(){

    function outer()
    {
        let count  = 0;

        function inner()
        {
            count++;
            console.log(count);
        }
        return inner;
    }
    const fn  = outer();
    fn();
    fn();

    return (
        <>
        <h1>Closure</h1>
        </>
    )
}
export default Closure;