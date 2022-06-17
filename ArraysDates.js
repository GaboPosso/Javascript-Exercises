

//---------------------------------JAVASCRIPT DATES--------------------------------------------------
const d = new Date();
console.log(d);
//Date methods
//toString
const dtoString = d.toString();
console.log(dtoString);
//toUTCString()
d.toUTCString();
//toDateString()
console.log(d.toDateString())
//toISOString()
console.log(d.toISOString());
//Date Parsing
//Date.parse
console.log(Date.parse('March 21, 2012'))
const ModD = Date.parse('March 21, 2012');
dd = new Date (ModD);

//----------------------------JAVASCRIPT Get Date Methods------------------------------------------------

d.getTime();
d.getFullYear();
d.getMonth();
//.
//.
//.
//------------------------------------------Set Date Methods-------------------------------------------
d.setFullYear(2020);