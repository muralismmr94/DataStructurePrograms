var util=require('../Utility/UtilityDS');
function primes()
{
    var primes=[];
    var initial=0;
    var final=100;
    
    for(let i=0;i<10;i++)
    {
        primes[i]=util.isPrime(initial,final)
        console.log(initial+" "+final+":"+"["+primes[i]+"]");
        initial=initial+100;
        final=final+100;

    }
}
primes();