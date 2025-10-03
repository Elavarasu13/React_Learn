
function Scope(){
  //Global scope
     let a = 10;
     let b = 20;

    function demo()
    {
           console.log(a+b);

    }

    console.log(demo())

    //local scope
    function local(){
    let message  =  "Local scoper";
    console.log(message);
    }
    console.log(message) //message is not defined uncaught reference error

    //block scope

    function test(){
        let a = "let variable";

    }
test()

    return(
        <h1>Scope</h1>
    )
}

export default Scope;
