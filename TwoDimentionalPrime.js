

/** 
 * @Purpose     :   It is used to
 * @file        :   Calander.js
 * @overview    :   It takes the user input as year and month and produce that month calender to user.
 * @author      :   Murali <muralismmr94@gmail.com>.
 * @version     :   1.0
 */
var util=require('../DataStructure/Implementation/utilnum');
function primes()
{
    var primes=[];
    var initial=0;
    var final=100;
    
    for(let i=0;i<10;i++)
    {
        primes[i]=util.isPrimes(initial,final)
        console.log(initial+" "+final+":"+"["+primes[i]+"]");
        initial=initial+100;
        final=final+100;

    }
}
primes();