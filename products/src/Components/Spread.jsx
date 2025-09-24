function Spread()
{
const numbers = [1,2,3];
const newNumbers = [...numbers,4,5,6];

    return (
        <>
        <h1>Spread Operator</h1>
        <p>{newNumbers}</p>
        </>
    )
}
export default Spread;