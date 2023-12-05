/*1- Write a program that allow to user enter number then printit 

var inputUser=Number(window.prompt("Please Enter number"))
console.log(inputUser);

*/


/**
 2-Write a program that take number from user then print yes if that number can divide by 3
 and 4 otherwise print no 
 
    var oddNumber;
var evenNumber;
var inputNumber=Number(window.prompt("please Enter Number"))

if(inputNumber / 3){
    console.log("yes");

}
else if(inputNumber / 4){
    console.log("Yes");
}
else{
    console.log("No")
}

 */


/**
 3- Write a program that allows the user to insert 2 integers then print the max

    var inputNum1=Number(window.prompt("Welcome in Our Application To Calaclate The Max number ... Please Enter The First Number"))
var inputNum2=Number(window.prompt(" Please Enter The Secound Number"))

if(inputNum1 > inputNum2){
    console.log(inputNum1);
}
else{
    console.log(inputNum2);
}
 */

/**
 4- Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive.

var inputNum=Number(window.prompt("Welcome in Our Application To define This number is negative or positive Please Enter The Number"))

if(inputNum >= 0){
    console.log("positive");
}
else{
    console.log("Negative");
}

 */

/**
    5- Write a program that take 3 integers from user then print the max element
    and the min element.

     var inputNum1=Number(window.prompt("Welcome in Our Application To Calaclate The Max number and Min Number ... Please Enter First Number "))
    var inputNum2=Number(window.prompt("Please Enter Secound Number "))
    var inputNum3=Number(window.prompt("Please Enter Third Number "))

    var max=inputNum1;
    if(inputNum2 > max){
        max = inputNum2;
    }

    if(inputNum3>max){
        max=inputNum3;
    }
    var min=inputNum1;
    if(inputNum2 < min){
        min = inputNum2;
    }

    if(inputNum3<min){
        min=inputNum3;
    }
    console.log( "The Max value Is = " +max);
    console.log( "The Min value Is = " +min);
 */



    /**
     6- Write a program that allows the user to insert integer number then
    check If a number is oven or odd

    var inputNum=Number(window.prompt("Please Enter Number"))
   if (inputNum % 2 == 0) {
    console.log("Even Number");
   }

   if (inputNum % 3 == 0) {
    console.log("Odd Number");
   }

     */
    

   /**
    8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
    then print vowel otherwise print consonant

     var inputChar=window.prompt("Please Enter Character")
     switch(inputChar)   {
        case 'a':
        console.log('vowel');
        break;

        case 'e':
        console.log('vowel');
        break;

        case 'l':
        console.log('vowel');
        break;

        case 'o':
        console.log('vowel');
        break;

        case 'u':
        console.log('vowel');
        break;

        default:
            console.log('consonant')
     }


    */
   
     /**
      9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to
         that’s number


          var inputNum=Number(window.prompt("please enter number "))
         for(var i =1; i <= inputNum; i++){
            console.log(i);
         }


      */    

         /**
          10- Write a program that allows userto insert integerthen print a multiplication table up to 12.
          
          var num=Number(window.prompt("Enter Number"));
          
          for(var i=2; i<=12; i++){
           var result = num * i;
           console.log(result);
          }

          */

          /**
           11- Write a programthat allows to user to insert number then print all even numbers
            between 1 to this number
            
            var num=Number(window.prompt("Please Enter Your Number"))
          for(var i=0; i<=num; i++ ){
            if (i%2==0){
                console.log(i)
            }
          }

           */

          /**
           12- Write a program that take two integers then print the power

            var inputNum1=Number(window.prompt("Please Enter First Number "))
          var inputNum2=Number(window.prompt("Please Enter Secound Number "))

          var powerNum=inputNum1 ** inputNum2;
          console.log(powerNum);

           */

          /**
           12- Write a program to enter marks of five subjects and calculate total, average and
               percentage.

          var subj1=Number(window.prompt("Write marks for subject 1"))
          var subj2=Number(window.prompt("Write marks for subject 2"))
          var subj3=Number(window.prompt("Write marks for subject 3"))
          var subj4=Number(window.prompt("Write marks for subject 4"))
          var subj5=Number(window.prompt("Write marks for subject 5"))
          var total=(subj1+subj2+subj3+subj4+subj5);    
          var avg=total/5;
          var con=500;
          var percentage=(total/con)
          var percentage1=percentage*100;

          console.log("The total is = " +total);
          console.log("The avg is = " +avg);
          console.log("The percentage is = " +percentage1);

               
           */

          /**
           13-Write a program to input month number and print number of days in that
            month.

            var inputNum=Number(window.prompt("Please Enter Month Number"))
          switch(inputNum){
            case 1:
                console.log("Number of Days is : " +31);
                break;
                
                case 2:
                console.log("Number of Days is : " +28);
                break;

                case 3:
                console.log("Number of Days is : " +31);
                break;

                case 4:
                console.log("Number of Days is : " +30);
                break;

                case 5:
                console.log("Number of Days is : " +31);
                break;

                case 6:
                console.log("Number of Days is : " +30);
                break;

                case 7:
                console.log("Number of Days is : " +31);
                break;

                case 8:
                console.log("Number of Days is : " +31);
                break;

                case 9:
                console.log("Number of Days is : " +30);
                break;

                case 10:
                console.log("Number of Days is : " +31);
                break;

                case 11:
                console.log("Number of Days is : " +30);
                break;

                case 12:
                console.log("Number of Days is : " +31);
                break;

                default:
                    console.log("Invalid month");
          }

           */

          /**
           14- Write a program to input marks of five subjects
               c, Chemistry, Biology, Mathematics and Computer
               , Find percentage and grade



                     var Physics=Number(window.prompt("Please enter mark of Physics"))   
            var Chemistry=Number(window.prompt("Please enter mark of Chemistry")) 
            var Biology=Number(window.prompt("Please enter mark of Biology")) 
            var Mathematics=Number(window.prompt("Please enter mark of Mathematics")) 
            var Computer=Number(window.prompt("Please enter mark of Computer")) 

            var fullMark=100;

            var percentagePhysics= (Physics/fullMark)*100;
            var percentageChemistry= (Chemistry/fullMark)*100;
            var percentageBiology= (Biology/fullMark)*100;
            var percentageMathematics= (Mathematics/fullMark)*100;
            var percentageComputer= (Computer/fullMark)*100;

            switch(true){
                case (percentagePhysics >= 90 ):
                    console.log("Your Grade in Physics Is : A .. \n Percentage Is: "+ percentagePhysics +"%");
                    break;

                    case (percentagePhysics >= 80 ):
                    console.log("Your Grade in Physics Is : B \n Percentage Is: "+ percentagePhysics +"%");
                    break;


                    case (percentagePhysics >= 70 ):
                    console.log("Your Grade in Physics Is : C \n Percentage Is: "+ percentagePhysics +"%");
                    break;

                    case (percentagePhysics >= 60 ):
                    console.log("Your Grade in Physics Is : D \n Percentage Is: "+ percentagePhysics +"%");
                    break;

                    case (percentagePhysics >= 40 ):
                    console.log("Your Grade in Physics Is : E \n Percentage Is: "+ percentagePhysics +"%");
                    break;

                    case (percentagePhysics < 40 ):
                    console.log("Your Grade in Physics Is : F \n Percentage Is: "+ percentagePhysics +"%");
                    break;

                    case (percentagePhysics < 40 ):
                    console.log("Your Grade in Physics Is : F \n Percentage Is: "+ percentagePhysics +"%");
                    break;

                    
                       

            }


            switch(true){
                case (percentageChemistry >= 90 ):
                    console.log("Your Grade in Chemistry Is : A \n Percentage Is: "+ percentageChemistry +"%");
                    break;

                    case (percentageChemistry >= 80 ):
                    console.log("Your Grade in Chemistry Is : B \n Percentage Is: "+ percentageChemistry +"%");
                    break;


                    case (percentageChemistry >= 70 ):
                    console.log("Your Grade in Chemistry Is : C \n Percentage Is: "+ percentageChemistry +"%");
                    break;

                    case (percentageChemistry >= 60 ):
                    console.log("Your Grade in Chemistry Is : D \n Percentage Is: "+ percentageChemistry +"%");
                    break;

                    case (percentageChemistry >= 40 ):
                    console.log("Your Grade in Chemistry Is : E \n Percentage Is: "+ percentageChemistry +"%");
                    break;

                    case (percentageChemistry < 40 ):
                    console.log("Your Grade in Chemistry Is : F \n Percentage Is: "+ percentageChemistry +"%");
                    break;

                    case (percentageChemistry < 40 ):
                    console.log("Your Grade in Chemistry Is : F \n Percentage Is: "+ percentageChemistry +"%" );
                    break;

                    
                       

            }


            switch(true){
                case (percentageBiology >= 90 ):
                    console.log("Your Grade in Biology Is : A \n Percentage Is: "+ percentageBiology +"%");
                    break;

                    case (percentageBiology >= 80 ):
                    console.log("Your Grade in Biology Is : B \n Percentage Is: "+ percentageBiology +"%");
                    break;


                    case (percentageBiology >= 70 ):
                    console.log("Your Grade in Biology Is : C \n Percentage Is: "+ percentageBiology +"%");
                    break;

                    case (percentageBiology >= 60 ):
                    console.log("Your Grade in Biology Is : D \n Percentage Is: "+ percentageBiology +"%");
                    break;

                    case (percentageBiology >= 40 ):
                    console.log("Your Grade in Biology Is : E \n Percentage Is: "+ percentageBiology +"%");
                    break;

                    case (percentageBiology < 40 ):
                    console.log("Your Grade in Biology Is : F \n Percentage Is: "+ percentageBiology +"%");
                    break;

                    case (percentageBiology < 40 ):
                    console.log("Your Grade in Biology Is : F \n Percentage Is: "+ percentageBiology +"%");
                    break;

                    
                       

            }

            switch(true){
                case (percentageMathematics >= 90 ):
                    console.log("Your Grade in Mathematics Is : A \n Percentage Is: "+ percentageMathematics +"%");
                    break;

                    case (percentageMathematics >= 80 ):
                    console.log("Your Grade in Mathematics Is : B \n Percentage Is: "+ percentageMathematics +"%");
                    break;


                    case (percentageMathematics >= 70 ):
                    console.log("Your Grade in Mathematics Is : C \n Percentage Is: "+ percentageMathematics +"%");
                    break;

                    case (percentageMathematics >= 60 ):
                    console.log("Your Grade in Mathematics Is : D \n Percentage Is: "+ percentageMathematics +"%v");
                    break;

                    case (percentageMathematics >= 40 ):
                    console.log("Your Grade in Mathematics Is : E \n Percentage Is: "+ percentageMathematics +"%");
                    break;

                    case (percentageMathematics < 40 ):
                    console.log("Your Grade in Mathematics Is : F \n Percentage Is: "+ percentageMathematics +"%");
                    break;

                    case (percentageMathematics < 40 ):
                    console.log("Your Grade in Mathematics Is : F \n Percentage Is: "+ percentageMathematics +"%");
                    break;

                    
                       

            }

            switch(true){
                case (percentageComputer >= 90 ):
                    console.log("Your Grade in Computer Is : A \n Percentage Is: "+ percentageComputer +"%");
                    break;

                    case (percentageComputer >= 80 ):
                    console.log("Your Grade in Computer Is : B \n Percentage Is: "+ percentageComputer +"%");
                    break;


                    case (percentageComputer >= 70 ):
                    console.log("Your Grade in Computer Is : C \n Percentage Is: "+ percentageComputer +"%");
                    break;

                    case (percentageComputer >= 60 ):
                    console.log("Your Grade in Computer Is : D \n Percentage Is: "+ percentageComputer +"%");
                    break;

                    case (percentageComputer >= 40 ):
                    console.log("Your Grade in Computer Is : E \n Percentage Is: "+ percentageComputer +"%");
                    break;

                    case (percentageComputer < 40 ):
                    console.log("Your Grade in Computer Is : F \n Percentage Is: "+ percentageComputer +"%");
                    break;

                    case (percentageComputer < 40 ):
                    console.log("Your Grade in Computer Is : F \n Percentage Is: "+ percentageComputer +"%");
                    break;

                    
                       

            }

           */

            /**
              15- Write a program to print total number of days in month
            

            var inputNum=Number(window.prompt("Please Enter Month Number"))
          switch(inputNum){
            case 1:
                console.log("Number of Days is : " +31);
                break;
                
                case 2:
                console.log("Number of Days is : " +28);
                break;

                case 3:
                console.log("Number of Days is : " +31);
                break;

                case 4:
                console.log("Number of Days is : " +30);
                break;

                case 5:
                console.log("Number of Days is : " +31);
                break;

                case 6:
                console.log("Number of Days is : " +30);
                break;

                case 7:
                console.log("Number of Days is : " +31);
                break;

                case 8:
                console.log("Number of Days is : " +31);
                break;

                case 9:
                console.log("Number of Days is : " +30);
                break;

                case 10:
                console.log("Number of Days is : " +31);
                break;

                case 11:
                console.log("Number of Days is : " +30);
                break;

                case 12:
                console.log("Number of Days is : " +31);
                break;

                default:
                    console.log("Invalid month");
          }
             */





            /**
             16- Write a program to check whether an alphabet is vowel or consonant

     var inputChar=window.prompt("Please Enter Character")
     switch(inputChar)   {
        case 'a':
        console.log('vowel');
        break;

        case 'e':
        console.log('vowel');
        break;

        case 'l':
        console.log('vowel');
        break;

        case 'o':
        console.log('vowel');
        break;

        case 'u':
        console.log('vowel');
        break;

        default:
            console.log('consonant')
     }
             */

     /**
      17- Write a program to find maximum between two numbers

         var inputNum1=Number(window.prompt("Please Enter First Number"))
        var inputNum2=Number(window.prompt("Please Enter Secound Number"))
    switch(true){
        case (inputNum1 > inputNum2):
            console.log("The Max Number Is :"+ inputNum1 );
            break;
        case (inputNum1 < inputNum2):
             console.log("The Max Number Is :" + inputNum2);
            break;

      }


      */


      /**
       18- Write a program to check whether a number is even or odd

        var inputNum=Number(window.prompt("Please enter Your Number"))
       switch(true){
        case ((inputNum % 2) ==0):
            console.log("Your Entered Number Is Even Number");
            break;

            case ((inputNum % 2) !=0):
                console.log("Your Entered Number Is Odd Number");
                break;    
       }

       */

       /**
        19- Write a program to check whether a number is positive or negative or zero

         var inputNum=Number(window.prompt("Please Enter Your Number to check whether a number is positive or negative or zero"))
        switch(true ){
            case (inputNum > 0):
                console.log("Your Entered Number Is Positive Number");
                break;

                case (inputNum == 0):
                console.log("Your Entered Number Is zero Number");
                break;


                case (inputNum < 0):
                console.log("Your Entered Number Is negative Number");
                break;

                case (inputNum === ""):
                    console.log("Please Enter A Number")
                    break;
        }

        */

        /**
         20- Write a program to create Simple Calculator 

         var inputNum1=Number(window.prompt("Please Enter first Number "))
        var inputNum2=Number(window.prompt("Please Enter Secound Number "))
        var operation = window.prompt("Enter The Operation You Want To Perform +,-,*,/")
         switch (true) {
            case (operation == "+" ):
                result = inputNum1+inputNum2 ;
                console.log("Your Result Is : "+ result);
                
                break;

                case (operation == "-" ):
                    result = inputNum1-inputNum2 ;
                    console.log("Your Result Is : "+ result);
                    
                    break;


                    case (operation == "*" ):
                        result = inputNum1*inputNum2 ;
                        console.log("Your Result Is : "+ result);
                        
                        break;


                        case (operation == "/" ):
                            result = inputNum1/inputNum2 ;
                            console.log("Your Result Is : "+ result);
                            
                            break;
         }

         */
        
     
      

           
          
         

          

          
          
           







