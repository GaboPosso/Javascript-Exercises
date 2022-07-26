/*-------------------------------JS ERRORS----------------------------!

* The try statement defines a code block to run.
* the catch statement defines a code block to handle any error
* the finally statement defines a code block to run regardless of the result.
* The throw statement defines a custom error.*/


/*-------------------------------INPUT VALIDATION EXAMPLE-----------------|

This example examines input. If the value is wrong, an exception is thrown.

The exception is caught by the catch statement and a custom error message is displayed.


*/
function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
        if(x == "") throw "Empty";
        if(isNaN(x)) throw "Not a Number";
        x = Number(x);
        if(x < 5) throw "Too low";
        if(x > 10) throw "Too high";
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }
    finally {
        document.getElementById("demo").value = "";
    }
}

