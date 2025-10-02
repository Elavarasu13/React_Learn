function Callback(){

    //function passing as a paramter to another funtion is callback function
    function greet(name,callback){
        console.log(`Hello ${name}`)
        callback(); // calling back function
    //     setTimeout(() => {
    //     sayBye(); // passing argument
    //   }, 2000);
    }
    function sayBye(){
        console.log("good day,Good bye");
    }

    function sayThanks()
    {
        console.log("Thanks for your time");
    }

    greet("Elavarasan", sayBye)
    greet("thank you",sayThanks)

    return (
        <>
         <h1>Callback Page</h1>
        </>
    )   
}
export default Callback;