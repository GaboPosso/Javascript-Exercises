//##Single Threaded and Synchronic

/*In computer science a Thread is the smallest instruction sequences that can be managed by a 
resource planner of Operative System.

JavaScript is Synchronic and Single Threaded, this means that it can only do one command or 
instruction each time and it make it in order, it start the next instruction when it ends the
last one.

##SYNTAX PARSER

A program that reads your code and determines what this program makes, and if its syntax is valid.
If everything is fine, it generates legible code by the PC and after this, the code is executed as 
instructions. The interesting thing about this, is that the interpreter may add certain behaviors

##Lexical Environment

The lexical environment is related to Where are declares certain statements or expressions in a 
code, i.e. the behavior of JavScript may change according to where the code was written.  */

function hi() {
    var foo = 'Hi!'; //Statement inside the function
}
var bar = 'Bye'; //Declared outside the function

/*##Execution Context

It contains information about what code is running at all time. Beside keeping the code that must run,
it also keeps more information about from where the code was called, from where lexical environment the
code is.

##Global Environment

Every time that something is executed in JavaScript, it runs inside an Execution Context. As all the code
run inside a context, if we don't specify that context, then the code will be running inside the global 
context, that is the base context that is created automatically in the interpreter.

*BASICALLY, WE CAN TELL THAT ANY CODE BLOCK NOT DECLARED INSIDE A FUNCTION, IS DECLARED IN THE GLOBAL 
ENVIRONMENT **/