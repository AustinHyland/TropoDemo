answer();
wait(1000);
say("Hello Hello");  
var result = ask("Is it me you're looking for?  Choose from yes or no.", {
   choices:"yes, no",
   timeout: 10.0,
   attempts:3,
});

if (result.value == "yes") {
    
    say("You found me")
    
} else {
    
    say("Your search continues")
}
wait(1000);
say("Goodbye", {voice:"susan"});