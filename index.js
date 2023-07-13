const receivesAFunction = (call) =>{
    call()
}

const returnsANamedFunction = (fn = returnsANamedFunction) => {
    return returnsANamedFunction;
}

const returnsAnAnonymousFunction = (fn = returnsAnAnonymousFunction) =>{
    return (function () {
    })

}

// function receivesAFunction(call){
//    call();
//}

//function returnsANamedFunction(fn = returnsANamedFunction) {
//    return returnsANamedFunction;
//}

//function returnsAnAnonymousFunction(){
//    return (function()){

//     }
// }