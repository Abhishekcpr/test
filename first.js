//  code for changing names in lower section of footer
var occup = ["Abhishek" , "Madhur", "Sonali","Saurabh", "Aastha"] ;
// 

var i = 0 ,j=0;
var names = occup.length ; // Number of names in list
var str,variable=" " ;
var timer = 125 ;
 setInterval(() => {
     var value = i%names ;
     str = occup[value];
    change = str.length;
    variable = variable + str[j];
    console.log(variable);
   
  if(j == str.length)
    {
       
   
      for(x = 0; x<10000; x++)
      {
        for(y=0; y<100000; y++)
        {
          // do nothing 
        }
      }
    i++ ; 
    j=0;
    variable = ''
  
    
    }
    else
    {
     j++ ;
    
    }

    document.getElementById("yourName").innerText = variable;
 }, timer);