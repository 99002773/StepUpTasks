const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question("", (salary) => {
    if(salary>8000)
    {
        console.log("Salary too large")
    }
    else if(salary<0)
    {
        console.log("Salary too small");
    }
    else{
        readline.question("",(shifts)=>{
            if(shifts<0)
                console.log("Shifts too small");
            else{
                function calculateSalary(sal,shf){
                    let sav=(sal - ((sal * 20/100) + (sal * 30/100))) + (shifts * (sal * 2/100)) ;
                    console.log(sav);
                }
            }
            calculateSalary(salary,shifts);
            readline.close();
        });
    }
    readline.close()
  })