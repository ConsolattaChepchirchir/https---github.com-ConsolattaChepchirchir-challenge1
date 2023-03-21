const prompt=require("prompt-sync")();
let speed=prompt("Enter speed in Km/hr:");
function speeddata(){

    if(speed < 70){
        console.log("Ok")
    }
    else if (speed >70){
        const Points=((speed-70)/5)
        
        console.log(Math.ceil(Points));
        
        if(Points>=12){
            console.log("License suspended")
        }
    }
else{
    console.log("Kindly re-enter the appropriate speed in km")
}
}
speeddata(); 