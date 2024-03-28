#! //usr/bin/env node 

import inquirer from "inquirer"; 
// 1-computer will generate a random number
// 2-user input for number guessing
// 3- compare user input with computer generated number and show result

const randomnumber = Math.floor(Math.random()*10+1);

const answer = await inquirer.prompt([
    {
name: "userguessnumber",
type: "number",
message : "Enter Your Guess Number (Number limit from 1 to 10):",
    },
]);
if (answer.userguessnumber === randomnumber){
    console.log("CONGRATULATION ! You Guess A correct Number");
}
else{
    console.log("SORRY,You Guess A Wrong Number");
}