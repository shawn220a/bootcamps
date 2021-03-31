const isProgrammer = true;
const isFullStack = true;

if(isProgrammer) {
    if(isFullStack) {
        console.log("Your frontend and backend developer, you have the best of both worlds.");
    } else {
        console.log("Ah your a programmer, what are you frontend or just backend?");
    }
} else {
    console.log("You don't program. That's cool. I hope your doing something you love.");
}

// In class we talked about if you could combine multiple if statements as ternary. 
// Yes, if statement above can also be expressed as a ternary. 
// I don't recommend doing this but having a simple if else statement can clean up your code.
isProgrammer ? isFullStack ? console.log("Your frontend and backend developer, you have the best of both worlds.") : console.log("Ah your a programmer, what are you frontend or just backend?") : console.log("You don't program. That's cool. I hope your doing something you love.");