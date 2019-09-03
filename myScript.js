/*

Complete the functions below that finds the largest prime factor of a number. 
The function that takes the number as input and return the largest prime factor as output. 


*/

let isPrime = function (n) {
   // function to check whether the number is prime or not.
let i;
let c=0;
for(i=1;i<=num;i++)
{
if(n%i===0)
c++;
}
if(c===2)
return true;
else
return false;
};

let getLargestPrimeFactor = function (n) {
    // function to find the largest prime factor
let i;
let p=1;
let a;
for(i=1;i<=n;i++)
{
    if(n%i===0)
    {
        a=isPrime(i);
        if(a===true)
        {
            if(i>p)
            p=i;
        }
    }
}
return p;
};
let b=window.prompt();
alert(getLargestPrimeFactor(b));
