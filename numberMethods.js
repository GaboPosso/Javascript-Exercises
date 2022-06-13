
//JavaScript Number Methods
//toString(): returns a number as a String
let x = 123;
x.toString();
//toExponential: returns a strin, with a number rounde and written using exponential notation.
let y = 9.656;
y.toExponential(2);
y.toExponential(4);
y.toExponential(6);
//toFixed: returns a strinf, with the number written with a specified number of decimals.
y.toFixed(0);
y.toFixed(2);
y.toFixed(4);
y.toFixed(6);
//toPrecision() returns a string, with a number written with a specified length.
y.toPrecision();
y.toPrecision(2);
y.toPrecision(4);
y.toPrecision(6);
//valueOf() returns a number as a number.
y.valueOf(9);
(100+23).valueOf();
//Converting variables to Numbers.

//Number(): can be used to convert variables to numbers:

Number(true);
Number(false);
Number("10");
Number("John");
Number(new Date("1970-01-01"));//0
Number(new Date("1970-01-02"));//86400000
Number(new Date("2017-09-30"));//15067296000000

//The parseInt() Method: parses a string and return a whole number. Spaces are allowed Only the first number is returned:
parseInt("-10"); //-10
parseInt("-10.33"); //-10
parseInt("10 20 30");// 10
parseInt("10 years");// 10
parseInt("years 10");// NaN

//The parseFloat() Method: parses a String and returns a number
parseFloat("10"); //10
parseFloat("10.33");//10.33
parseFloat("10 years");//10
parseFloat("years 10");//NaN

//MAX_VALUE and MIN_VALUE: returns the largest and the lowest number in JavaScript
console.log(Number.MAX_VALUE);//1.7976931348623157e+308
console.log(Number.MIN_VALUE);//5e-324

//JavaScript POSITIVE_INFINITY and NEGATIVE_INIFINITY
console.log(Number.POSITIVE_INFINITY)//Infinity
console.log(Number.NEGATIVE_INFINITY)//-Infinity

//JavaScript NaN Not a Number
y = Number.NaN; //NaN

//NUMBER PROPERTIES CANNOT BE USED ON VARIABLES
//Number properties belongs to JavaScript number object wrapper called Number. These propeties can only be accessed with the as Number.Property.
//Using myNumber.Property, wher myNumber is a variable, expression or value, will return -undefined-

