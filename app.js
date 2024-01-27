let max=prompt("Enter a Maximum number");
max=parseInt(max);
let random=Math.floor(Math.random()*max)+1;
let num=prompt("Enter the Guess number");
    while(1){
     if (num==random)
     {
        console.log(`Congrats you have found the number i.e ${random}`);
        break;
     }
    
    else if((num=="Quit")||(num=="quit"))
    {
        console.log(`YOu have quitted the game .....The random number was ${random}`);
        break;
    }

    else if(num>random)
        {
           num=prompt("Hint :: you num was larger ....Please Try again");
        }
     else
          {

          num=prompt("Hint :: you num was smaller ....Please Try again");
        
        }   
    

    }

