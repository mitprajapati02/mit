function Outerfunction() {
    let variable = "that"
    return function innerFunction () { 
        console.log("I am a closure and I have access to " + variable)
     }
}

let innerFunction2 = Outerfunction();
innerFunction2();
