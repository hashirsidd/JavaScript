var input;
input = Math.random();
input = (input * 10) + 1;
input = Math.round(input);
var inputNum;
for(i=0 ; i < 4 ; i++){ 
    if(i < 3){
        inputNum = parseInt(prompt("Input Your Number"));
            if ( input == inputNum){
            alert("You 'WIN' :D");
       document.write("The Random Number was" + "  " + input + " (:");
            
    break ;   
    }
            else if(input < inputNum ){
            alert("Your number is 'BIGGER'");
    // break;    
    }
             else if(input > inputNum  ){
            alert("Your number is 'SMALLER'");
    // break;    
    }
              else{
            alert("Try your luck");
        }
    }
    else{
        alert("Go Home Idot !! You 'Lose' !!");
       document.write("The number was" + "  " + input);
    }
}