let obj = {
    a: null,
    b:null
}
console.log(obj.a?.b??"Elan")

var abc = 25;

if(function f(){}){
    abc = abc + typeof f;
    console.log(abc);
}


let arr = [1,2,3,4,5];
let findvalue = arr.find((currentelement)=>currentelement>5);
console.log(findvalue); //undefined -->  if no value fount then it will return undefined

if("0")
    { //true //because "0" is a non-empty string
    console.log("Im elan");
    }
 else
    {
        console.log("Im not elan");
    }

    console.log(null===undefined)
    console.log(null==undefined)