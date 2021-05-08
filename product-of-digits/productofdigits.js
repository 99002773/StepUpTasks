

const readline=require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});
readline.question('Enter Number',(num)=>{
    var n=num;
    var prod=1;
    function getProd(n){
        if(n < 0 || n > 32767)
            return -1
        else{
            for(let i of n)
                prod=prod*i;
            return prod
        }
    }
    var res=getProd(n);
    if(res==-1)
        console.log("invalid input");
    else
        console.log(res);
    readline.close();
})