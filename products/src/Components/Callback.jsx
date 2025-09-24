function Callback(){

    function greet(name,sayBye){
        console.log(`Hello ${name}`)
        sayBye(); // calling back function
    //     setTimeout(() => {
    //     sayBye(); // passing argument
    //   }, 2000);
    }
    function sayBye(){
        console.log("good day,Good bye");
    }

    greet("Elavarasan", sayBye)
    return (
        <>
         <h1>Callback Page</h1>
        </>
    )   
}
export default Callback