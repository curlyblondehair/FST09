console.log("Hello World!");
// This is a single-line comment.
/* 
This is a
multi-line
comment.
*/

// Variables: container/box.
/*
let - mutable/changeable
var
const
*/
// Camel-case naming convension.
let firstName = "John";
console.log("Firstname:", firstName);
firstName = "Jane";
console.log("Firstname:", firstName);

// {} - Code Block
{
  var email = "janesmith@example.com";
  let username = "janesmith40";
  console.log("Username:", username);
}
/*
Note: You can only access a block scope variable 
inside of the block where you defined it.
console.log("Username:", username); 
ReferenceError: username is not defined.
*/
console.log("Email:", email);
