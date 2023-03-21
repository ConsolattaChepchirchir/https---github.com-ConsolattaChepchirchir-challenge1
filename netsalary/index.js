const prompt=require("prompt-sync")();
//prompting the console
let salary=prompt("Enter salary:");
let salaryPayable=salary;
//initialize
let paye;
const nssf =400;
let nhif;
const deductions= (paye+nhif+nssf);
//setting the condition of the paye
function amount(){
    
if (salaryPayable<24000){
    paye=(salaryPayable*0.1)
}
else if(salaryPayable< 32332 && salaryPayable >2400){
    paye= (salaryPayable*0.25)
}
else if (salaryPayable>32333){
    paye=(salaryPayable*0.3)
}
//calling on the nhif data
else if (salaryPayable< 6000){
        nhif=150;
    }
else if(salaryPayable>=6000 && salaryPayable<8000){
    nhif=300 ;   
}
else if(salaryPayable>=8000 && salaryPayable<12000){
    salaryPayable= 400;
}
else if(salaryPayable>=12000 && salaryPayable<15000){
    nhif=500;
}
else if( salaryPayable>=15000 && salaryPayable<20000){
    nhif=600;
}
else if(salaryPayable>=20000 && salaryPayable<25000){
        nhif=700;
    }
else (salaryPayable>=25000 && salaryPayable <30000)
{    nhif=850;
}

console.log(`PAYE: ${paye}`) //display the paye
console.log(`NHIF Deduction: ${nhif}`)//display nhif data 
console.log(`NSSF Deduction: ${nssf}`)//displaying the nssf data
const TotalSalary=(salaryPayable-deductions)
        console.log(TotalSalary);
}

amount();