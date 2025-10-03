function Block(){

    function test(){
        let a =  "let variable";
        const b = "const variable";
        var c = "var variable";
        if(true)
        {
            let a = 10;
            const b = 20;
            var c = 30;
        }

        console.log(a);
        console.log(b);
        console.log(c);
    }
    test()

    console.log(a); // a is not defined uncaught reference error
    console.log(b); // b is not defined uncaught reference error
    console.log(c); // c is not defined uncaught reference error
    return(
        <div>Block</div>
    )

}
export default Block;