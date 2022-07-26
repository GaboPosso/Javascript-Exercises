//-----------------------------------------SWITCH STATEMENT--------------------------------------------------
/* The switch statement is used to perform different actions based on different conditions.

This is how it works:

-The switch expression is evaluated once.
-The value of the expression is compared with the values of each case.
-If there is a match, the associated block of code is executed.
-If there is no match, the default code block is executed.


-> Example
The getDay() method returns the weekday as a number between 0 and 6.

(Sunday=0, Monday=1, Tuesday=2 ..)

This example uses the weekday number to calculate the weekday name:
*/

switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3: 
        day = 'Wednesday';
        break;
    case 4: 
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
}
/* -----------------The break Keyword--------------------------

When JavaScript reaches a break keyword, it breaks out of the switch block.

This will stop the execution inside the switch block.

It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case.
 */

/*-------------------The default keyword---------------------------
The default keyword specifies the code to run if there is no case match:

--> Example
The getDay() method returns the weekday as a number between 0 and 6.

If today is neither Saturday (6) nor Sunday (0), write a default message: */


switch (day = new Date().getDay()){
    case 6:
        day = 'Saturday';
        break;
    case 0:
        day = 'Sunday';
        break;
    default:
        text= 'Looking forward to the weekend'
}
console.log(day)

/* -----------------------Switching Details-----------------------------
*If multiple cases matches a case value, the first case is selected.

*If no matching cases are found, the program continues to the default label.

*If no default label is found, the program continues to the statement(s) after the switch.

----------------------------Strict Comparison------------------------------
*Switch cases use strict comparison (===).

The values must be of the same type to match.

A strict comparison can only be true if the operands are of the same type.

In this example there will be no match for x: */

let x = "0";

switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}

console.log(text)