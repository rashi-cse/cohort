function call() { 

}

let p = new Promise(call);

function callback() {
    console.log("Successful promise called.");
}

p.then(callback); 