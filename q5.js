function game(){
    alert("😊Guess your number to WIN PRIZE(Number limit 1 to 10 only)")
    let a;
    while ( a != 0){
        let n = prompt("Enter The Number: ");
        if ( n < 0 ){
            alert("NOT MATCHED");
        } 
        else if (n > 0 && n <=9){ 
            alert("NOT MATCHED");
        }
        else if( n == 10){
            alert("Good work😎 Hope you enjoyed our game");
            
            break;                           
        } 
        a++;
    }    
        
    
    
}