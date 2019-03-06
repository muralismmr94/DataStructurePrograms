var UtilityDS=require('../Utility/UtilityDS');
var Util=require('util');
var Utility=require('../Utility/Utility');
arrPrime=[];
var array=[['0-100 :'],['100-200 :'],['200-300 :'],['300-400 :'],['400-500 :'],['500-600 :'],['600-700 :'],['700-800 :'],['800-900 :'],['900-1000 :']];

for(let i=2;i<1000;i++)
{
    if(Utility.isPrime(i))
    {
        arrPrime.push(i);
    }
}

var i=0,j=1,range=100;
for(let index=0;index<arrPrime.length;index++)
{
    for(let index1=index+1;index1<arrPrime.length;index1++)
    {
        if(Utility.isAnagram(arrPrime[index],arrPrime[index1]))
        {
            if(arrPrime[index]<=range)
            {
                if(!array.includes(arrPrime[index])&& !array.includes(arrPrime[index1]))
                {
                    array[i][j]=arrPrime[index];
                     j++;
                }
            }
        else
         {
           j=1;
           range=range+100;
           i++;
           if(!array.includes(arrPrime[index]) && !array.includes(arrPrime[index1]))
             {   
                array[i][j]=arrPrime[index];
                
             }
         }  
     }
  }
}
    
for(var i=0;i<array.length;i++)
 {
  for(var j=0;j<array[i].length;j++)
    {
        Util.print(array[i][j]+ " ");
    }
    console.log();
 } 
