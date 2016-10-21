// var input;
// input = Math.random();
// input = (input * 10) + 1;
// input = Math.round(input);
// var inputNum;
// for(i=0 ; i < 4 ; i++){ 
//     if(i < 3){
//         inputNum = parseInt(prompt("Input Your Number"));
//             if ( input == inputNum){
//             alert("You 'WIN' :D");
//        document.write("The Random Number was" + "  " + input + " (:");
            
//     break ;   
//     }
//             else if(input < inputNum ){
//             alert("Your number is 'BIGGER'");
//     // break;    
//     }
//              else if(input > inputNum  ){
//             alert("Your number is 'SMALLER'");
//     // break;    
//     }
//               else{
//             alert("Try your luck");
//         }
//     }
//     else{
//         alert("Go Home Idot !! You 'Lose' !!");
//        document.write("The number was" + "  " + input);
//     }
// }





function playGame() {

var input;
input = Math.random();
input = (input * 10) ;
input = Math.round(input);
var inputNum;
for(i=0 ; i < 4 ; i++){ 
    if(i < 3){
        inputNum = parseInt(prompt("Input Number 1-10"));
            if ( input == inputNum){
            alert("You 'WIN' :D" +  "The number was" + "  " + input);
        playGame();
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
        alert("You 'Lose' !!" + "  " +  "The number was" + "  " + input);
  var userIn = prompt ("Do You want to PLAY Again?" );
    if( userIn === "yes" ){
        playGame();
    }     
    else if( userIn === "no"){
        alert("Thanks For playing Good Bye")
    break;
    }
    }
}
}
playGame();